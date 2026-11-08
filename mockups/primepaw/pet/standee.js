/* The standee as a sprite sheet. pet/<id>-walk.png is the Factory Overseer's pet sheet, 6 columns by 4
   facings of 256 by 320 cells (column 0 standing, 1 and 2 the two stomps of a walk, 3 and 4 the two
   beats of working, 5 the wave), and pet/<id>-walk.json says what the columns and rows hold and how tall
   the standing figure is in its cell. A host:

     PetStandee.load('pet/dog-walk.json').then((sheet) => {
       const s = PetStandee.mount(el, sheet, { height: 116 });   // el shows one cell, the standing figure 116 CSS px tall
       s.facing('left');                                          // down, left, right or up
       s.pose('walking', t, still);                               // idle, walking, working or attention; t in seconds
     });

   Walking plays columns 1, 0, 2, 0 at 8 frames a second (a foot up, both down, the other up, both down)
   with a little bob and roll on top; working plays 3 and 4 at 5.5 a second; attention 5 and 0 at 3.2
   with a hop; idle holds column 0 and breathes. `still` (reduced motion) holds column 0 with no transform.
   The frames are the whole animation: the figure is one drawing per cell, moved between photographs. */
(function () {
  const WALK = [1, 0, 2, 0], WALK_FPS = 8, WORK = [3, 4], WORK_FPS = 5.5, ATTN = [5, 0], ATTN_FPS = 3.2;

  function load(url) {
    return fetch(url, { cache: 'no-cache' })
      .then((r) => { if (!r.ok) throw new Error(`${url}: ${r.status}`); return r.json(); })
      .then((sheet) => { sheet.src = sheet.src || url.replace(/-walk\.json(\?.*)?$/, '-walk.png'); return sheet; });
  }

  function mount(host, sheet, opts) {
    opts = opts || {};
    const rows = {}; sheet.facings.forEach((f, i) => { rows[f] = i; });
    const standing = sheet.standing || .86;
    const H = opts.height || 116;                 // the standing figure's height on screen, CSS px
    const s = H / (sheet.cell.h * standing);      // the sheet's scale
    const W = sheet.cell.w * s, CH = sheet.cell.h * s;
    let facing = rows[opts.facing] != null ? opts.facing : sheet.facings[0];
    let col = 0;
    Object.assign(host.style, {
      display: 'block', width: W + 'px', height: CH + 'px', transformOrigin: '50% 100%',
      backgroundImage: `url(${sheet.src})`, backgroundRepeat: 'no-repeat', backgroundSize: `${W * sheet.cols}px ${CH * sheet.rows}px`
    });
    const show = () => { host.style.backgroundPosition = `${-col * W}px ${-rows[facing] * CH}px`; };
    const standee = {
      width: W, height: CH, stand: H,
      facing(f) { if (f && rows[f] != null && f !== facing) { facing = f; show(); } return facing; },
      pose(doing, t, still) {
        let c = 0, lift = 0, roll = 0, sx = 1, sy = 1, ox = 0;
        if (still) { c = 0; }
        else if (doing === 'walking') {
          // a stomp every quarter second: the body rises on the lifted foot and leans over the planted one
          c = WALK[Math.floor(t * WALK_FPS) % WALK.length];
          lift = .04 * Math.abs(Math.sin(t * Math.PI * 4)); roll = .03 * Math.sin(t * Math.PI * 4);
        } else if (doing === 'working') {
          const b = Math.sin(t * Math.PI * WORK_FPS);
          c = WORK[Math.floor(t * WORK_FPS) % 2]; lift = .035 * Math.abs(b); roll = .025 * b; sx = 1 + .025 * Math.abs(b); sy = 1 - .025 * Math.abs(b); ox = .025 * b;
        } else if (doing === 'attention') {
          const wv = Math.sin(t * Math.PI * ATTN_FPS);
          c = ATTN[Math.floor(t * ATTN_FPS) % 2]; lift = .16 * Math.abs(Math.sin(t * Math.PI * 1.6)); roll = .065 * wv; sx = 1 - .025 * Math.abs(wv); sy = 1 + .035 * Math.abs(wv); ox = .045 * wv;
        } else {
          const b = Math.sin(t * Math.PI * .8); sy = 1 + .012 * b; sx = 1 - .006 * b;   // idle: breathing
        }
        if (c !== col) { col = c; show(); }
        host.style.transform = still ? 'none'
          : `translate(${(ox * H).toFixed(1)}px, ${(-lift * H).toFixed(1)}px) rotate(${roll.toFixed(3)}rad) scale(${sx.toFixed(3)}, ${sy.toFixed(3)})`;
        return c;
      }
    };
    show(); standee.pose('idle', 0, false);
    return standee;
  }

  window.PetStandee = { load, mount, WALK, WALK_FPS, WORK, WORK_FPS, ATTN, ATTN_FPS };
  document.dispatchEvent(new Event('pet-standee'));
})();
