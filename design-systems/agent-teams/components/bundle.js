/* @ds-bundle: {"format":4,"namespace":"AgentTeamsDS","components":[{"name":"Button"},{"name":"Chip"},{"name":"StatusDot"},{"name":"AgentAvatar"},{"name":"Toggle"},{"name":"RadialMeter"},{"name":"GlowCard"},{"name":"SessionCard"},{"name":"TurnCapsule"},{"name":"EffortSlider"},{"name":"Composer"},{"name":"ThinkingIndicator"},{"name":"Bubble"},{"name":"AgentNode"},{"name":"Icon"}]} */
(function () {
  // React is resolved at call time so the bundle may load before the page's React does.
  function h() { var R = window.React; return R.createElement.apply(R, arguments); }
  function useState(v) { return window.React.useState(v); }
  function useEffect(f, d) { return window.React.useEffect(f, d); }
  var React = { Fragment: null };
  function cx() { var out = []; for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]); return out.join(' '); }

  // Lucide subset, inner markup on a 24px grid (2px stroke, round caps). Add glyphs here.
  var ICONS = {
    spark: '<path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/>',
    terminal: '<path d="M4 17l6-6-6-6"/><path d="M12 19h8"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
    pencil: '<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/>',
    help: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    brain: '<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>',
    message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    check: '<path d="M5 12l5 5L20 7"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    loader: '<path d="M21 12a9 9 0 1 1-6.219-8.56"/>',
    chevron: '<path d="M6 9l6 6 6-6"/>',
    bot: '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
    compass: '<circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36z"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    plug: '<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>'
  };
  var KIND_ICON = { bash: 'terminal', read: 'file', edit: 'pencil', ask: 'help', subagent: 'users', think: 'brain', said: 'message' };
  var AGENT_HUES = 8;

  function Icon(p) {
    var name = p.name || 'spark', size = p.size || 16;
    return h('svg', { viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: 'currentColor', strokeWidth: p.strokeWidth || 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true', className: p.className, style: p.style, dangerouslySetInnerHTML: { __html: ICONS[name] || ICONS.spark } });
  }

  /** Stable 1..8 hue index from any agent id. */
  function hueIndex(id) { var s = String(id || ''), n = 0; for (var i = 0; i < s.length; i++) n = (n * 31 + s.charCodeAt(i)) >>> 0; return (n % AGENT_HUES) + 1; }
  function hueVar(p) { if (p.color) return p.color; var idx = p.hue || hueIndex(p.id || p.name); return 'var(--agent-' + idx + ')'; }

  function Button(p) {
    var variant = p.variant || 'primary';
    return h('button', { type: p.type || 'button', className: cx('at-btn', 'at-btn--' + variant, p.size === 'sm' && 'at-btn--sm', p.glow && 'at-btn--glow', p.className), disabled: p.disabled, onClick: p.onClick, 'aria-label': p['aria-label'] },
      p.icon ? h(Icon, { name: p.icon, size: 14 }) : null, p.children);
  }

  function Chip(p) {
    return h('span', { className: cx('at-chip', p.tone && p.tone !== 'neutral' && 'at-chip--' + p.tone, p.mono && 'at-chip--mono', p.className) },
      p.kind ? h('i', { className: cx('at-dot', 'at-dot--' + p.kind) }) : null, p.children);
  }

  function StatusDot(p) {
    var cls = cx('at-dot', p.kind && 'at-dot--' + p.kind, p.error && 'at-dot--err', p.running && 'at-dot--run', p.idle && 'at-dot--idle', p.pop !== false && !p.idle && 'at-dot--pop');
    return h('i', { className: cls, style: p.delay ? { animationDelay: p.delay } : undefined, role: p.label ? 'img' : undefined, 'aria-label': p.label, 'aria-hidden': p.label ? undefined : 'true' });
  }

  function AgentAvatar(p) {
    var size = p.size || 26, status = p.status; // 'live' | 'done' | 'error' | 'ask' | undefined
    return h('span', { className: cx('at-avatar', p.filled && 'at-avatar--filled', status === 'live' && 'at-avatar--live', p.className), style: { '--sz': size + 'px', '--agent-hue': hueVar(p) }, role: 'img', 'aria-label': (p.name || 'Agent') + (status ? ' · ' + status : '') },
      h(Icon, { name: p.glyph || 'spark' }),
      status === 'done' ? h('span', { className: 'at-avatar__badge' }, h(Icon, { name: 'check', strokeWidth: 4 })) : null,
      status === 'error' ? h('span', { className: 'at-avatar__badge at-avatar__badge--err' }, h(Icon, { name: 'x', strokeWidth: 4 })) : null,
      status === 'ask' ? h('span', { className: 'at-avatar__badge at-avatar__badge--ask' }) : null);
  }
  AgentAvatar.Stack = function (p) { return h('span', { className: 'at-stack' }, (p.agents || []).map(function (a, i) { return h(AgentAvatar, Object.assign({ key: a.id || i, size: p.size || 22 }, a)); })); };

  function Toggle(p) {
    var ctl = typeof p.checked === 'boolean', st = useState(!!p.defaultChecked), on = ctl ? p.checked : st[0];
    function flip() { if (!ctl) st[1](!on); if (p.onChange) p.onChange(!on); }
    return h('button', { type: 'button', role: 'switch', 'aria-checked': on ? 'true' : 'false', className: cx('at-toggle', p.tone === 'danger' && 'at-toggle--danger', p.className), onClick: flip, disabled: p.disabled },
      h('span', { className: 'at-toggle__track' }, h('span', { className: 'at-toggle__knob' })),
      p.label ? h('span', null, p.label) : null,
      p.help ? h('span', { className: 'at-toggle__help' }, p.help) : null);
  }

  /** Gasoline-gauge arc: 240° sweep opening at the bottom, needle + numeral. value 0..1 */
  function RadialMeter(p) {
    var v = Math.max(0, Math.min(1, p.value || 0)), size = p.size || 72, r = 42, C = 2 * Math.PI * r, sweep = 240 / 360;
    var len = C * sweep, offset = len * (1 - v), tone = v >= 0.9 ? 'err' : v >= 0.7 ? 'warn' : '';
    var angle = -120 + 240 * v;
    return h('span', { className: cx('at-meter', tone && 'at-meter--' + tone, p.className), style: { '--sz': size + 'px' }, role: 'meter', 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-valuenow': Math.round(v * 100), 'aria-label': p.label || 'Context used' },
      h('svg', { viewBox: '0 0 100 100' },
        h('circle', { className: 'at-meter__track', cx: 50, cy: 50, r: r, strokeDasharray: len + ' ' + C, transform: 'rotate(150 50 50)' }),
        h('circle', { className: 'at-meter__fill', cx: 50, cy: 50, r: r, strokeDasharray: len + ' ' + C, strokeDashoffset: offset, transform: 'rotate(150 50 50)' }),
        h('line', { className: 'at-meter__needle', x1: 50, y1: 50, x2: 50, y2: 18, style: { transform: 'rotate(' + angle + 'deg)' } }),
        h('circle', { className: 'at-meter__hub', cx: 50, cy: 50, r: 3 })),
      h('span', { className: 'at-meter__value' }, p.format ? p.format(v) : Math.round(v * 100) + '%'),
      p.label ? h('span', { className: 'at-meter__label' }, p.label) : null);
  }

  function GlowCard(p) {
    var card = h('div', { className: cx('at-card', p.state && 'at-card--' + p.state, p.className), style: p.style, onClick: p.onClick }, p.children);
    return p.state === 'busy' ? h('div', { className: 'at-sweep' }, card) : card;
  }

  function SessionCard(p) {
    var state = p.state || 'idle', right;
    if (state === 'busy') right = h('span', { className: 'at-ring', 'aria-label': 'Busy', role: 'img' });
    else if (state === 'idle') right = h(StatusDot, { idle: true, label: 'Idle' });
    else if (state === 'attention') right = h('i', { className: 'at-dot at-dot--attn', role: 'img', 'aria-label': 'Needs input' });
    else if (state === 'done') right = h(Chip, { tone: 'ok' }, 'Done');
    else if (state === 'failed') right = h(Chip, { tone: 'err' }, 'Failed');
    return h(GlowCard, { state: state === 'busy' ? 'busy' : state === 'attention' ? 'attention' : state === 'failed' ? 'danger' : p.selected ? 'selected' : undefined, className: cx('at-session', p.className), onClick: p.onClick },
      h(AgentAvatar, { id: p.agentId, name: p.agent, glyph: p.glyph, size: 26, status: state === 'busy' ? 'live' : state === 'done' ? 'done' : state === 'failed' ? 'error' : state === 'attention' ? 'ask' : undefined }),
      h('span', { className: 'at-session__body' },
        h('span', { className: 'at-session__title' }, p.title),
        h('span', { className: 'at-session__meta' }, p.agent ? h('span', null, p.agent) : null, p.meta ? h('span', { className: 'at-mono' }, p.meta) : null, p.time ? h('span', { className: 'at-tab' }, p.time) : null)),
      h('span', { className: 'at-session__right' }, right),
      state === 'busy' ? h('span', { className: 'at-bar', 'aria-hidden': 'true' }) : null);
  }

  function TurnCapsule(p) {
    var ctl = typeof p.open === 'boolean', st = useState(!!p.defaultOpen), open = ctl ? p.open : st[0];
    function toggle() { if (!ctl) st[1](!open); if (p.onToggle) p.onToggle(!open); }
    var steps = p.steps || [], dots = steps.map(function (s) { return { kind: s.kind, error: s.status === 'error', running: s.status === 'running' }; });
    var counts = {}; steps.forEach(function (s) { counts[s.kind] = (counts[s.kind] || 0) + 1; });
    var errors = steps.filter(function (s) { return s.status === 'error'; }).length;
    var chips = Object.keys(counts).map(function (k) { return h(Chip, { key: k }, counts[k] + ' ' + k); });
    if (errors) chips.push(h(Chip, { key: 'err', tone: 'err' }, errors + ' error' + (errors > 1 ? 's' : '')));
    return h('section', { className: cx('at-turn', open && 'at-turn--open', p.live && 'at-turn--live', p.className), 'aria-label': 'Agent work for this turn' },
      h('button', { className: 'at-cap', onClick: toggle, 'aria-expanded': open ? 'true' : 'false' },
        h(AgentAvatar, { id: p.agentId, name: p.agent, glyph: p.glyph, status: p.live ? 'live' : p.failed ? 'error' : 'done' }),
        h('span', { className: 'at-cap__title' }, h('strong', null, p.title || (p.live ? 'Working · ' + (p.elapsed || '0:00') : 'Worked for ' + (p.elapsed || ''))), h('span', { className: 'at-cap__sub' }, p.sub || steps.length + ' steps')),
        h('span', { className: 'at-trail', 'aria-hidden': 'true' }, dots.map(function (d, i) { return h(StatusDot, Object.assign({ key: i, delay: (i * 60) + 'ms' }, d)); })),
        h('span', { className: 'at-cap__chips' }, chips),
        p.live && p.now ? h('span', { className: 'at-cap__now' }, h('span', { className: 'at-shimmer' }, p.now)) : null,
        h(Icon, { name: 'chevron', className: 'at-chev' })),
      h('div', { className: 'at-turn__body' }, h('div', { className: 'at-turn__in' },
        h('ol', { className: 'at-steps' }, steps.map(function (s, i) {
          return h('li', { key: i, className: cx('at-step', 'at-step--' + s.kind, s.status === 'error' && 'at-step--err'), style: { animationDelay: (i * 55) + 'ms' } },
            h('span', { className: 'at-step__ic' }, h(Icon, { name: KIND_ICON[s.kind] || 'spark', size: 13 })),
            h('span', { className: 'at-step__main' }, s.label ? h('span', { className: 'at-step__label' }, s.label) : null, s.detail ? h('code', { className: 'at-step__detail' }, s.detail) : null),
            h('span', { className: 'at-step__meta' }, s.time ? h('span', { className: 'at-step__time' }, s.time) : null,
              s.status === 'running' ? h('span', { className: 'at-st at-st--run', role: 'img', 'aria-label': 'Running' }, h(Icon, { name: 'loader' })) :
              s.status === 'error' ? h('span', { className: 'at-st at-st--err', role: 'img', 'aria-label': 'Failed' }, h(Icon, { name: 'x', strokeWidth: 2.5 })) :
              s.kind === 'said' ? null : h('span', { className: 'at-st at-st--ok', role: 'img', 'aria-label': 'Succeeded' }, h(Icon, { name: 'check', strokeWidth: 2.5 }))));
        })))));
  }

  var EFFORT = ['low', 'medium', 'high', 'xhigh', 'max'];
  function EffortSlider(p) {
    var levels = p.levels || EFFORT, ctl = typeof p.value === 'number', st = useState(typeof p.defaultValue === 'number' ? p.defaultValue : 1), v = ctl ? p.value : st[0];
    var max = levels.length - 1, pct = (v / max) * 100, isMax = v === max;
    function set(n) { n = +n; if (!ctl) st[1](n); if (p.onChange) p.onChange(n, levels[n]); }
    return h('div', { className: cx('at-effort', isMax && 'at-effort--max', p.className) },
      h('div', { className: 'at-effort__row' }, h('span', null, 'Effort'), h('strong', null, levels[v])),
      h('div', { className: 'at-slider' },
        h('span', { className: 'at-slider__track' }), h('span', { className: 'at-slider__fill', style: { width: pct + '%' } }),
        h('span', { className: 'at-slider__stops' }, levels.map(function (_, i) { return h('i', { key: i }); })),
        h('span', { className: 'at-slider__thumb', style: { left: pct + '%' } }),
        h('input', { type: 'range', min: 0, max: max, step: 1, value: v, onChange: function (e) { set(e.target.value); }, 'aria-label': 'Effort level', 'aria-valuetext': levels[v] })));
  }

  function Composer(p) {
    var effort = useState(typeof p.effort === 'number' ? p.effort : 1), yolo = useState(!!p.yolo), menu = useState(false), text = useState('');
    var isMax = effort[0] === EFFORT.length - 1;
    return h('div', { className: cx('at-composer', isMax && 'at-composer--max', p.sending && 'at-composer--sending', p.className) },
      h('div', { className: 'at-composer__input', contentEditable: true, suppressContentEditableWarning: true, 'data-placeholder': p.placeholder || 'Message ' + (p.agent || 'the agent') + '…', role: 'textbox', 'aria-multiline': 'true', 'aria-label': 'Message', onInput: function (e) { text[1](e.currentTarget.textContent); } }),
      h('div', { className: 'at-composer__bar' },
        h('button', { className: cx('at-model', isMax && 'at-model--max'), onClick: function () { menu[1](!menu[0]); }, 'aria-expanded': menu[0] ? 'true' : 'false' },
          h(Icon, { name: 'spark', size: 13 }), p.model || 'Opus 5.5', h('span', { className: 'at-model__effort' }, EFFORT[effort[0]]), h(Icon, { name: 'chevron', size: 12 })),
        menu[0] ? h(GlowCard, { state: isMax ? 'max' : 'open', style: { padding: '12px', position: 'absolute', bottom: 'calc(100% + 8px)', left: 12, zIndex: 2 } },
          h('div', { style: { font: '500 12px/1 var(--font-sans)', color: 'var(--ink-300)', marginBottom: 10 } }, 'Model'),
          h('div', { style: { display: 'flex', gap: 6, marginBottom: 14 } }, ['Opus 5.5', 'Sonnet 5.5', 'Haiku 5.5'].map(function (m) { return h(Chip, { key: m, tone: m === (p.model || 'Opus 5.5') ? 'accent' : undefined }, m); })),
          h(EffortSlider, { value: effort[0], onChange: function (n) { effort[1](n); } })) : null,
        h(RadialMeter, { value: typeof p.context === 'number' ? p.context : 0.34, size: 40, format: function (v) { return Math.round(v * 100) + '%'; } }),
        h(Toggle, { tone: 'danger', checked: yolo[0], onChange: function (v) { yolo[1](v); }, label: 'Yolo' }),
        h('span', { className: 'at-grow' }),
        h(Button, { variant: 'primary', icon: 'send', glow: isMax, disabled: !text[0] && !p.sending, 'aria-label': 'Send' }, 'Send')));
  }

  function ThinkingIndicator(p) {
    var msgs = p.messages || ['Thinking…', 'Reading the repo…', 'Running tests…'], i = useState(0), start = useState(Date.now())[0], now = useState(Date.now());
    useEffect(function () { var a = setInterval(function () { i[1](function (n) { return n + 1; }); }, p.interval || 2200), b = setInterval(function () { now[1](Date.now()); }, 100); return function () { clearInterval(a); clearInterval(b); }; }, []);
    var s = (now[0] - start) / 1000, t = s < 60 ? s.toFixed(1) + 's' : Math.floor(s / 60) + 'm ' + String(Math.floor(s % 60)).padStart(2, '0') + 's';
    return h('div', { className: cx('at-think', p.className), role: 'status', 'aria-live': 'polite' },
      h('span', { className: 'at-think__dots' }, h('i'), h('i'), h('i')),
      h('span', { className: 'at-think__slot' }, msgs.map(function (m, k) { var d = i[0] % msgs.length; return h('span', { key: k, className: k === d ? 'in' : k === (d + msgs.length - 1) % msgs.length ? 'out' : '' }, m); })),
      h('span', { className: 'at-think__timer' }, t));
  }

  function Bubble(p) { return h('div', { className: cx('at-bubble', 'at-bubble--' + (p.author || p.from || 'user'), p.className) }, p.children); }

  function AgentNode(p) {
    return h('span', { className: cx('at-node', p.state && 'at-node--' + p.state, p.className), style: { '--agent-hue': hueVar(p) }, role: 'img', 'aria-label': p.name + (p.state ? ' · ' + p.state : '') },
      h(Icon, { name: p.glyph || 'bot', size: 22 }), p.name ? h('span', { className: 'at-node__name' }, p.name) : null);
  }

  window.AgentTeamsDS = { Button: Button, Chip: Chip, StatusDot: StatusDot, AgentAvatar: AgentAvatar, Toggle: Toggle, RadialMeter: RadialMeter, GlowCard: GlowCard, SessionCard: SessionCard, TurnCapsule: TurnCapsule, EffortSlider: EffortSlider, Composer: Composer, ThinkingIndicator: ThinkingIndicator, Bubble: Bubble, AgentNode: AgentNode, Icon: Icon, hueIndex: hueIndex, ICONS: ICONS, EFFORT: EFFORT };
})();
