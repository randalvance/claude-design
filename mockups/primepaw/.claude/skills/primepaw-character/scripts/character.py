#!/usr/bin/env python3
"""Wire a Primepaw character into the prototype, once its cuts are built by pet/build.py.

    character.py list                      the characters that exist, and which one the boards wear
    character.py register <id> "<Name>"    the portrait picker on the Setup and Home boards lists it
    character.py use <id>                  every board wears it: the pet atlas, the face sticker, the frame size
                                           (its own Pet boards take the frame size too, after a rebuild)
    character.py board <id> "<Name>"       a Pet board pair for it, copied from the puppy's, listed on the canvas

Every command is safe to run again; it reports what it changed. The script finds the Primepaw folder
from its own location (mockups/primepaw/.claude/skills/primepaw-character/scripts/).
"""
import glob, json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..', '..', '..', '..'))
PET = os.path.join(ROOT, 'pet')
BLOCK = re.compile(r'/\* pet: .*?/\* /pet \*/', re.S)
FACES_RE = re.compile(r'^const FACES = (\[.*\]);$', re.M)
PICKER_TAG = re.compile(r'<sc-for list="\{\{m\.faces\}\}" as="f" hint-placeholder-count="\d+">')
PLAIN_FACE = '<span class="jface" aria-hidden="true"></span>'
OWN_FACE = '<span class="jface" style="background-image:url(pet/{{f.id}}-face.png)" aria-hidden="true"></span>'


def px(v):
    return ('%.1f' % v).rstrip('0').rstrip('.')


def boards():
    return sorted(glob.glob(os.path.join(ROOT, 'Diorama*.dc.html')))


def read(p):
    with open(p, encoding='utf-8') as f:
        return f.read()


def write(p, s):
    with open(p, 'w', encoding='utf-8') as f:
        f.write(s)


def manifest(cid):
    p = os.path.join(PET, cid + '.json')
    if not os.path.exists(p):
        sys.exit(f'no {p}: build the character first (python3 pet/build.py --name {cid})')
    for f in (cid + '.png', cid + '-face.png'):
        if not os.path.exists(os.path.join(PET, f)):
            sys.exit(f'missing pet/{f}')
    if not os.path.exists(os.path.join(PET, cid + '-walk.json')):
        print(f'note: no pet/{cid}-walk.json yet, so the standee is missing; the boards do not need it')
    return json.loads(read(p))


def faces_of(s):
    m = FACES_RE.search(s)
    return (m, json.loads(m.group(1))) if m else (None, None)


def set_faces(s, m, arr):
    return s[:m.start(1)] + json.dumps(arr, separators=(',', ':'), ensure_ascii=False) + s[m.end(1):]


def worn_by(s):
    """The character a board wears, read off its pet block."""
    b = BLOCK.search(s)
    if not b:
        return None
    m = re.search(r'\.pet\{[^}]*url\(pet/([a-z0-9-]+)\.png\)', b.group(0))
    return m.group(1) if m else None


def cmd_list():
    ids = sorted(os.path.basename(p)[:-5] for p in glob.glob(os.path.join(PET, '*.json')) if not p.endswith('-walk.json'))
    shell = read(os.path.join(ROOT, 'Diorama.dc.html'))
    worn = worn_by(shell)
    _, listed = faces_of(read(os.path.join(ROOT, 'DioramaSetup.dc.html')))
    names = {f['id']: f['name'] for f in (listed or [])}
    for cid in ids:
        m = json.loads(read(os.path.join(PET, cid + '.json')))
        walk = 'standee' if os.path.exists(os.path.join(PET, cid + '-walk.json')) else 'no standee'
        pet_boards = sorted(os.path.basename(p) for p in boards() if os.path.basename(p).startswith('DioramaPet') and f'pet/{cid}.png' in read(p))
        print(f"{cid:10s} {m['css']['w']:g}x{m['css']['h']:g} CSS px, {walk}; picker: {names.get(cid, 'not listed')!s}; "
              f"{'worn by the boards' if worn == cid else 'not worn'}; Pet boards: {', '.join(pet_boards) or 'none'}")


def cmd_register(cid, name):
    manifest(cid)
    changed = 0
    for p in boards():
        s = read(p)
        m, arr = faces_of(s)
        if not m:
            continue
        o = s
        if not any(f['id'] == cid for f in arr):
            arr.append({'id': cid, 'name': name})
            s = set_faces(s, m, arr)
        # each option shows its own face, and the placeholder count matches the list
        t = PICKER_TAG.search(s)
        if t:
            end = s.find('</sc-for>', t.end())
            seg = s[t.start():end].replace(PLAIN_FACE, OWN_FACE, 1)
            seg = PICKER_TAG.sub(f'<sc-for list="{{{{m.faces}}}}" as="f" hint-placeholder-count="{len(arr)}">', seg, 1)
            s = s[:t.start()] + seg + s[end:]
        s = s.replace('faces: FACES.map((f, i) => ({ name: f.name,', 'faces: FACES.map((f, i) => ({ id: f.id, name: f.name,')
        if s != o:
            write(p, s); changed += 1
    print(f'{cid} listed as {name!r} in the portrait picker; {changed} boards changed')


def cmd_use(cid):
    m = manifest(cid)
    w, h = m['css']['w'], m['css']['h']
    changed = 0
    for p in boards():
        name = os.path.basename(p)
        s = read(p)
        b = BLOCK.search(s)
        if not b:
            continue
        cur = worn_by(s)
        if name.startswith('DioramaPet') and cur != cid:
            continue   # a Pet board shows its own character; only its frame size follows a rebuild
        blk = b.group(0)
        if cur and cur != cid:
            blk = blk.replace(f'pet/{cur}.png', f'pet/{cid}.png').replace(f'pet/{cur}-face.png', f'pet/{cid}-face.png')
        blk = re.sub(r'(\.pet\{--pw:)[0-9.]+(px;--ph:)[0-9.]+(px;)', lambda g: f'{g.group(1)}{px(w)}{g.group(2)}{px(h)}{g.group(3)}', blk, count=1)
        blk = re.sub(r'(\.hello \.pet\{--pw:)[0-9.]+(px;--ph:)[0-9.]+(px;)', lambda g: f'{g.group(1)}{px(w * 0.9)}{g.group(2)}{px(h * 0.9)}{g.group(3)}', blk, count=1)
        o = s
        s = s[:b.start()] + blk + s[b.end():]
        # the picker selects its first entry, so the worn character goes first
        fm, arr = faces_of(s)
        if fm and any(f['id'] == cid for f in arr):
            arr.sort(key=lambda f: f['id'] != cid)
            s = set_faces(s, fm, arr)
        if s != o:
            write(p, s); changed += 1
    print(f'the boards wear {cid} ({px(w)}x{px(h)} CSS px); {changed} boards changed')
    if changed:
        print('by hand: the /* pet: */ comment, pet/README.md, the canvas notes and the Kraft README still describe the previous character where they name it')


def cmd_board(cid, name):
    m = manifest(cid)
    w, h = m['css']['w'], m['css']['h']
    cap = ''.join(part.capitalize() for part in cid.split('-'))
    lede = name[0].lower() + name[1:] if name.split(' ')[0] in ('A', 'An', 'The') else name  # "Jarvis as a paper cat"
    canvas_p = os.path.join(ROOT, 'canvas.json')
    canvas = json.loads(read(canvas_p))
    y = canvas['boards'][f'DioramaPet{cap}.dc.html']['y'] if f'DioramaPet{cap}.dc.html' in canvas['boards'] else max(v['y'] for v in canvas['boards'].values()) + 1400
    made = []
    for src, dst, x, dark in (('DioramaPet.dc.html', f'DioramaPet{cap}.dc.html', 0, ''), ('DioramaPetDark.dc.html', f'DioramaPet{cap}Dark.dc.html', 1540, ', dark mode')):
        dp = os.path.join(ROOT, dst)
        if os.path.exists(dp):
            print(f'{dst} exists, left as it is')
        else:
            s = read(os.path.join(ROOT, src))
            cur = worn_by(s) or 'dog'
            for suffix in ('.png', '-face.png', '-walk.png', '-walk.json'):
                s = s.replace(f'pet/{cur}{suffix}', f'pet/{cid}{suffix}')
            s = re.sub(r'(\.pet\{--pw:)[0-9.]+(px;--ph:)[0-9.]+(px;)', lambda g: f'{g.group(1)}{px(w)}{g.group(2)}{px(h)}{g.group(3)}', s, count=1)
            s = re.sub(r'<title>[^<]*</title>', f'<title>Jarvis as {lede}: peeking, sticker and standee</title>', s, count=1)
            write(dp, s); made.append(dst)
        if dst not in canvas['boards']:
            canvas['boards'][dst] = {'x': x, 'y': y, 'w': 1440, 'h': 900, 'title': f'Jarvis as {lede} — peeking, sticker and standee{dark}, live demo',
                                    'page': 'diorama', 'expand': 'fill', 'is_interactive': True}
            canvas['order'].append(dst)
    write(canvas_p, json.dumps(canvas, indent=2, ensure_ascii=False) + '\n')
    print(f'Pet boards for {cid}: {", ".join(made) or "none new"}; listed on the canvas at y={y}')
    if made:
        s = read(os.path.join(ROOT, made[0]))
        lines = [i + 1 for i, l in enumerate(s.split('\n')) if re.search(r'pupp(y|ies)|\bdog\b', l, re.I)]
        print(f'by hand: the prose on both boards still describes the puppy on lines {lines}; rewrite it for {name}')


if __name__ == '__main__':
    a = sys.argv[1:]
    if not a or a[0] not in ('list', 'register', 'use', 'board'):
        sys.exit(__doc__)
    if a[0] == 'list':
        cmd_list()
    elif a[0] == 'use' and len(a) == 2:
        cmd_use(a[1])
    elif a[0] in ('register', 'board') and len(a) == 3:
        (cmd_register if a[0] == 'register' else cmd_board)(a[1], a[2])
    else:
        sys.exit(__doc__)
