/* @ds-bundle: {"format":3,"namespace":"MeridianExposureDesignSystem_580a95","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"DeltaIndicator","sourcePath":"components/data/DeltaIndicator.jsx"},{"name":"LimitBar","sourcePath":"components/data/LimitBar.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"SidebarNav","sourcePath":"components/navigation/SidebarNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"a95f4abda355","components/core/Button.jsx":"4ed3b725919e","components/core/Card.jsx":"7ae513da0d8b","components/core/Icon.jsx":"6319b9e0ab20","components/core/IconButton.jsx":"c19f10f40cd7","components/data/DataTable.jsx":"339d20e56bf0","components/data/DeltaIndicator.jsx":"58630b970853","components/data/LimitBar.jsx":"a9b6012602df","components/data/StatCard.jsx":"5c45c682cefa","components/forms/Select.jsx":"dbdfcb7c5734","components/navigation/SidebarNav.jsx":"267be3f501f5","components/navigation/Tabs.jsx":"def196315561","ui_kits/exposure-overview/App.jsx":"6c222d60ac6d","ui_kits/exposure-overview/BarChart.jsx":"ac30e1d70e4c","ui_kits/exposure-overview/PieChart.jsx":"3e08e5fa85b8","ui_kits/exposure-overview/TopBar.jsx":"d72a167e69bd","ui_kits/exposure-overview/data.js":"80246550e2df"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MeridianExposureDesignSystem_580a95 = window.MeridianExposureDesignSystem_580a95 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/**
 * Status / category label. `tone` maps to semantic colors used for
 * exposure limit status (within / watch / breach) and generic states.
 */
function Badge({
  children,
  tone = 'neutral',
  variant = 'soft',
  dot = false,
  style = {}
}) {
  const tones = {
    neutral: {
      soft: ['var(--ink-100)', 'var(--ink-700)'],
      solid: ['var(--ink-600)', 'var(--white)'],
      dot: 'var(--ink-500)'
    },
    brand: {
      soft: ['var(--brand-100)', 'var(--brand-700)'],
      solid: ['var(--brand-600)', 'var(--white)'],
      dot: 'var(--brand-500)'
    },
    info: {
      soft: ['var(--blue-100)', 'var(--blue-700)'],
      solid: ['var(--blue-600)', 'var(--white)'],
      dot: 'var(--blue-500)'
    },
    positive: {
      soft: ['var(--positive-100)', 'var(--positive-700)'],
      solid: ['var(--positive-500)', 'var(--white)'],
      dot: 'var(--positive-500)'
    },
    warning: {
      soft: ['var(--warning-100)', 'var(--warning-700)'],
      solid: ['var(--warning-500)', 'var(--white)'],
      dot: 'var(--warning-500)'
    },
    negative: {
      soft: ['var(--negative-100)', 'var(--negative-700)'],
      solid: ['var(--negative-500)', 'var(--white)'],
      dot: 'var(--negative-500)'
    }
  };
  const t = tones[tone] || tones.neutral;
  const [bg, fg] = t[variant] || t.soft;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '4px 10px',
      background: bg,
      color: fg,
      font: 'var(--weight-semibold) var(--text-sm)/1 var(--font-sans)',
      letterSpacing: '0.01em',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: t.dot,
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Meridian primary action button. Calm, solid, high-contrast.
 * Variants: primary (brand blue), secondary (outline), ghost, danger.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  disabled = false,
  fullWidth = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      font: 'var(--text-sm)',
      pad: '8px 14px',
      h: '36px',
      gap: '6px'
    },
    md: {
      font: 'var(--text-base)',
      pad: '10px 18px',
      h: '44px',
      gap: '8px'
    },
    lg: {
      font: 'var(--text-md)',
      pad: '13px 24px',
      h: '52px',
      gap: '10px'
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--blue-600)',
      color: 'var(--white)',
      border: '1px solid var(--blue-600)'
    },
    secondary: {
      background: 'var(--white)',
      color: 'var(--brand-deep)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--blue-600)',
      border: '1px solid transparent'
    },
    danger: {
      background: 'var(--negative-500)',
      color: 'var(--white)',
      border: '1px solid var(--negative-500)'
    }
  };
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const hoverBg = {
    primary: 'var(--blue-700)',
    secondary: 'var(--ink-100)',
    ghost: 'var(--blue-50)',
    danger: 'var(--negative-700)'
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      width: fullWidth ? '100%' : 'auto',
      minHeight: s.h,
      padding: s.pad,
      font: `var(--weight-semibold) ${s.font}/1 var(--font-sans)`,
      letterSpacing: '0.01em',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
      background: hover && !disabled ? hoverBg : v.background,
      color: v.color,
      border: v.border,
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Surface container. The default content block for the app. */
function Card({
  children,
  title = null,
  subtitle = null,
  action = null,
  padding = 'var(--space-6)',
  elevated = false,
  style = {},
  bodyStyle = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: elevated ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      overflow: 'hidden',
      ...style
    }
  }, rest), (title || action) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      padding: `var(--space-5) ${padding}`,
      borderBottom: '1px solid var(--divider)'
    }
  }, /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-card-title)',
      color: 'var(--text-strong)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-muted)',
      marginTop: '2px'
    }
  }, subtitle)), action && /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, action)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding,
      ...bodyStyle
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Meridian icon. Curated subset of Lucide (MIT) drawn inline as SVG so
 * icons survive React re-renders and need no network. 24px grid, 2px
 * stroke, round caps — the brand's only icon style.
 */
const PATHS = {
  'layout-dashboard': '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
  layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
  'file-text': '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
  'bar-chart': '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
  'pie-chart': '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',
  building: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z"/>',
  settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  'chevron-right': '<path d="m9 18 6-6-6-6"/>',
  'more-vertical': '<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>',
  'refresh-cw': '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
  'alert-triangle': '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  'trending-up': '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
  'trending-down': '<polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
  calendar: '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
  'arrow-up-right': '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  'log-out': '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  'chevrons-up-down': '<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>'
};
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = 'currentColor',
  style = {},
  ...rest
}) {
  const inner = PATHS[name];
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      flexShrink: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: inner || ''
    }
  }, rest));
}

/** Names available in this build (for tooling / cards). */
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square icon-only button. Pair with an accessible aria-label. */
function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  ariaLabel,
  onClick,
  style = {},
  ...rest
}) {
  const dim = {
    sm: 36,
    md: 44,
    lg: 52
  }[size] || 44;
  const [hover, setHover] = React.useState(false);
  const variants = {
    ghost: {
      bg: 'transparent',
      color: 'var(--ink-600)',
      hover: 'var(--ink-100)',
      border: 'transparent'
    },
    solid: {
      bg: 'var(--blue-600)',
      color: 'var(--white)',
      hover: 'var(--blue-700)',
      border: 'var(--blue-600)'
    },
    outline: {
      bg: 'var(--white)',
      color: 'var(--brand-deep)',
      hover: 'var(--ink-100)',
      border: 'var(--border-strong)'
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: 'var(--radius-md)',
      background: hover && !disabled ? v.hover : v.bg,
      color: v.color,
      border: `1px solid ${v.border}`,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
/**
 * Read-optimized data table for exposure registers. Columns are declared
 * with { key, header, align, width, render }. Built for legibility:
 * large row height, zebra option, sticky header.
 */
function DataTable({
  columns = [],
  rows = [],
  zebra = true,
  stickyHeader = false,
  density = 'comfortable',
  rowKey = (r, i) => r.id ?? i,
  onRowClick = null,
  style = {}
}) {
  const rowPad = density === 'compact' ? '10px 16px' : '16px 16px';
  const [hover, setHover] = React.useState(-1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      overflowX: 'auto',
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      font: 'var(--type-body)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      position: stickyHeader ? 'sticky' : 'static',
      top: 0,
      textAlign: c.align || 'left',
      width: c.width || 'auto',
      padding: '12px 16px',
      background: 'var(--ink-50)',
      color: 'var(--text-muted)',
      font: 'var(--weight-semibold) var(--text-sm)/1.2 var(--font-sans)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      borderBottom: '2px solid var(--border-default)',
      whiteSpace: 'nowrap'
    }
  }, c.header)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: rowKey(row, i),
    onClick: onRowClick ? () => onRowClick(row, i) : undefined,
    onMouseEnter: () => setHover(i),
    onMouseLeave: () => setHover(-1),
    style: {
      background: hover === i ? 'var(--blue-50)' : zebra && i % 2 ? 'var(--ink-50)' : 'var(--surface-card)',
      cursor: onRowClick ? 'pointer' : 'default',
      transition: 'background var(--duration-fast) var(--ease-standard)'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    className: c.numeric ? 'tnum' : undefined,
    style: {
      textAlign: c.align || (c.numeric ? 'right' : 'left'),
      padding: rowPad,
      color: 'var(--text-body)',
      fontVariantNumeric: c.numeric ? 'tabular-nums lining-nums' : undefined,
      fontFamily: c.numeric ? 'var(--font-mono)' : undefined,
      borderBottom: '1px solid var(--divider)',
      whiteSpace: c.wrap ? 'normal' : 'nowrap'
    }
  }, c.render ? c.render(row[c.key], row, i) : row[c.key])))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/DeltaIndicator.jsx
try { (() => {
/**
 * Directional change indicator (▲/▼) with semantic color. Up is positive
 * by default; set `invertColors` when "up" is bad (e.g. rising exposure).
 */
function DeltaIndicator({
  value,
  suffix = '%',
  invertColors = false,
  showArrow = true,
  size = 'md',
  style = {}
}) {
  const num = typeof value === 'number' ? value : parseFloat(value);
  const isUp = num > 0;
  const isFlat = num === 0;
  const good = invertColors ? !isUp : isUp;
  const color = isFlat ? 'var(--ink-500)' : good ? 'var(--positive-500)' : 'var(--negative-500)';
  const arrow = isFlat ? '—' : isUp ? '▲' : '▼';
  const fonts = {
    sm: 'var(--text-sm)',
    md: 'var(--text-base)',
    lg: 'var(--text-lg)'
  };
  return /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      color,
      font: `var(--weight-semibold) ${fonts[size] || fonts.md}/1 var(--font-sans)`,
      ...style
    }
  }, showArrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.78em'
    }
  }, arrow), Math.abs(num), suffix);
}
Object.assign(__ds_scope, { DeltaIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DeltaIndicator.jsx", error: String((e && e.message) || e) }); }

// components/data/LimitBar.jsx
try { (() => {
/**
 * Exposure utilization bar — how much of an approved limit is used.
 * Auto-colors by thresholds: <75% positive, 75–99% warning, ≥100% breach.
 */
function LimitBar({
  value,
  // current exposure
  limit,
  // approved limit
  showLabels = true,
  thresholds = {
    warn: 0.75,
    breach: 1.0
  },
  format = n => n.toLocaleString(),
  height = 10,
  style = {}
}) {
  const ratio = limit > 0 ? value / limit : 0;
  const pct = Math.min(ratio, 1) * 100;
  const over = ratio >= thresholds.breach;
  const color = over ? 'var(--negative-500)' : ratio >= thresholds.warn ? 'var(--warning-500)' : 'var(--positive-500)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      ...style
    }
  }, showLabels && /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: '6px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-semibold) var(--text-md)/1 var(--font-mono)',
      color: 'var(--text-strong)'
    }
  }, format(value)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-muted)'
    }
  }, Math.round(ratio * 100), "% of ", format(limit))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      background: 'var(--ink-150)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: `${pct}%`,
      background: color,
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--duration-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { LimitBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/LimitBar.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
/**
 * KPI / number card for the overview dashboard. Large serif figure for
 * legibility, optional label, delta, and footnote.
 */
function StatCard({
  label,
  value,
  unit = null,
  delta = null,
  deltaSuffix = '%',
  deltaInvert = false,
  caption = null,
  accent = 'var(--blue-500)',
  icon = null,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xs)',
      padding: 'var(--space-6)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 4,
      background: accent
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)',
      color: 'var(--text-muted)'
    }
  }, label), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--ink-400)'
    }
  }, icon)), /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '6px',
      marginTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-kpi)',
      color: 'var(--text-strong)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-semibold) var(--text-lg)/1 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, unit)), (delta !== null || caption) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-3)'
    }
  }, delta !== null && /*#__PURE__*/React.createElement(__ds_scope.DeltaIndicator, {
    value: delta,
    suffix: deltaSuffix,
    invertColors: deltaInvert,
    size: "sm"
  }), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-muted)'
    }
  }, caption)));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/**
 * Styled native select — used for report-period and filter pickers.
 * Native element keeps it accessible and keyboard-friendly for all users.
 */
function Select({
  options = [],
  value,
  onChange,
  label = null,
  size = 'md',
  fullWidth = false,
  disabled = false,
  style = {}
}) {
  const sizes = {
    sm: {
      h: 36,
      font: 'var(--text-sm)',
      pad: '0 36px 0 12px'
    },
    md: {
      h: 44,
      font: 'var(--text-base)',
      pad: '0 40px 0 14px'
    },
    lg: {
      h: 52,
      font: 'var(--text-md)',
      pad: '0 44px 0 16px'
    }
  };
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: '6px',
      width: fullWidth ? '100%' : 'auto',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: fullWidth ? '100%' : 'auto'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    disabled: disabled,
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: fullWidth ? '100%' : 'auto',
      height: s.h,
      padding: s.pad,
      font: `var(--weight-medium) ${s.font}/1 var(--font-sans)`,
      color: 'var(--text-strong)',
      background: 'var(--white)',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, options.map(o => {
    const val = typeof o === 'object' ? o.value : o;
    const lab = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--ink-500)',
      fontSize: 12
    }
  }, "\u25BC")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarNav.jsx
try { (() => {
/**
 * Left navigation rail for the Meridian app. Deep-navy surface, generous
 * hit targets (≥44px) for an older audience. Items: { id, label, icon, badge }.
 */
function SidebarNav({
  items = [],
  activeId,
  onSelect,
  header = null,
  footer = null,
  width = 'var(--sidebar-width)',
  style = {}
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width,
      minHeight: '100%',
      background: 'var(--brand-deep)',
      color: 'var(--white)',
      display: 'flex',
      flexDirection: 'column',
      padding: 'var(--space-5) var(--space-3)',
      ...style
    }
  }, header && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-3) var(--space-6)'
    }
  }, header), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      flex: 1
    }
  }, items.map(item => {
    if (item.section) {
      return /*#__PURE__*/React.createElement("li", {
        key: item.section,
        style: {
          padding: 'var(--space-5) var(--space-3) var(--space-2)',
          font: 'var(--type-eyebrow)',
          textTransform: 'uppercase',
          letterSpacing: 'var(--tracking-caps)',
          color: 'rgba(255,255,255,0.45)'
        }
      }, item.section);
    }
    const isActive = item.id === activeId;
    const isHover = item.id === hover;
    return /*#__PURE__*/React.createElement("li", {
      key: item.id
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => onSelect && onSelect(item.id),
      onMouseEnter: () => setHover(item.id),
      onMouseLeave: () => setHover(null),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        width: '100%',
        minHeight: 48,
        padding: '0 var(--space-3)',
        borderRadius: 'var(--radius-md)',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        font: `var(--weight-${isActive ? 'semibold' : 'medium'}) var(--text-md)/1.2 var(--font-sans)`,
        color: isActive ? 'var(--white)' : 'rgba(255,255,255,0.78)',
        background: isActive ? 'var(--blue-600)' : isHover ? 'rgba(255,255,255,0.08)' : 'transparent',
        transition: 'background var(--duration-fast) var(--ease-standard)'
      }
    }, item.icon && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        flexShrink: 0,
        opacity: isActive ? 1 : 0.85
      }
    }, item.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, item.label), item.badge !== undefined && /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--weight-semibold) var(--text-xs)/1 var(--font-sans)',
        padding: '3px 8px',
        borderRadius: 'var(--radius-pill)',
        background: isActive ? 'rgba(255,255,255,0.22)' : 'var(--negative-500)',
        color: 'var(--white)'
      }
    }, item.badge)));
  })), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 'var(--space-4)',
      borderTop: '1px solid rgba(255,255,255,0.12)',
      marginTop: 'var(--space-4)'
    }
  }, footer));
}
Object.assign(__ds_scope, { SidebarNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Underlined tab bar for switching table views (e.g. By counterparty /
 * By sector / By instrument). Controlled or uncontrolled.
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].id));
  const active = value !== undefined ? value : internal;
  const [hover, setHover] = React.useState(null);
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      borderBottom: '1px solid var(--border-default)',
      ...style
    }
  }, tabs.map(t => {
    const isActive = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": isActive,
      onClick: () => select(t.id),
      onMouseEnter: () => setHover(t.id),
      onMouseLeave: () => setHover(null),
      style: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '12px 6px',
        marginBottom: '-1px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        font: `var(--weight-semibold) var(--text-md)/1 var(--font-sans)`,
        color: isActive ? 'var(--blue-700)' : hover === t.id ? 'var(--text-strong)' : 'var(--text-muted)',
        borderBottom: `3px solid ${isActive ? 'var(--blue-600)' : 'transparent'}`,
        transition: 'color var(--duration-fast) var(--ease-standard)'
      }
    }, t.label, t.count !== undefined && /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--weight-semibold) var(--text-xs)/1 var(--font-sans)',
        padding: '2px 8px',
        borderRadius: 'var(--radius-pill)',
        background: isActive ? 'var(--blue-100)' : 'var(--ink-100)',
        color: isActive ? 'var(--blue-700)' : 'var(--ink-600)'
      }
    }, t.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/exposure-overview/App.jsx
try { (() => {
// Meridian — Large Exposure Overview app. Composes DS components + charts.
(function () {
  const NS = window.MeridianExposureDesignSystem_580a95;
  const {
    SidebarNav,
    Card,
    StatCard,
    Tabs,
    DataTable,
    Badge,
    LimitBar,
    Button,
    Icon,
    IconButton
  } = NS;
  const D = window.MERIDIAN_DATA;
  const fmtM = n => '£' + n.toLocaleString() + 'm';
  function BrandLockup() {
    return React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, React.createElement('img', {
      src: '../../assets/logo-mark.svg',
      width: 40,
      height: 40,
      alt: ''
    }), React.createElement('div', null, React.createElement('div', {
      style: {
        font: 'var(--weight-bold) 22px/1 var(--font-display)',
        color: '#fff',
        letterSpacing: '-0.01em'
      }
    }, 'Meridian'), React.createElement('div', {
      style: {
        font: 'var(--weight-medium) 11px/1.4 var(--font-sans)',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.55)',
        marginTop: 3
      }
    }, 'Exposure')));
  }
  function AccountChip() {
    return React.createElement('button', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        padding: '10px 12px',
        background: 'transparent',
        border: 'none',
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        color: 'rgba(255,255,255,0.78)'
      }
    }, React.createElement(Icon, {
      name: 'log-out',
      size: 20
    }), React.createElement('span', {
      style: {
        font: 'var(--weight-medium) var(--text-md) var(--font-sans)'
      }
    }, 'Sign out'));
  }
  const NAV = [{
    id: 'overview',
    label: 'Overview',
    icon: React.createElement(Icon, {
      name: 'layout-dashboard'
    })
  }, {
    id: 'exposures',
    label: 'Large exposures',
    icon: React.createElement(Icon, {
      name: 'layers'
    }),
    badge: 2
  }, {
    id: 'counterparties',
    label: 'Counterparties',
    icon: React.createElement(Icon, {
      name: 'building'
    })
  }, {
    id: 'limits',
    label: 'Limits & policy',
    icon: React.createElement(Icon, {
      name: 'shield'
    })
  }, {
    section: 'Reports'
  }, {
    id: 'board',
    label: 'Board pack',
    icon: React.createElement(Icon, {
      name: 'file-text'
    })
  }, {
    id: 'settings',
    label: 'Settings',
    icon: React.createElement(Icon, {
      name: 'settings'
    })
  }];
  const TAB_ROWS = {
    cp: D.counterparties,
    sector: D.sectorRows,
    country: D.countryRows
  };
  function columnsFor(tab) {
    const status = {
      key: 'status',
      header: 'Status',
      render: s => React.createElement(Badge, {
        tone: s.tone,
        dot: true
      }, s.label)
    };
    const used = {
      key: 'used',
      header: 'Limit used',
      width: '200px',
      render: (_v, r) => React.createElement(LimitBar, {
        value: r.exposure,
        limit: r.limit,
        showLabels: false
      })
    };
    const exposure = {
      key: 'exposure',
      header: 'Exposure (£m)',
      numeric: true,
      render: v => v.toLocaleString()
    };
    const limit = {
      key: 'limit',
      header: 'Limit (£m)',
      numeric: true,
      render: v => v.toLocaleString()
    };
    if (tab === 'cp') return [{
      key: 'name',
      header: 'Counterparty',
      wrap: true
    }, {
      key: 'sector',
      header: 'Sector'
    }, {
      key: 'country',
      header: 'Country'
    }, exposure, limit, used, status];
    if (tab === 'sector') return [{
      key: 'name',
      header: 'Sector'
    }, exposure, limit, used, status];
    return [{
      key: 'name',
      header: 'Country'
    }, {
      key: 'sector',
      header: 'Lead sector'
    }, exposure, limit, used, status];
  }
  function Overview({
    period,
    onPeriod
  }) {
    const [tab, setTab] = React.useState('cp');
    return React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-6)'
      }
    },
    // KPI grid
    React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 'var(--space-5)'
      }
    }, D.kpis.map((k, i) => React.createElement(StatCard, {
      key: i,
      label: k.label,
      value: k.value,
      unit: k.unit,
      delta: k.delta,
      deltaInvert: k.deltaInvert,
      caption: k.caption,
      accent: k.accent,
      icon: React.createElement(Icon, {
        name: k.icon,
        size: 22
      })
    }))),
    // Charts row
    React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: 'var(--space-6)'
      }
    }, React.createElement(Card, {
      title: 'Exposure by sector',
      subtitle: 'Gross, £bn'
    }, React.createElement(window.PieChart, {
      data: D.sectors,
      centerValue: '£24.8',
      centerLabel: 'bn total'
    })), React.createElement(Card, {
      title: 'Total exposure trend',
      subtitle: 'Last four quarters, £bn'
    }, React.createElement('div', {
      style: {
        paddingTop: 8
      }
    }, React.createElement(window.BarChart, {
      data: D.trend
    })))),
    // Tabbed register
    React.createElement(Card, {
      title: 'Exposure register',
      subtitle: 'Counterparties above 10% of the capital base',
      bodyStyle: {
        padding: 0
      },
      action: React.createElement(Button, {
        variant: 'ghost',
        size: 'sm',
        iconLeft: React.createElement(Icon, {
          name: 'filter',
          size: 16
        })
      }, 'Filter')
    }, React.createElement('div', {
      style: {
        padding: '0 var(--space-6)'
      }
    }, React.createElement(Tabs, {
      value: tab,
      onChange: setTab,
      tabs: [{
        id: 'cp',
        label: 'By counterparty',
        count: D.counterparties.length
      }, {
        id: 'sector',
        label: 'By sector',
        count: D.sectorRows.length
      }, {
        id: 'country',
        label: 'By country',
        count: D.countryRows.length
      }]
    })), React.createElement(DataTable, {
      columns: columnsFor(tab),
      rows: TAB_ROWS[tab],
      zebra: true
    })));
  }
  function Placeholder({
    label
  }) {
    return React.createElement('div', {
      style: {
        display: 'grid',
        placeItems: 'center',
        minHeight: 420,
        color: 'var(--text-muted)',
        font: 'var(--type-section)',
        gap: 12,
        textAlign: 'center'
      }
    }, React.createElement(Icon, {
      name: 'file-text',
      size: 40,
      color: 'var(--ink-300)'
    }), React.createElement('div', null, label), React.createElement('div', {
      style: {
        font: 'var(--type-body)',
        maxWidth: 360
      }
    }, 'This view is part of the full product. The Overview demonstrates the design system in use.'));
  }
  function App() {
    const [page, setPage] = React.useState('overview');
    const [period, setPeriod] = React.useState(D.period);
    const titles = {
      overview: ['Large exposure overview', D.periodLabel],
      exposures: ['Large exposures', D.periodLabel],
      counterparties: ['Counterparties', D.periodLabel],
      limits: ['Limits & policy', 'Approved limits and breach policy'],
      board: ['Board pack', 'Quarterly reporting package'],
      settings: ['Settings', 'Account and reporting preferences']
    };
    const [title, subtitle] = titles[page] || titles.overview;
    return React.createElement('div', {
      style: {
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
        background: 'var(--surface-page)'
      }
    }, React.createElement(SidebarNav, {
      items: NAV,
      activeId: page,
      onSelect: setPage,
      header: React.createElement(BrandLockup),
      footer: React.createElement(AccountChip)
    }), React.createElement('div', {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0
      }
    }, React.createElement(window.TopBar, {
      title,
      subtitle,
      period,
      onPeriod: setPeriod
    }), React.createElement('main', {
      style: {
        flex: 1,
        overflow: 'auto',
        padding: 'var(--space-8)'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto'
      }
    }, page === 'overview' ? React.createElement(Overview, {
      period,
      onPeriod: setPeriod
    }) : React.createElement(Placeholder, {
      label: title
    })))));
  }
  window.App = App;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/exposure-overview/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/exposure-overview/BarChart.jsx
try { (() => {
// Vertical bar chart (SVG) for the exposure trend. Assigns to window.
(function () {
  function BarChart({
    data = [],
    height = 220,
    unit = 'bn',
    prefix = '£'
  }) {
    const max = Math.max(...data.map(d => d.value)) * 1.15 || 1;
    const barW = 54;
    const gap = 28;
    const padBottom = 34;
    const padTop = 24;
    const chartH = height - padBottom - padTop;
    const width = data.length * (barW + gap) + gap;
    const niceTicks = 4;
    const ticks = Array.from({
      length: niceTicks + 1
    }, (_, i) => max / niceTicks * i);
    return React.createElement('svg', {
      width: '100%',
      viewBox: `0 0 ${width} ${height}`,
      style: {
        maxWidth: width,
        overflow: 'visible'
      }
    }, ticks.map((t, i) => {
      const y = padTop + chartH - t / max * chartH;
      return React.createElement('g', {
        key: 'g' + i
      }, React.createElement('line', {
        x1: 0,
        x2: width,
        y1: y,
        y2: y,
        stroke: 'var(--divider)',
        strokeWidth: 1
      }), React.createElement('text', {
        x: 0,
        y: y - 4,
        style: {
          font: 'var(--weight-medium) 11px var(--font-mono)',
          fill: 'var(--text-muted)'
        }
      }, prefix + t.toFixed(0)));
    }), data.map((d, i) => {
      const h = d.value / max * chartH;
      const x = gap + i * (barW + gap);
      const y = padTop + chartH - h;
      const isLast = i === data.length - 1;
      return React.createElement('g', {
        key: 'b' + i
      }, React.createElement('rect', {
        x,
        y,
        width: barW,
        height: h,
        rx: 6,
        fill: isLast ? 'var(--brand-mid)' : 'var(--brand-300)'
      }), React.createElement('text', {
        x: x + barW / 2,
        y: y - 8,
        textAnchor: 'middle',
        style: {
          font: 'var(--weight-semibold) 13px var(--font-mono)',
          fill: 'var(--text-strong)'
        }
      }, prefix + d.value.toFixed(1)), React.createElement('text', {
        x: x + barW / 2,
        y: height - 10,
        textAnchor: 'middle',
        style: {
          font: 'var(--weight-medium) 13px var(--font-sans)',
          fill: 'var(--text-muted)'
        }
      }, d.label));
    }));
  }
  window.BarChart = BarChart;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/exposure-overview/BarChart.jsx", error: String((e && e.message) || e) }); }

// ui_kits/exposure-overview/PieChart.jsx
try { (() => {
// Donut chart (SVG) using the Meridian chart palette. Assigns to window.
(function () {
  function PieChart({
    data = [],
    size = 220,
    thickness = 30,
    centerLabel,
    centerValue
  }) {
    const total = data.reduce((s, d) => s + d.value, 0) || 1;
    const r = (size - thickness) / 2;
    const C = 2 * Math.PI * r;
    let offset = 0;
    const cx = size / 2;
    return React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-6)',
        flexWrap: 'wrap'
      }
    }, React.createElement('svg', {
      width: size,
      height: size,
      viewBox: `0 0 ${size} ${size}`,
      style: {
        flexShrink: 0
      }
    }, React.createElement('circle', {
      cx,
      cy: cx,
      r,
      fill: 'none',
      stroke: 'var(--ink-150)',
      strokeWidth: thickness
    }), data.map((d, i) => {
      const frac = d.value / total;
      const len = frac * C;
      const el = React.createElement('circle', {
        key: i,
        cx,
        cy: cx,
        r,
        fill: 'none',
        stroke: d.color,
        strokeWidth: thickness,
        strokeDasharray: `${len} ${C - len}`,
        strokeDashoffset: -offset,
        transform: `rotate(-90 ${cx} ${cx})`
      });
      offset += len;
      return el;
    }), centerValue && React.createElement('text', {
      x: cx,
      y: cx - 4,
      textAnchor: 'middle',
      style: {
        font: 'var(--weight-semibold) 30px var(--font-display)',
        fill: 'var(--text-strong)'
      }
    }, centerValue), centerLabel && React.createElement('text', {
      x: cx,
      y: cx + 18,
      textAnchor: 'middle',
      style: {
        font: 'var(--weight-medium) 13px var(--font-sans)',
        fill: 'var(--text-muted)',
        textTransform: 'uppercase',
        letterSpacing: '0.06em'
      }
    }, centerLabel)), React.createElement('ul', {
      style: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'grid',
        gap: '10px',
        flex: 1,
        minWidth: 160
      }
    }, data.map((d, i) => React.createElement('li', {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }
    }, React.createElement('span', {
      style: {
        width: 12,
        height: 12,
        borderRadius: 3,
        background: d.color,
        flexShrink: 0
      }
    }), React.createElement('span', {
      style: {
        font: 'var(--type-body)',
        color: 'var(--text-body)',
        flex: 1
      }
    }, d.label), React.createElement('span', {
      className: 'tnum',
      style: {
        font: 'var(--weight-semibold) var(--text-base) var(--font-mono)',
        color: 'var(--text-strong)'
      }
    }, '£' + d.value.toFixed(1) + 'bn')))));
  }
  window.PieChart = PieChart;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/exposure-overview/PieChart.jsx", error: String((e && e.message) || e) }); }

// ui_kits/exposure-overview/TopBar.jsx
try { (() => {
// App top bar — page title, period picker, search and account actions.
(function () {
  const NS = window.MeridianExposureDesignSystem_580a95;
  const {
    Button,
    IconButton,
    Select,
    Icon
  } = NS;
  function TopBar({
    title,
    subtitle,
    period,
    onPeriod
  }) {
    return React.createElement('header', {
      style: {
        height: 'var(--topbar-height)',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-5)',
        padding: '0 var(--space-8)',
        background: 'var(--surface-card)',
        borderBottom: '1px solid var(--border-default)'
      }
    }, React.createElement('div', {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, React.createElement('h1', {
      style: {
        font: 'var(--type-page-title)',
        color: 'var(--text-strong)'
      }
    }, title), subtitle && React.createElement('p', {
      style: {
        font: 'var(--type-label)',
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, subtitle)), React.createElement(Select, {
      size: 'md',
      value: period,
      onChange: onPeriod,
      options: [{
        value: 'q1-26',
        label: 'Q1 2026'
      }, {
        value: 'q4-25',
        label: 'Q4 2025'
      }, {
        value: 'q3-25',
        label: 'Q3 2025'
      }]
    }), React.createElement(Button, {
      variant: 'secondary',
      iconLeft: React.createElement(Icon, {
        name: 'download',
        size: 18
      })
    }, 'Export board pack'), React.createElement(IconButton, {
      ariaLabel: 'Notifications',
      variant: 'ghost'
    }, React.createElement(Icon, {
      name: 'bell'
    })), React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        paddingLeft: 'var(--space-4)',
        borderLeft: '1px solid var(--divider)'
      }
    }, React.createElement('div', {
      style: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: 'var(--brand-100)',
        color: 'var(--brand-700)',
        display: 'grid',
        placeItems: 'center',
        font: 'var(--weight-semibold) 15px var(--font-sans)'
      }
    }, 'EH'), React.createElement('div', null, React.createElement('div', {
      style: {
        font: 'var(--weight-semibold) var(--text-sm)/1.2 var(--font-sans)',
        color: 'var(--text-strong)'
      }
    }, 'Eleanor Hartley'), React.createElement('div', {
      style: {
        font: 'var(--text-xs)/1.2 var(--font-sans)',
        color: 'var(--text-muted)'
      }
    }, 'Board member'))));
  }
  window.TopBar = TopBar;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/exposure-overview/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/exposure-overview/data.js
try { (() => {
// Sample data for the Meridian large-exposure overview (fictional).
window.MERIDIAN_DATA = {
  period: 'q1-26',
  periodLabel: 'Q1 2026 · as at 31 Mar 2026',
  kpis: [{
    label: 'Total large exposure',
    value: '£24.8',
    unit: 'bn',
    delta: 2.4,
    deltaInvert: true,
    caption: 'vs. Q4 2025',
    accent: 'var(--chart-1)',
    icon: 'layers'
  }, {
    label: 'Largest single exposure',
    value: '£3.1',
    unit: 'bn',
    delta: 3.0,
    deltaInvert: true,
    caption: '62% of approved limit',
    accent: 'var(--warning-500)',
    icon: 'building'
  }, {
    label: 'Counterparties reported',
    value: '48',
    unit: '',
    delta: 4,
    caption: '> 10% of capital base',
    accent: 'var(--chart-2)',
    icon: 'globe'
  }, {
    label: 'Active limit breaches',
    value: '2',
    unit: '',
    delta: -1,
    caption: '1 resolved this period',
    accent: 'var(--negative-500)',
    icon: 'alert-triangle'
  }],
  sectors: [{
    label: 'Real estate',
    value: 6.2,
    color: 'var(--chart-1)'
  }, {
    label: 'Utilities',
    value: 5.1,
    color: 'var(--chart-2)'
  }, {
    label: 'Financials',
    value: 4.4,
    color: 'var(--chart-3)'
  }, {
    label: 'Healthcare',
    value: 3.3,
    color: 'var(--chart-4)'
  }, {
    label: 'Infrastructure',
    value: 2.9,
    color: 'var(--chart-5)'
  }, {
    label: 'Other',
    value: 2.9,
    color: 'var(--chart-6)'
  }],
  trend: [{
    label: 'Q2 25',
    value: 21.6
  }, {
    label: 'Q3 25',
    value: 22.4
  }, {
    label: 'Q4 25',
    value: 24.2
  }, {
    label: 'Q1 26',
    value: 24.8
  }],
  counterparties: [{
    id: 1,
    name: 'Nordström Energy AB',
    sector: 'Utilities',
    country: 'Sweden',
    exposure: 3100,
    limit: 5000,
    status: {
      tone: 'warning',
      label: 'Watch'
    }
  }, {
    id: 2,
    name: 'Brookfield Capital Partners',
    sector: 'Real estate',
    country: 'Canada',
    exposure: 2760,
    limit: 3000,
    status: {
      tone: 'warning',
      label: 'Watch'
    }
  }, {
    id: 3,
    name: 'Helvetia Re',
    sector: 'Financials',
    country: 'Switzerland',
    exposure: 2520,
    limit: 2400,
    status: {
      tone: 'negative',
      label: 'Breach'
    }
  }, {
    id: 4,
    name: 'Aurora Pharma Group',
    sector: 'Healthcare',
    country: 'United States',
    exposure: 1880,
    limit: 4000,
    status: {
      tone: 'positive',
      label: 'Within limit'
    }
  }, {
    id: 5,
    name: 'Cedar Rock Infrastructure',
    sector: 'Infrastructure',
    country: 'United Kingdom',
    exposure: 2410,
    limit: 4000,
    status: {
      tone: 'positive',
      label: 'Within limit'
    }
  }, {
    id: 6,
    name: 'Meridian Sovereign Fund',
    sector: 'Financials',
    country: 'Norway',
    exposure: 1290,
    limit: 3500,
    status: {
      tone: 'positive',
      label: 'Within limit'
    }
  }, {
    id: 7,
    name: 'Atlas Logistics Holdings',
    sector: 'Infrastructure',
    country: 'Germany',
    exposure: 980,
    limit: 2000,
    status: {
      tone: 'positive',
      label: 'Within limit'
    }
  }, {
    id: 8,
    name: 'Kestrel Property REIT',
    sector: 'Real estate',
    country: 'United Kingdom',
    exposure: 1640,
    limit: 1700,
    status: {
      tone: 'negative',
      label: 'Breach'
    }
  }],
  sectorRows: [{
    id: 1,
    name: 'Real estate',
    country: '—',
    exposure: 6200,
    limit: 8000,
    status: {
      tone: 'warning',
      label: 'Watch'
    }
  }, {
    id: 2,
    name: 'Utilities',
    country: '—',
    exposure: 5100,
    limit: 7000,
    status: {
      tone: 'positive',
      label: 'Within limit'
    }
  }, {
    id: 3,
    name: 'Financials',
    country: '—',
    exposure: 4400,
    limit: 5000,
    status: {
      tone: 'warning',
      label: 'Watch'
    }
  }, {
    id: 4,
    name: 'Healthcare',
    country: '—',
    exposure: 3300,
    limit: 6000,
    status: {
      tone: 'positive',
      label: 'Within limit'
    }
  }],
  countryRows: [{
    id: 1,
    name: 'United Kingdom',
    sector: 'Mixed',
    exposure: 7300,
    limit: 10000,
    status: {
      tone: 'positive',
      label: 'Within limit'
    }
  }, {
    id: 2,
    name: 'United States',
    sector: 'Mixed',
    exposure: 5900,
    limit: 9000,
    status: {
      tone: 'positive',
      label: 'Within limit'
    }
  }, {
    id: 3,
    name: 'Sweden',
    sector: 'Utilities',
    exposure: 3100,
    limit: 4000,
    status: {
      tone: 'warning',
      label: 'Watch'
    }
  }, {
    id: 4,
    name: 'Switzerland',
    sector: 'Financials',
    exposure: 2520,
    limit: 2400,
    status: {
      tone: 'negative',
      label: 'Breach'
    }
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/exposure-overview/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.DeltaIndicator = __ds_scope.DeltaIndicator;

__ds_ns.LimitBar = __ds_scope.LimitBar;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
