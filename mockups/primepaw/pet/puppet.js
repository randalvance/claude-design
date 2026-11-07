/* The standee as a cut-out puppet, animated the way a South Park character is: every piece of paper
   (head, ears, body, arms, legs, tail) is its own layer pinned at a pivot, and the pose moves in steps,
   10 a second, so it reads as stop-motion rather than tweening. The pieces come from pet/<id>-rig.png
   and their places, pivots and depths from pet/<id>-rig.json, both built by pet/build.py.

     PetPuppet.load('pet/dog-rig.json').then((rig) => {
       const p = PetPuppet.mount(el, rig, { height: 116 });   // el becomes the puppet, 116 CSS px tall
       p.facing('left');                                       // down, left, right or up
       p.pose('walking', t, still);                            // idle, walking, working or attention; t in seconds
     });

   A board loads this file from its helmet; the script fires 'pet-puppet' on the document when it is
   ready, so a board that mounted first can wait for it. */
(function () {
  'use strict';
  const FPS = 10;             // the stop-motion step
  const STYLE = '.puppet{position:relative;display:block;transform-origin:50% 100%}' +
    '.puppet>span{position:absolute;inset:0;display:none}.puppet>span.on{display:block}' +
    '.puppet i{position:absolute;display:block;background-repeat:no-repeat;will-change:transform}' +
    '@media (prefers-reduced-motion:reduce){.puppet,.puppet i{transform:none !important}}';
  let styled = false;

  function load(url) {
    const at = new URL(url, document.baseURI);
    return fetch(at.href).then((r) => {
      if (!r.ok) throw new Error('PetPuppet: ' + url + ' answered ' + r.status);
      return r.json();
    }).then((rig) => {
      rig.atlasUrl = new URL(rig.atlas.src, at).href;
      return rig;
    });
  }

  const ZERO = { r: 0, x: 0, y: 0, sx: 1, sy: 1 };
  const max0 = (v) => Math.max(0, v);

  /* The poses. Each returns the parts' moves (degrees at the pivot, x and y as a share of the figure's
     height, scale at the pivot, an optional depth) and the whole figure's, for one stepped moment q.
     Rotation is CSS rotation: positive turns clockwise on screen, so a piece hanging from its pivot
     swings its free end to the left. `fwd` is +1 when a positive turn swings forward (facing left). */
  function pose(doing, facing, q) {
    const P = {};
    const root = { r: 0, x: 0, y: 0, sx: 1, sy: 1 };
    const set = (role, r, x, y, sx, sy, z) => { P[role] = { r: r || 0, x: x || 0, y: y || 0, sx: sx == null ? 1 : sx, sy: sy == null ? 1 : sy, z: z }; };
    const side = facing === 'left' || facing === 'right';
    const fwd = facing === 'left' ? 1 : -1;
    if (doing === 'walking') {
      const w = 2 * Math.PI * 1.7, s = Math.sin(w * q), a = Math.abs(s);
      root.y = -.028 * a;
      if (side) {
        set('leg-near', fwd * 28 * s); set('leg-far', -fwd * 28 * s);
        set('arm-near', -fwd * 22 * s); set('arm-far', fwd * 22 * s);
        set('body', -fwd * 3); set('head', -fwd * 2, 0, -.01 * a);
        set('ear', -fwd * 9 * Math.sin(w * q - .7)); set('tail', 12 * Math.sin(2 * w * q));
      } else {
        const l = max0(s), r = max0(-s);
        set('leg-l', 0, 0, -.02 * l, 1, 1 - .16 * l); set('leg-r', 0, 0, -.02 * r, 1, 1 - .16 * r);
        set('arm-l', -5 * s, 0, 0, 1, 1 - .08 * l); set('arm-r', -5 * s, 0, 0, 1, 1 - .08 * r);
        set('body', 2.5 * s); set('head', -1.5 * s, 0, -.008 * a);
        set('ear-l', 6 * s); set('ear-r', 6 * s);
        set('tail', (facing === 'up' ? 18 : 8) * Math.sin(2 * w * q));
      }
    } else if (doing === 'working') {
      const b = Math.sin(2 * Math.PI * 2.2 * q), ab = Math.abs(b);
      root.x = .02 * b;
      set('arm-l', 28 * max0(b)); set('arm-r', -28 * max0(-b));
      set('arm-near', fwd * 28 * max0(b)); set('arm-far', fwd * 28 * max0(-b));
      set('head', 2 * b, 0, .008 * b); set('body', 0, 0, 0, 1 + .02 * ab, 1 - .02 * ab);
      set('ear-l', -4 * b); set('ear-r', -4 * b); set('ear', -4 * b);
      set('tail', 10 * Math.sin(2 * Math.PI * 2 * q));
    } else if (doing === 'attention') {
      const wv = Math.sin(2 * Math.PI * 1.6 * q), aw = Math.abs(wv), hop = Math.abs(Math.sin(Math.PI * 1.6 * q));
      root.y = -.14 * hop; root.x = .03 * wv;
      set('arm-r', -150 + 20 * wv, 0, 0, 1, 1, 7); set('arm-l', 6 * wv);
      set('arm-near', fwd * (150 - 20 * wv), 0, 0, 1, 1, 4);  // up beside the head, behind it, so the paw does not hide the face set('arm-far', fwd * 6 * wv);
      set('head', 4 * wv); set('ear-l', 10 * wv); set('ear-r', 10 * wv); set('ear', 10 * wv);
      set('body', 0, 0, 0, 1 - .02 * aw, 1 + .03 * aw);
      set('tail', 14 * Math.sin(2 * Math.PI * 3 * q));
    } else {
      // idle: a slow breath, the ears and tail just alive
      const br = Math.sin(2 * Math.PI * .45 * q);
      set('body', 0, 0, 0, 1, 1 + .012 * br); set('head', 0, 0, -.006 * br);
      set('ear-l', 2 * br); set('ear-r', -2 * br); set('ear', 2 * br);
      set('arm-l', 1.5 * br); set('arm-r', -1.5 * br); set('arm-near', fwd * 1.5 * br); set('arm-far', fwd * 1.5 * br);
      set('tail', (side || facing === 'up' ? 8 : 5) * Math.sin(2 * Math.PI * .9 * q));
    }
    return { parts: P, root };
  }

  function mount(host, rig, opts) {
    const H = (opts && opts.height) || rig.figure.h / 4;
    const k = H / rig.figure.h;
    const px = (v) => (v * k).toFixed(2) + 'px';
    if (!styled) {
      const s = document.createElement('style'); s.textContent = STYLE; document.head.appendChild(s); styled = true;
    }
    host.classList.add('puppet');
    host.style.width = px(rig.figure.w); host.style.height = px(rig.figure.h);
    host.textContent = '';
    const groups = {};
    for (const f of Object.keys(rig.facings)) {
      const g = document.createElement('span');
      g.dataset.facing = f;
      g.parts = [];
      for (const p of rig.facings[f].parts) {
        const el = document.createElement('i');
        el.dataset.role = p.role;
        el.style.cssText = 'left:' + px(p.at[0]) + ';top:' + px(p.at[1]) + ';width:' + px(p.rect[2]) + ';height:' + px(p.rect[3]) +
          ';background-image:url("' + rig.atlasUrl + '");background-size:' + px(rig.atlas.w) + ' ' + px(rig.atlas.h) +
          ';background-position:' + px(-p.rect[0]) + ' ' + px(-p.rect[1]) + ';transform-origin:' + px(p.pivot[0]) + ' ' + px(p.pivot[1]) + ';z-index:' + p.z;
        g.appendChild(el);
        g.parts.push({ role: p.role, el, z: p.z, zNow: p.z });
      }
      host.appendChild(g);
      groups[f] = g;
    }
    let facing = (opts && opts.facing) || 'down';
    let shown = null;
    let last = '';
    const show = () => {
      if (shown === facing) return;
      for (const f in groups) groups[f].classList.toggle('on', f === facing);
      shown = facing;
    };
    show();
    const puppet = {
      el: host, height: H, width: rig.figure.w * k,
      facing(f) { if (f && groups[f]) { facing = f; show(); } return facing; },
      // doing: idle, walking, working or attention; t: seconds; still: true for no motion at all
      pose(doing, t, still) {
        const q = still ? 0 : Math.floor(t * FPS) / FPS;
        const key = facing + '|' + (still ? 'still' : doing) + '|' + q;
        if (key === last) return;
        last = key;
        const { parts, root } = still ? { parts: {}, root: ZERO } : pose(doing, facing, q);
        for (const p of groups[facing].parts) {
          const m = parts[p.role] || ZERO;
          p.el.style.transform = 'translate(' + (m.x * H).toFixed(2) + 'px,' + (m.y * H).toFixed(2) + 'px) rotate(' + m.r.toFixed(2) + 'deg) scale(' + m.sx.toFixed(3) + ',' + m.sy.toFixed(3) + ')';
          const z = m.z == null ? p.z : m.z;
          if (z !== p.zNow) { p.el.style.zIndex = z; p.zNow = z; }
        }
        host.style.transform = 'translate(' + (root.x * H).toFixed(2) + 'px,' + (root.y * H).toFixed(2) + 'px) rotate(' + root.r.toFixed(2) + 'deg) scale(' + root.sx.toFixed(3) + ',' + root.sy.toFixed(3) + ')';
      }
    };
    puppet.pose('idle', 0, false);
    return puppet;
  }

  window.PetPuppet = { load, mount, pose, FPS };
  document.dispatchEvent(new Event('pet-puppet'));
})();
