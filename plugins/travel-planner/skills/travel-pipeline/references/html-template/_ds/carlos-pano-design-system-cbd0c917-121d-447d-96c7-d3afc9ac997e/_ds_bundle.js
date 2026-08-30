/* @ds-bundle: {"format":4,"namespace":"CarlosPanoDesignSystem_cbd0c9","components":[{"name":"LogoLockup","sourcePath":"components/brand/LogoLockup.jsx"},{"name":"LogoMark","sourcePath":"components/brand/LogoMark.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"MacbookFrame","sourcePath":"components/devices/MacbookFrame.jsx"},{"name":"ScreenIPhone12Pro","sourcePath":"components/devices/ScreenIPhone12Pro.jsx"},{"name":"Icon","sourcePath":"components/icon/Icon.jsx"},{"name":"PostCanvas","sourcePath":"components/showcase/PostCanvas.jsx"},{"name":"ProPreview","sourcePath":"components/showcase/ProPreview.jsx"},{"name":"SwatchTile","sourcePath":"components/showcase/SwatchTile.jsx"},{"name":"SocialMediaFacebook","sourcePath":"components/social/SocialMediaFacebook.jsx"},{"name":"SocialMediaInstagram","sourcePath":"components/social/SocialMediaInstagram.jsx"},{"name":"SocialMediaTikTok","sourcePath":"components/social/SocialMediaTikTok.jsx"},{"name":"SocialMediaTwitter","sourcePath":"components/social/SocialMediaTwitter.jsx"},{"name":"SocialMediaWhatsapp","sourcePath":"components/social/SocialMediaWhatsapp.jsx"},{"name":"GlassPanel","sourcePath":"components/surfaces/GlassPanel.jsx"},{"name":"GlowOrb","sourcePath":"components/surfaces/GlowOrb.jsx"},{"name":"PatternField","sourcePath":"components/surfaces/PatternField.jsx"},{"name":"ScreenshotCard","sourcePath":"components/surfaces/ScreenshotCard.jsx"}],"sourceHashes":{"components/brand/LogoLockup.jsx":"54dcf19a448d","components/brand/LogoMark.jsx":"51175ccb584b","components/brand/Wordmark.jsx":"ecc2ebb88132","components/devices/MacbookFrame.jsx":"6db3a8990527","components/devices/ScreenIPhone12Pro.jsx":"dcf4401de550","components/icon/Icon.jsx":"b81dfc2559d3","components/icon/icon-data.js":"9ba233c70f41","components/showcase/PostCanvas.jsx":"b7750ab16f83","components/showcase/ProPreview.jsx":"1e791970df24","components/showcase/SwatchTile.jsx":"ce83afb377b3","components/social/SocialMediaFacebook.jsx":"f9792820d47c","components/social/SocialMediaInstagram.jsx":"f874629210b8","components/social/SocialMediaTikTok.jsx":"e9742de2dced","components/social/SocialMediaTwitter.jsx":"0c94cc88e101","components/social/SocialMediaWhatsapp.jsx":"ede8990c3b41","components/surfaces/GlassPanel.jsx":"53d6fefe1115","components/surfaces/GlowOrb.jsx":"978639abcfa6","components/surfaces/PatternField.jsx":"fa49ef053e27","components/surfaces/ScreenshotCard.jsx":"320cf6430a07","ui_kits/brand-sheets/sheets.jsx":"baae4ff3ede1","ui_kits/project-showcase/preview-detail.jsx":"050b887aa849","ui_kits/project-showcase/preview-grid.jsx":"e4d4ba2d4e66","ui_kits/social-posts/post-formats.jsx":"3a40d70449fb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CarlosPanoDesignSystem_cbd0c9 = window.CarlosPanoDesignSystem_cbd0c9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/LogoLockup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Full lockup: CP monogram over the "Carlos Pano" wordmark.
   Geometry from CpanoWebDev.fig, page Logo-Icon, "LOGO CP-06" (node 2:77). */
function LogoLockup({
  width = 320,
  color = 'var(--cp-navy)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 1011.022 738.544",
    width: width,
    style: {
      display: 'block',
      color,
      ...style
    },
    "aria-label": "Carlos Pano",
    role: "img"
  }, rest), /*#__PURE__*/React.createElement("g", {
    transform: "translate(307.452 633.684)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 96.24 85.7 C 83.02 98.63 71.62 104.86 52.85 104.86 C 21.56 104.86 0 83.02 0 52.29 C 0 20.72 24.48 0 53.13 0 C 61.396 0.007 69.563 1.797 77.074 5.248 C 84.584 8.7 91.262 13.732 96.65 20 L 83.3 32.86 C 74.3 23.26 64.39 18.26 52.71 18.26 C 33.93 18.26 18.64 32.72 18.64 52.33 C 18.64 72.91 33.38 86.68 53.13 86.68 C 65.5 86.68 73.85 81.68 83.3 72.22 L 96.24 85.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(404.252 660.274)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 57.99 68.01 C 51.45 74.4 44.5 77.74 35.18 77.74 C 16.41 77.74 0 61.61 0 38.94 C 0 15.86 15.57 0 34.76 0 C 43.66 0 51.31 3.34 57.99 10 L 57.99 1.94 L 76.48 1.94 L 76.48 75.78 L 57.99 75.78 L 57.99 68.01 Z M 18.63 38.8 C 18.63 51.46 26.98 60.8 38.52 60.8 C 50.06 60.8 58.82 52.18 58.82 38.69 C 58.82 25.76 50.2 17 38.52 17 C 26.28 16.97 18.63 26.7 18.63 38.8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(490.892 660.274)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.99 11.27 C 19.47 3.62 25.45 0 31.57 0 C 34.375 -0.013 37.141 0.656 39.63 1.95 L 33.93 17.8 C 32.256 16.903 30.406 16.381 28.51 16.27 C 23.22 16.27 19.05 22.39 18.63 33.27 C 18.5 37.27 18.5 41.89 18.5 45.92 L 18.5 75.82 L 0 75.82 L 0 1.95 L 16 1.95 L 15.99 11.27 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(533.722 633.714)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 18.5 0 L 18.5 102.35 L 0 102.35 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(559.871 660.274)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 77.461 38.8 C 77.461 60.22 60.911 77.74 38.381 77.74 C 16.961 77.74 0.001 60.64 0.001 38.94 C -0.079 28.709 3.902 18.864 11.071 11.564 C 18.239 4.264 28.011 0.106 38.241 0 C 59.801 0 77.461 16.97 77.461 38.8 Z M 18.631 38.8 C 18.631 51.32 26.561 60.22 38.521 60.22 C 49.921 60.22 58.821 51.87 58.821 38.94 C 58.821 26.42 50.621 17.52 38.521 17.52 C 26.981 17.52 18.631 26.56 18.631 38.8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(636.782 660.274)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20.58 43.81 C 8.76 37.81 2.78 30.6 2.78 21.28 C 2.78 9.74 12.51 0 26.7 0 C 31.438 -0.022 36.113 1.079 40.344 3.211 C 44.575 5.344 48.24 8.448 51.04 12.27 L 39.63 23.81 C 35.46 19.64 31.29 17 26.84 17 C 23.08 17 20.16 18.53 20.16 21.45 C 20.16 24.37 22.8 25.45 26.84 27.57 L 33.65 31.04 C 45.89 37.3 52.43 43.7 52.43 54.69 C 52.43 67.9 42 77.77 25.86 77.77 C 15.16 77.77 6.39 73.46 0 65.12 L 11.4 52.6 C 15.71 57.6 21.97 61.22 26.84 61.22 C 31.43 61.22 35.04 58.58 35.04 55.22 C 35.04 51.86 31.98 49.66 26.84 47.02 L 20.58 43.81 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(718.272 636.214)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 23.23 0 C 36.16 0 45.23 2 51.46 8.07 C 56.33 12.8 59.52 20.45 59.52 28.93 C 59.52 39.5 55.21 47.43 46.87 52.57 C 38.53 57.71 29.49 57.57 19.06 57.57 L 19.06 99.84 L 0 99.84 L 0 0 Z M 19.06 39.08 L 27.96 39.08 C 36.58 39.08 40.89 35.74 40.89 28.93 C 40.89 22.12 36.16 18.64 27.12 18.64 L 19.06 18.64 L 19.06 39.08 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(775.572 660.274)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 57.99 68.01 C 51.46 74.4 44.5 77.74 35.19 77.74 C 16.41 77.74 0 61.61 0 38.94 C 0 15.86 15.58 0 34.77 0 C 43.67 0 51.32 3.34 57.99 10 L 57.99 1.94 L 76.49 1.94 L 76.49 75.78 L 57.99 75.78 L 57.99 68.01 Z M 18.64 38.8 C 18.64 51.46 26.98 60.8 38.52 60.8 C 50.06 60.8 58.83 52.18 58.83 38.69 C 58.83 25.76 50.21 17 38.52 17 C 26.29 16.97 18.64 26.7 18.64 38.8 L 18.64 38.8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(860.952 660.274)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.51 9.46 C 25.6 3.46 32.14 0 40.34 0 C 54.11 0 65.65 9.46 65.65 25.31 L 65.65 75.79 L 47.16 75.79 L 47.16 40.89 C 47.16 26.29 45.91 16.97 34.64 16.97 C 32.118 16.962 29.638 17.612 27.444 18.855 C 25.25 20.098 23.419 21.892 22.13 24.06 C 18.37 30.06 18.51 36.72 18.51 44.36 L 18.51 75.79 L 0 75.79 L 0 1.95 L 18.5 1.95 L 18.51 9.46 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(933.561 660.274)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 77.461 38.8 C 77.461 60.22 60.911 77.74 38.381 77.74 C 16.971 77.74 0.001 60.64 0.001 38.94 C -0.079 28.709 3.902 18.864 11.071 11.564 C 18.239 4.264 28.011 0.106 38.241 0 C 59.801 0 77.461 16.97 77.461 38.8 Z M 18.631 38.8 C 18.631 51.32 26.561 60.22 38.521 60.22 C 49.931 60.22 58.831 51.87 58.831 38.94 C 58.831 26.42 50.621 17.52 38.521 17.52 C 26.981 17.52 18.631 26.56 18.631 38.8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(0.000 0.000)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 390.272 155.864 C 386.422 155.664 382.532 155.574 378.652 155.574 C 356.017 155.548 333.505 158.888 311.852 165.484 L 311.852 165.484 C 306.322 145.646 295.731 127.586 281.118 113.075 C 266.505 98.563 248.371 88.099 228.495 82.707 C 208.619 77.316 187.683 77.183 167.74 82.321 C 147.797 87.459 129.531 97.692 114.735 112.016 C 99.938 126.341 89.118 144.265 83.336 164.031 C 77.554 183.796 77.008 204.726 81.752 224.766 C 86.496 244.807 96.367 263.27 110.397 278.346 C 124.427 293.422 142.134 304.593 161.782 310.764 L 161.782 310.764 C 153.676 334.548 149.554 359.507 149.582 384.634 L 149.582 388.814 C 115.424 380.294 84.167 362.792 59.052 338.122 C 33.938 313.452 15.879 282.513 6.75 248.513 C -2.379 214.513 -2.246 178.689 7.134 144.758 C 16.515 110.826 34.801 80.021 60.098 55.538 C 85.395 31.055 116.781 13.785 151.001 5.518 C 185.221 -2.749 221.029 -1.711 254.713 8.524 C 288.397 18.759 318.729 37.819 342.565 63.726 C 366.401 89.634 382.873 121.446 390.272 155.864 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(181.352 187.314)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 379.09 120.5 C 365.046 87.236 342.14 58.467 312.868 37.328 C 283.596 16.188 249.083 3.491 213.09 0.62 C 207.87 0.214 202.62 0.007 197.34 0 C 176.224 -0.027 155.242 3.349 135.2 10 C 130.254 11.653 125.36 13.5 120.52 15.54 C 73.217 35.583 35.563 73.237 15.52 120.54 C 14.36 123.27 13.28 126.03 12.25 128.8 C 4.111 150.74 -0.037 173.959 0 197.36 L 0 547.36 L 29.6 547.36 C 42.556 547.36 54.981 542.213 64.142 533.052 C 73.304 523.891 78.45 511.466 78.45 498.51 L 78.45 354.87 C 113.121 381.007 155.442 394.982 198.859 394.63 C 242.276 394.279 284.366 379.62 318.608 352.926 C 352.851 326.231 377.336 288.99 388.27 246.971 C 399.204 204.952 395.978 160.5 379.09 120.5 L 379.09 120.5 Z M 281.32 281.35 C 261.88 300.787 236.301 312.881 208.943 315.573 C 181.585 318.264 154.14 311.386 131.284 296.11 C 108.429 280.834 91.578 258.106 83.602 231.798 C 75.625 205.49 77.018 177.231 87.542 151.835 C 98.067 126.439 117.071 105.478 141.318 92.523 C 165.564 79.569 193.553 75.423 220.514 80.791 C 247.475 86.159 271.74 100.71 289.175 121.964 C 306.61 143.218 316.137 169.86 316.13 197.35 C 316.172 212.958 313.116 228.419 307.141 242.838 C 301.166 257.257 292.389 270.347 281.32 281.35 L 281.32 281.35 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}
Object.assign(__ds_scope, { LogoLockup, __ds_default_components_brand_LogoLockup_pch2hb: LogoLockup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/LogoLockup.jsx", error: String((e && e.message) || e) }); }

// components/brand/LogoMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The CP monogram from CpanoWebDev.fig (page Logo-Icon, "ícono CP-01", node 2:355).
   Two vectors: the open C arc and the P bowl. Paints with currentColor. */
function LogoMark({
  size = 64,
  color = 'var(--cp-navy)',
  boxed = false,
  boxColor = 'var(--cp-navy)',
  style,
  ...rest
}) {
  const glyph = /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 576.047 734.745",
    width: boxed ? undefined : size,
    height: boxed ? undefined : size,
    style: {
      display: 'block',
      color,
      width: boxed ? '53.3%' : undefined,
      height: boxed ? 'auto' : undefined,
      ...(boxed ? null : style)
    },
    "aria-label": "Carlos Pano",
    role: "img"
  }, boxed ? {} : rest), /*#__PURE__*/React.createElement("g", {
    transform: "translate(0.000 0.000)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 390.272 155.864 C 386.422 155.664 382.532 155.574 378.652 155.574 C 356.017 155.548 333.505 158.888 311.852 165.484 L 311.852 165.484 C 306.322 145.646 295.731 127.586 281.118 113.075 C 266.505 98.563 248.371 88.099 228.495 82.707 C 208.619 77.316 187.683 77.183 167.74 82.321 C 147.797 87.459 129.531 97.692 114.735 112.016 C 99.938 126.341 89.118 144.265 83.336 164.031 C 77.554 183.796 77.008 204.726 81.752 224.766 C 86.496 244.807 96.367 263.27 110.397 278.346 C 124.427 293.422 142.134 304.593 161.782 310.764 L 161.782 310.764 C 153.676 334.548 149.554 359.507 149.582 384.634 L 149.582 388.814 C 115.424 380.294 84.167 362.792 59.052 338.122 C 33.938 313.452 15.879 282.513 6.75 248.513 C -2.379 214.513 -2.246 178.689 7.134 144.758 C 16.515 110.826 34.801 80.021 60.098 55.538 C 85.395 31.055 116.781 13.785 151.001 5.518 C 185.221 -2.749 221.029 -1.711 254.713 8.524 C 288.397 18.759 318.729 37.819 342.565 63.726 C 366.401 89.634 382.873 121.446 390.272 155.864 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(181.352 187.314)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 379.09 120.5 C 365.046 87.236 342.14 58.467 312.868 37.328 C 283.596 16.188 249.083 3.491 213.09 0.62 C 207.87 0.214 202.62 0.007 197.34 0 C 176.224 -0.027 155.242 3.349 135.2 10 C 130.254 11.653 125.36 13.5 120.52 15.54 C 73.217 35.583 35.563 73.237 15.52 120.54 C 14.36 123.27 13.28 126.03 12.25 128.8 C 4.111 150.74 -0.037 173.959 0 197.36 L 0 547.36 L 29.6 547.36 C 42.556 547.36 54.981 542.213 64.142 533.052 C 73.304 523.891 78.45 511.466 78.45 498.51 L 78.45 354.87 C 113.121 381.007 155.442 394.982 198.859 394.63 C 242.276 394.279 284.366 379.62 318.608 352.926 C 352.851 326.231 377.336 288.99 388.27 246.971 C 399.204 204.952 395.978 160.5 379.09 120.5 L 379.09 120.5 Z M 281.32 281.35 C 261.88 300.787 236.301 312.881 208.943 315.573 C 181.585 318.264 154.14 311.386 131.284 296.11 C 108.429 280.834 91.578 258.106 83.602 231.798 C 75.625 205.49 77.018 177.231 87.542 151.835 C 98.067 126.439 117.071 105.478 141.318 92.523 C 165.564 79.569 193.553 75.423 220.514 80.791 C 247.475 86.159 271.74 100.71 289.175 121.964 C 306.61 143.218 316.137 169.86 316.13 197.35 C 316.172 212.958 313.116 228.419 307.141 242.838 C 301.166 257.257 292.389 270.347 281.32 281.35 L 281.32 281.35 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  if (!boxed) return glyph;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      background: boxColor,
      display: 'grid',
      placeItems: 'center',
      ...style
    }
  }, rest), glyph);
}
Object.assign(__ds_scope, { LogoMark, __ds_default_components_brand_LogoMark_1ff6cgc: LogoMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/LogoMark.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* "Carlos Pano" wordmark on its own — the letterforms drawn beneath the
   monogram in LOGO CP-01..24 (CpanoWebDev.fig, page Logo-Icon). */
function Wordmark({
  width = 240,
  color = 'var(--cp-navy)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 703.57 104.86",
    width: width,
    style: {
      display: 'block',
      color,
      ...style
    },
    "aria-label": "Carlos Pano",
    role: "img"
  }, rest), /*#__PURE__*/React.createElement("g", {
    transform: "translate(0.000 0.000)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 96.24 85.7 C 83.02 98.63 71.62 104.86 52.85 104.86 C 21.56 104.86 0 83.02 0 52.29 C 0 20.72 24.48 0 53.13 0 C 61.396 0.007 69.563 1.797 77.074 5.248 C 84.584 8.7 91.262 13.732 96.65 20 L 83.3 32.86 C 74.3 23.26 64.39 18.26 52.71 18.26 C 33.93 18.26 18.64 32.72 18.64 52.33 C 18.64 72.91 33.38 86.68 53.13 86.68 C 65.5 86.68 73.85 81.68 83.3 72.22 L 96.24 85.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(96.800 26.590)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 57.99 68.01 C 51.45 74.4 44.5 77.74 35.18 77.74 C 16.41 77.74 0 61.61 0 38.94 C 0 15.86 15.57 0 34.76 0 C 43.66 0 51.31 3.34 57.99 10 L 57.99 1.94 L 76.48 1.94 L 76.48 75.78 L 57.99 75.78 L 57.99 68.01 Z M 18.63 38.8 C 18.63 51.46 26.98 60.8 38.52 60.8 C 50.06 60.8 58.82 52.18 58.82 38.69 C 58.82 25.76 50.2 17 38.52 17 C 26.28 16.97 18.63 26.7 18.63 38.8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(183.440 26.590)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.99 11.27 C 19.47 3.62 25.45 0 31.57 0 C 34.375 -0.013 37.141 0.656 39.63 1.95 L 33.93 17.8 C 32.256 16.903 30.406 16.381 28.51 16.27 C 23.22 16.27 19.05 22.39 18.63 33.27 C 18.5 37.27 18.5 41.89 18.5 45.92 L 18.5 75.82 L 0 75.82 L 0 1.95 L 16 1.95 L 15.99 11.27 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(226.270 0.030)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 18.5 0 L 18.5 102.35 L 0 102.35 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(252.419 26.590)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 77.461 38.8 C 77.461 60.22 60.911 77.74 38.381 77.74 C 16.961 77.74 0.001 60.64 0.001 38.94 C -0.079 28.709 3.902 18.864 11.071 11.564 C 18.239 4.264 28.011 0.106 38.241 0 C 59.801 0 77.461 16.97 77.461 38.8 Z M 18.631 38.8 C 18.631 51.32 26.561 60.22 38.521 60.22 C 49.921 60.22 58.821 51.87 58.821 38.94 C 58.821 26.42 50.621 17.52 38.521 17.52 C 26.981 17.52 18.631 26.56 18.631 38.8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(329.330 26.590)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20.58 43.81 C 8.76 37.81 2.78 30.6 2.78 21.28 C 2.78 9.74 12.51 0 26.7 0 C 31.438 -0.022 36.113 1.079 40.344 3.211 C 44.575 5.344 48.24 8.448 51.04 12.27 L 39.63 23.81 C 35.46 19.64 31.29 17 26.84 17 C 23.08 17 20.16 18.53 20.16 21.45 C 20.16 24.37 22.8 25.45 26.84 27.57 L 33.65 31.04 C 45.89 37.3 52.43 43.7 52.43 54.69 C 52.43 67.9 42 77.77 25.86 77.77 C 15.16 77.77 6.39 73.46 0 65.12 L 11.4 52.6 C 15.71 57.6 21.97 61.22 26.84 61.22 C 31.43 61.22 35.04 58.58 35.04 55.22 C 35.04 51.86 31.98 49.66 26.84 47.02 L 20.58 43.81 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(410.820 2.530)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 23.23 0 C 36.16 0 45.23 2 51.46 8.07 C 56.33 12.8 59.52 20.45 59.52 28.93 C 59.52 39.5 55.21 47.43 46.87 52.57 C 38.53 57.71 29.49 57.57 19.06 57.57 L 19.06 99.84 L 0 99.84 L 0 0 Z M 19.06 39.08 L 27.96 39.08 C 36.58 39.08 40.89 35.74 40.89 28.93 C 40.89 22.12 36.16 18.64 27.12 18.64 L 19.06 18.64 L 19.06 39.08 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(468.120 26.590)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 57.99 68.01 C 51.46 74.4 44.5 77.74 35.19 77.74 C 16.41 77.74 0 61.61 0 38.94 C 0 15.86 15.58 0 34.77 0 C 43.67 0 51.32 3.34 57.99 10 L 57.99 1.94 L 76.49 1.94 L 76.49 75.78 L 57.99 75.78 L 57.99 68.01 Z M 18.64 38.8 C 18.64 51.46 26.98 60.8 38.52 60.8 C 50.06 60.8 58.83 52.18 58.83 38.69 C 58.83 25.76 50.21 17 38.52 17 C 26.29 16.97 18.64 26.7 18.64 38.8 L 18.64 38.8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(553.500 26.590)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.51 9.46 C 25.6 3.46 32.14 0 40.34 0 C 54.11 0 65.65 9.46 65.65 25.31 L 65.65 75.79 L 47.16 75.79 L 47.16 40.89 C 47.16 26.29 45.91 16.97 34.64 16.97 C 32.118 16.962 29.638 17.612 27.444 18.855 C 25.25 20.098 23.419 21.892 22.13 24.06 C 18.37 30.06 18.51 36.72 18.51 44.36 L 18.51 75.79 L 0 75.79 L 0 1.95 L 18.5 1.95 L 18.51 9.46 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(626.109 26.590)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 77.461 38.8 C 77.461 60.22 60.911 77.74 38.381 77.74 C 16.971 77.74 0.001 60.64 0.001 38.94 C -0.079 28.709 3.902 18.864 11.071 11.564 C 18.239 4.264 28.011 0.106 38.241 0 C 59.801 0 77.461 16.97 77.461 38.8 Z M 18.631 38.8 C 18.631 51.32 26.561 60.22 38.521 60.22 C 49.931 60.22 58.831 51.87 58.831 38.94 C 58.831 26.42 50.621 17.52 38.521 17.52 C 26.981 17.52 18.631 26.56 18.631 38.8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}
Object.assign(__ds_scope, { Wordmark, __ds_default_components_brand_Wordmark_1x48u5z: Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/devices/MacbookFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* MacBook Pro mockup used across the Posts page (node 115:277). Every
   dimension, radius and gradient below is a literal from the .fig; the frame
   is drawn at 905.665 x 531 and scaled by `width`. */
const W = 905.665;
const H = 531;
function MacbookFrame({
  width = 905.665,
  src,
  alt = '',
  label = 'Macbook Pro',
  style,
  ...rest
}) {
  const s = width / W;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width,
      height: H * s,
      position: 'relative',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: W,
      height: H,
      transform: `scale(${s})`,
      transformOrigin: '0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 46.721,
      top: 522.015,
      width: 813.122,
      height: 8.985,
      borderRadius: 'var(--radius-full)',
      background: 'var(--cp-black)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 88.051,
      top: 0,
      width: 733.157,
      height: 497.756,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '28px 28px 4px 4px',
      background: 'var(--chrome-lid)',
      boxShadow: 'inset 0 0 0 2px var(--border-device)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 4.492,
      top: 4.492,
      width: 724.173,
      height: 474.396,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--cp-black)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 18.868,
      top: 27.853,
      width: 691.827,
      height: 431.269,
      overflow: 'hidden',
      background: 'var(--cp-white)'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 327.944,
      top: 479.787,
      width: 74.574,
      fontFamily: 'var(--font-core)',
      fontWeight: 600,
      fontSize: 13,
      textAlign: 'center',
      lineHeight: 0.9,
      color: 'var(--chrome-label)'
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 494.162,
      width: W,
      height: 26.954,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: W,
      height: 16.173,
      borderRadius: 'var(--radius-xs)',
      background: 'linear-gradient(90deg, #0D1012 0%, #CAD4DB 2.95%, #242729 6.25%, #A3ACB1 13.36%, #A3ACB1 86.6%, #242729 94.19%, #CAD4DB 97.13%, #0D1012 99.64%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 16.173,
      width: W,
      height: 10.782,
      background: 'linear-gradient(180deg, #7A7F83 0%, #0B0B0E 100%)',
      borderRadius: '0 0 40% 40% / 0 0 100% 100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 378.288,
      top: 0,
      width: 149.987,
      height: 12.579,
      borderRadius: '0 0 12px 12px',
      background: 'linear-gradient(90deg, #3C3C3C 9.86%, rgba(60,60,60,0) 35.92%, rgba(60,60,60,0) 64.08%, #444444 91.93%), var(--chrome-groove)'
    }
  }))));
}
Object.assign(__ds_scope, { MacbookFrame, __ds_default_components_devices_MacbookFrame_1062vzn: MacbookFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/devices/MacbookFrame.jsx", error: String((e && e.message) || e) }); }

// components/devices/ScreenIPhone12Pro.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* iPhone 12 Pro mockup (the file's "Screen iPhone 12 Pro" symbol, node 14:645,
   as placed on the Projects page at 116 x 241). Drawn at 375 x 812 and scaled. */
const W = 375;
const H = 812;
function ScreenIPhone12Pro({
  width = 375,
  src,
  alt = '',
  notch = true,
  style,
  ...rest
}) {
  const s = width / W;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width,
      height: H * s,
      position: 'relative',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: W,
      height: H,
      transform: `scale(${s})`,
      transformOrigin: '0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 44,
      background: 'var(--cp-black)',
      boxShadow: 'var(--shadow-device)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 11,
      top: 11,
      width: W - 22,
      height: H - 22,
      borderRadius: 34,
      overflow: 'hidden',
      background: 'var(--cp-navy)'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : null), notch ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 11,
      transform: 'translateX(-50%)',
      width: 152,
      height: 30,
      borderRadius: '0 0 18px 18px',
      background: 'var(--cp-black)'
    }
  }) : null));
}
Object.assign(__ds_scope, { ScreenIPhone12Pro, __ds_default_components_devices_ScreenIPhone12Pro_14kntlv: ScreenIPhone12Pro });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/devices/ScreenIPhone12Pro.jsx", error: String((e && e.message) || e) }); }

// components/icon/icon-data.js
try { (() => {
// Generated by fig_materialize (moduleFormat: 'icon-data') — 16 icon(s)
// as { viewBox, body } SVG-markup entries. Render via the sibling Icon.jsx
// (<Icon name="SocialMediaFacebook" />), or consume the path data directly.
let __ds_default_components_icon_icon_data_dzztcy;
try {
  __ds_default_components_icon_icon_data_dzztcy = {
    "SocialMediaFacebook": {
      viewBox: "0 0 91.562 91.562",
      body: "<path d=\"M 23.104 25.773 L 24.409 17.484 L 16.372 17.484 L 16.372 12.096 C 16.372 9.83 17.494 7.615 21.082 7.615 L 24.787 7.615 L 24.787 0.557 C 22.629 0.213 20.449 0.027 18.264 0 C 11.65 0 7.332 3.976 7.332 11.164 L 7.332 17.484 L 0 17.484 L 0 25.773 L 7.332 25.773 L 7.332 45.822 L 16.372 45.822 L 16.372 25.773 L 23.104 25.773 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 33.879 22.988)\"/>"
    },
    "SocialMediaInstagram": {
      viewBox: "0 0 91.562 91.562",
      body: "<path d=\"M 15.271 22.911 C 15.271 18.693 18.688 15.273 22.904 15.273 C 27.121 15.273 30.54 18.693 30.54 22.911 C 30.54 27.128 27.121 30.548 22.904 30.548 C 18.688 30.548 15.271 27.128 15.271 22.911 Z M 11.143 22.911 C 11.143 29.408 16.409 34.675 22.904 34.675 C 29.4 34.675 34.665 29.408 34.665 22.911 C 34.665 16.413 29.4 11.146 22.904 11.146 C 16.409 11.146 11.143 16.413 11.143 22.911 Z M 32.382 10.68 C 32.382 11.224 32.543 11.755 32.845 12.208 C 33.147 12.66 33.576 13.012 34.078 13.221 C 34.58 13.429 35.133 13.484 35.666 13.378 C 36.199 13.272 36.689 13.01 37.074 12.626 C 37.458 12.241 37.72 11.752 37.826 11.218 C 37.933 10.685 37.878 10.132 37.671 9.63 C 37.463 9.127 37.111 8.698 36.659 8.396 C 36.207 8.093 35.676 7.932 35.132 7.932 L 35.131 7.932 C 34.402 7.932 33.703 8.222 33.188 8.737 C 32.673 9.252 32.383 9.951 32.382 10.68 L 32.382 10.68 Z M 13.651 41.56 C 11.418 41.458 10.204 41.086 9.397 40.772 C 8.328 40.355 7.565 39.859 6.763 39.058 C 5.961 38.256 5.464 37.494 5.05 36.424 C 4.735 35.618 4.363 34.403 4.262 32.17 C 4.151 29.755 4.129 29.029 4.129 22.911 C 4.129 16.793 4.153 16.069 4.262 13.652 C 4.364 11.419 4.738 10.206 5.05 9.398 C 5.466 8.328 5.962 7.565 6.763 6.762 C 7.564 5.96 8.326 5.463 9.397 5.049 C 10.204 4.734 11.418 4.362 13.651 4.26 C 16.065 4.149 16.79 4.127 22.904 4.127 C 29.018 4.127 29.744 4.151 32.16 4.26 C 34.393 4.362 35.605 4.737 36.414 5.049 C 37.483 5.463 38.246 5.961 39.048 6.762 C 39.85 7.564 40.345 8.328 40.761 9.398 C 41.076 10.204 41.448 11.419 41.549 13.652 C 41.66 16.069 41.683 16.793 41.683 22.911 C 41.683 29.029 41.66 29.753 41.549 32.17 C 41.448 34.403 41.074 35.617 40.761 36.424 C 40.345 37.494 39.849 38.257 39.048 39.058 C 38.247 39.858 37.483 40.355 36.414 40.772 C 35.607 41.086 34.393 41.458 32.16 41.56 C 29.746 41.671 29.021 41.693 22.904 41.693 C 16.788 41.693 16.064 41.671 13.651 41.56 L 13.651 41.56 Z M 13.461 0.139 C 11.023 0.25 9.357 0.637 7.902 1.203 C 6.395 1.788 5.119 2.572 3.844 3.846 C 2.57 5.119 1.787 6.397 1.203 7.904 C 0.636 9.36 0.25 11.026 0.139 13.465 C 0.026 15.908 0 16.689 0 22.911 C 0 29.133 0.026 29.914 0.139 32.356 C 0.25 34.796 0.636 36.461 1.203 37.918 C 1.787 39.424 2.57 40.704 3.844 41.976 C 5.119 43.249 6.395 44.032 7.902 44.619 C 9.36 45.185 11.023 45.572 13.461 45.683 C 15.905 45.794 16.684 45.822 22.904 45.822 C 29.124 45.822 29.905 45.796 32.347 45.683 C 34.786 45.572 36.451 45.185 37.907 44.619 C 39.413 44.032 40.689 43.249 41.964 41.976 C 43.239 40.703 44.019 39.424 44.606 37.918 C 45.172 36.461 45.56 34.795 45.67 32.356 C 45.781 29.912 45.807 29.133 45.807 22.911 C 45.807 16.689 45.781 15.908 45.67 13.465 C 45.559 11.026 45.172 9.36 44.606 7.904 C 44.019 6.398 43.237 5.121 41.964 3.846 C 40.691 2.57 39.413 1.788 37.908 1.203 C 36.451 0.637 34.785 0.248 32.349 0.139 C 29.907 0.028 29.126 0 22.906 0 C 16.686 0 15.905 0.026 13.461 0.139 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 22.891 22.987)\"/><path d=\"M 15.271 22.911 C 15.271 18.693 18.688 15.273 22.904 15.273 C 27.121 15.273 30.54 18.693 30.54 22.911 C 30.54 27.128 27.121 30.548 22.904 30.548 C 18.688 30.548 15.271 27.128 15.271 22.911 Z M 11.143 22.911 C 11.143 29.408 16.409 34.675 22.904 34.675 C 29.4 34.675 34.665 29.408 34.665 22.911 C 34.665 16.413 29.4 11.146 22.904 11.146 C 16.409 11.146 11.143 16.413 11.143 22.911 Z M 32.382 10.68 C 32.382 11.224 32.543 11.755 32.845 12.208 C 33.147 12.66 33.576 13.012 34.078 13.221 C 34.58 13.429 35.133 13.484 35.666 13.378 C 36.199 13.272 36.689 13.01 37.074 12.626 C 37.458 12.241 37.72 11.752 37.826 11.218 C 37.933 10.685 37.878 10.132 37.671 9.63 C 37.463 9.127 37.111 8.698 36.659 8.396 C 36.207 8.093 35.676 7.932 35.132 7.932 L 35.131 7.932 C 34.402 7.932 33.703 8.222 33.188 8.737 C 32.673 9.252 32.383 9.951 32.382 10.68 L 32.382 10.68 Z M 13.651 41.56 C 11.418 41.458 10.204 41.086 9.397 40.772 C 8.328 40.355 7.565 39.859 6.763 39.058 C 5.961 38.256 5.464 37.494 5.05 36.424 C 4.735 35.618 4.363 34.403 4.262 32.17 C 4.151 29.755 4.129 29.029 4.129 22.911 C 4.129 16.793 4.153 16.069 4.262 13.652 C 4.364 11.419 4.738 10.206 5.05 9.398 C 5.466 8.328 5.962 7.565 6.763 6.762 C 7.564 5.96 8.326 5.463 9.397 5.049 C 10.204 4.734 11.418 4.362 13.651 4.26 C 16.065 4.149 16.79 4.127 22.904 4.127 C 29.018 4.127 29.744 4.151 32.16 4.26 C 34.393 4.362 35.605 4.737 36.414 5.049 C 37.483 5.463 38.246 5.961 39.048 6.762 C 39.85 7.564 40.345 8.328 40.761 9.398 C 41.076 10.204 41.448 11.419 41.549 13.652 C 41.66 16.069 41.683 16.793 41.683 22.911 C 41.683 29.029 41.66 29.753 41.549 32.17 C 41.448 34.403 41.074 35.617 40.761 36.424 C 40.345 37.494 39.849 38.257 39.048 39.058 C 38.247 39.858 37.483 40.355 36.414 40.772 C 35.607 41.086 34.393 41.458 32.16 41.56 C 29.746 41.671 29.021 41.693 22.904 41.693 C 16.788 41.693 16.064 41.671 13.651 41.56 L 13.651 41.56 Z M 13.461 0.139 C 11.023 0.25 9.357 0.637 7.902 1.203 C 6.395 1.788 5.119 2.572 3.844 3.846 C 2.57 5.119 1.787 6.397 1.203 7.904 C 0.636 9.36 0.25 11.026 0.139 13.465 C 0.026 15.908 0 16.689 0 22.911 C 0 29.133 0.026 29.914 0.139 32.356 C 0.25 34.796 0.636 36.461 1.203 37.918 C 1.787 39.424 2.57 40.704 3.844 41.976 C 5.119 43.249 6.395 44.032 7.902 44.619 C 9.36 45.185 11.023 45.572 13.461 45.683 C 15.905 45.794 16.684 45.822 22.904 45.822 C 29.124 45.822 29.905 45.796 32.347 45.683 C 34.786 45.572 36.451 45.185 37.907 44.619 C 39.413 44.032 40.689 43.249 41.964 41.976 C 43.239 40.703 44.019 39.424 44.606 37.918 C 45.172 36.461 45.56 34.795 45.67 32.356 C 45.781 29.912 45.807 29.133 45.807 22.911 C 45.807 16.689 45.781 15.908 45.67 13.465 C 45.559 11.026 45.172 9.36 44.606 7.904 C 44.019 6.398 43.237 5.121 41.964 3.846 C 40.691 2.57 39.413 1.788 37.908 1.203 C 36.451 0.637 34.785 0.248 32.349 0.139 C 29.907 0.028 29.126 0 22.906 0 C 16.686 0 15.905 0.026 13.461 0.139 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 22.891 22.987)\"/>"
    },
    "SocialMediaTikTok": {
      viewBox: "0 0 91.562 91.562",
      body: "<path d=\"M 34.147 9.624 C 33.843 9.467 33.547 9.295 33.261 9.109 C 32.428 8.558 31.664 7.909 30.985 7.176 C 29.289 5.234 28.655 3.264 28.421 1.885 L 28.431 1.885 C 28.236 0.741 28.316 0 28.329 0 L 20.6 0 L 20.6 29.886 C 20.6 30.287 20.6 30.683 20.583 31.075 C 20.583 31.124 20.578 31.169 20.575 31.222 C 20.575 31.243 20.575 31.266 20.571 31.288 C 20.571 31.294 20.571 31.299 20.571 31.305 C 20.489 32.377 20.146 33.413 19.57 34.321 C 18.994 35.23 18.204 35.983 17.269 36.514 C 16.294 37.068 15.192 37.359 14.071 37.358 C 10.47 37.358 7.552 34.421 7.552 30.795 C 7.552 27.169 10.47 24.233 14.071 24.233 C 14.753 24.232 15.43 24.339 16.078 24.55 L 16.088 16.681 C 14.12 16.427 12.121 16.583 10.217 17.14 C 8.313 17.697 6.545 18.643 5.025 19.917 C 3.693 21.075 2.573 22.456 1.716 23.998 C 1.389 24.561 0.159 26.821 0.009 30.489 C -0.084 32.572 0.541 34.729 0.839 35.62 L 0.839 35.639 C 1.027 36.164 1.753 37.956 2.937 39.466 C 3.892 40.677 5.02 41.742 6.285 42.624 L 6.285 42.606 L 6.304 42.624 C 10.045 45.167 14.194 45 14.194 45 C 14.912 44.971 17.318 45 20.049 43.705 C 23.079 42.27 24.804 40.132 24.804 40.132 C 25.906 38.854 26.783 37.398 27.396 35.826 C 28.095 33.987 28.329 31.782 28.329 30.901 L 28.329 15.046 C 28.422 15.102 29.671 15.928 29.671 15.928 C 29.671 15.928 31.47 17.081 34.277 17.832 C 36.291 18.367 39.004 18.479 39.004 18.479 L 39.004 10.807 C 38.053 10.91 36.123 10.61 34.147 9.624 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 26 23.000)\"/>"
    },
    "SocialMediaTwitter": {
      viewBox: "0 0 91.562 91.562",
      body: "<path d=\"M 46.529 4.632 C 45.017 5.283 43.428 5.737 41.8 5.981 C 42.561 5.851 43.681 4.48 44.126 3.925 C 44.804 3.088 45.32 2.132 45.648 1.107 C 45.648 1.031 45.724 0.922 45.648 0.868 C 45.61 0.847 45.567 0.836 45.523 0.836 C 45.48 0.836 45.437 0.847 45.398 0.868 C 43.631 1.825 41.75 2.557 39.8 3.044 C 39.732 3.064 39.66 3.066 39.591 3.049 C 39.522 3.032 39.459 2.996 39.408 2.946 C 39.257 2.765 39.093 2.594 38.919 2.434 C 38.124 1.721 37.221 1.137 36.245 0.704 C 34.927 0.163 33.503 -0.071 32.081 0.019 C 30.702 0.106 29.355 0.476 28.124 1.107 C 26.913 1.772 25.848 2.675 24.994 3.762 C 24.095 4.881 23.446 6.179 23.091 7.57 C 22.798 8.893 22.765 10.26 22.993 11.596 C 22.993 11.824 22.993 11.857 22.798 11.824 C 15.047 10.682 8.687 7.929 3.491 2.021 C 3.263 1.76 3.143 1.76 2.958 2.021 C 0.697 5.459 1.795 10.899 4.621 13.587 C 5.002 13.946 5.393 14.294 5.806 14.621 C 4.51 14.529 3.246 14.177 2.088 13.587 C 1.871 13.445 1.751 13.522 1.741 13.783 C 1.71 14.145 1.71 14.509 1.741 14.871 C 1.967 16.606 2.651 18.249 3.72 19.634 C 4.79 21.018 6.208 22.093 7.828 22.748 C 8.223 22.918 8.635 23.045 9.057 23.129 C 7.857 23.366 6.627 23.402 5.415 23.238 C 5.154 23.184 5.056 23.325 5.154 23.575 C 6.752 27.928 10.22 29.255 12.764 29.995 C 13.112 30.049 13.46 30.049 13.851 30.136 C 13.851 30.136 13.851 30.136 13.786 30.202 C 13.036 31.573 10.003 32.497 8.611 32.976 C 6.071 33.889 3.363 34.238 0.675 33.999 C 0.251 33.934 0.153 33.945 0.045 33.999 C -0.064 34.053 0.045 34.173 0.164 34.282 C 0.708 34.641 1.251 34.956 1.817 35.261 C 3.5 36.18 5.279 36.91 7.122 37.437 C 16.666 40.07 27.407 38.134 34.571 31.007 C 40.202 25.414 42.181 17.7 42.181 9.975 C 42.181 9.681 42.539 9.507 42.746 9.354 C 44.17 8.243 45.426 6.931 46.475 5.459 C 46.656 5.24 46.749 4.96 46.735 4.676 L 46.735 4.676 C 46.735 4.513 46.735 4.545 46.529 4.632 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 21.977 26.653)\"/>"
    },
    "SocialMediaWhatsapp": {
      viewBox: "0 0 91.562 91.562",
      body: "<path d=\"M 0 45.822 L 3.285 33.608 C 0.636 28.851 -0.206 23.299 0.914 17.972 C 2.034 12.645 5.041 7.899 9.383 4.607 C 13.725 1.314 19.111 -0.304 24.551 0.047 C 29.992 0.399 35.124 2.698 39.004 6.522 C 42.884 10.346 45.253 15.439 45.676 20.865 C 46.098 26.292 44.547 31.689 41.305 36.066 C 38.064 40.443 33.35 43.506 28.029 44.693 C 22.708 45.881 17.136 45.112 12.337 42.529 L 0 45.822 Z M 12.932 37.959 L 13.695 38.411 C 17.171 40.468 21.231 41.319 25.243 40.832 C 29.254 40.345 32.992 38.547 35.873 35.717 C 38.754 32.888 40.616 29.187 41.17 25.191 C 41.724 21.194 40.938 17.127 38.935 13.623 C 36.932 10.119 33.824 7.375 30.096 5.819 C 26.368 4.263 22.228 3.981 18.323 5.018 C 14.418 6.056 10.966 8.354 8.506 11.554 C 6.045 14.755 4.714 18.678 4.72 22.712 C 4.717 26.057 5.644 29.338 7.397 32.188 L 7.875 32.976 L 6.039 39.792 L 12.932 37.959 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 22.891 21.155)\"/><path d=\"M 19.336 13.447 C 18.889 13.087 18.365 12.834 17.805 12.706 C 17.245 12.579 16.663 12.581 16.104 12.712 C 15.263 13.06 14.72 14.377 14.177 15.035 C 14.062 15.193 13.894 15.304 13.703 15.347 C 13.513 15.39 13.313 15.361 13.142 15.268 C 10.065 14.064 7.485 11.858 5.823 9.006 C 5.681 8.828 5.614 8.602 5.636 8.376 C 5.657 8.15 5.766 7.941 5.939 7.793 C 6.545 7.194 6.99 6.452 7.232 5.637 C 7.286 4.737 7.08 3.84 6.637 3.055 C 6.296 1.953 5.645 0.972 4.762 0.227 C 4.307 0.023 3.802 -0.046 3.309 0.03 C 2.816 0.105 2.355 0.322 1.982 0.653 C 1.335 1.211 0.821 1.906 0.479 2.688 C 0.136 3.47 -0.026 4.319 0.003 5.172 C 0.005 5.651 0.066 6.128 0.184 6.592 C 0.485 7.707 0.947 8.773 1.555 9.755 C 1.994 10.507 2.474 11.236 2.991 11.937 C 4.671 14.24 6.784 16.196 9.211 17.695 C 10.429 18.457 11.731 19.076 13.09 19.541 C 14.503 20.18 16.063 20.426 17.604 20.251 C 18.482 20.119 19.314 19.772 20.026 19.243 C 20.739 18.714 21.31 18.019 21.69 17.217 C 21.913 16.733 21.981 16.192 21.884 15.668 C 21.651 14.596 20.216 13.964 19.336 13.447 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 35.004 33.555)\"/>"
    },
    "Stroke2ActivityGraph": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0 8 C -0.552 8 -1 8.448 -1 9 C -1 9.552 -0.552 10 0 10 L 0 8 Z M 3 9 L 3.949 8.684 C 3.813 8.275 3.43 8 3 8 L 3 9 Z M 6 18 L 5.051 18.316 C 5.185 18.716 5.554 18.989 5.975 19 C 6.397 19.01 6.779 18.755 6.932 18.362 L 6 18 Z M 13 0 L 13.976 -0.217 C 13.881 -0.647 13.515 -0.964 13.076 -0.997 C 12.637 -1.031 12.228 -0.773 12.068 -0.362 L 13 0 Z M 15 9 L 14.024 9.217 C 14.125 9.674 14.531 10 15 10 L 15 9 Z M 18 10 C 18.552 10 19 9.552 19 9 C 19 8.448 18.552 8 18 8 L 18 10 Z M 0 10 L 3 10 L 3 8 L 0 8 L 0 10 Z M 2.051 9.316 L 5.051 18.316 L 6.949 17.684 L 3.949 8.684 L 2.051 9.316 Z M 6.932 18.362 L 13.932 0.362 L 12.068 -0.362 L 5.068 17.638 L 6.932 18.362 Z M 12.024 0.217 L 14.024 9.217 L 15.976 8.783 L 13.976 -0.217 L 12.024 0.217 Z M 15 10 L 18 10 L 18 8 L 15 8 L 15 10 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3 3)\"/>"
    },
    "Stroke2ApiIntegrationConnection": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 5 3 C 5 4.105 4.105 5 3 5 L 3 7 C 5.209 7 7 5.209 7 3 L 5 3 Z M 3 5 C 1.895 5 1 4.105 1 3 L -1 3 C -1 5.209 0.791 7 3 7 L 3 5 Z M 1 3 C 1 1.895 1.895 1 3 1 L 3 -1 C 0.791 -1 -1 0.791 -1 3 L 1 3 Z M 3 1 C 4.105 1 5 1.895 5 3 L 7 3 C 7 0.791 5.209 -1 3 -1 L 3 1 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 9 9)\"/><path d=\"M 3 2 C 3 2.552 2.552 3 2 3 L 2 5 C 3.657 5 5 3.657 5 2 L 3 2 Z M 2 3 C 1.448 3 1 2.552 1 2 L -1 2 C -1 3.657 0.343 5 2 5 L 2 3 Z M 1 2 C 1 1.448 1.448 1 2 1 L 2 -1 C 0.343 -1 -1 0.343 -1 2 L 1 2 Z M 2 1 C 2.552 1 3 1.448 3 2 L 5 2 C 5 0.343 3.657 -1 2 -1 L 2 1 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 10 2)\"/><path d=\"M 3 2 C 3 2.552 2.552 3 2 3 L 2 5 C 3.657 5 5 3.657 5 2 L 3 2 Z M 2 3 C 1.448 3 1 2.552 1 2 L -1 2 C -1 3.657 0.343 5 2 5 L 2 3 Z M 1 2 C 1 1.448 1.448 1 2 1 L 2 -1 C 0.343 -1 -1 0.343 -1 2 L 1 2 Z M 2 1 C 2.552 1 3 1.448 3 2 L 5 2 C 5 0.343 3.657 -1 2 -1 L 2 1 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 18 10)\"/><path d=\"M 3 2 C 3 2.552 2.552 3 2 3 L 2 5 C 3.657 5 5 3.657 5 2 L 3 2 Z M 2 3 C 1.448 3 1 2.552 1 2 L -1 2 C -1 3.657 0.343 5 2 5 L 2 3 Z M 1 2 C 1 1.448 1.448 1 2 1 L 2 -1 C 0.343 -1 -1 0.343 -1 2 L 1 2 Z M 2 1 C 2.552 1 3 1.448 3 2 L 5 2 C 5 0.343 3.657 -1 2 -1 L 2 1 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 10)\"/><path d=\"M 3 2 C 3 2.552 2.552 3 2 3 L 2 5 C 3.657 5 5 3.657 5 2 L 3 2 Z M 2 3 C 1.448 3 1 2.552 1 2 L -1 2 C -1 3.657 0.343 5 2 5 L 2 3 Z M 1 2 C 1 1.448 1.448 1 2 1 L 2 -1 C 0.343 -1 -1 0.343 -1 2 L 1 2 Z M 2 1 C 2.552 1 3 1.448 3 2 L 5 2 C 5 0.343 3.657 -1 2 -1 L 2 1 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 10 18)\"/><path d=\"M 1 0 C 1 -0.552 0.552 -1 0 -1 C -0.552 -1 -1 -0.552 -1 0 L 1 0 Z M -1 3 C -1 3.552 -0.552 4 0 4 C 0.552 4 1 3.552 1 3 L -1 3 Z M -1 0 L -1 3 L 1 3 L 1 0 L -1 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 12 6)\"/><path d=\"M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 -1 Z M 3 1 C 3.552 1 4 0.552 4 0 C 4 -0.552 3.552 -1 3 -1 L 3 1 Z M 0 1 L 3 1 L 3 -1 L 0 -1 L 0 1 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 15 12)\"/><path d=\"M 1 0 C 1 -0.552 0.552 -1 0 -1 C -0.552 -1 -1 -0.552 -1 0 L 1 0 Z M -1 3 C -1 3.552 -0.552 4 0 4 C 0.552 4 1 3.552 1 3 L -1 3 Z M -1 0 L -1 3 L 1 3 L 1 0 L -1 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 12 15)\"/><path d=\"M 3 1 C 3.552 1 4 0.552 4 0 C 4 -0.552 3.552 -1 3 -1 L 3 1 Z M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 -1 Z M 3 -1 L 0 -1 L 0 1 L 3 1 L 3 -1 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 6 12)\"/>"
    },
    "Stroke2Apps": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 1 1 L 8 1 L 8 -1 L 1 -1 L 1 1 Z M 8 1 L 10 1 C 10 -0.105 9.105 -1 8 -1 L 8 1 Z M 8 1 L 8 8 L 10 8 L 10 1 L 8 1 Z M 8 8 L 8 10 C 9.105 10 10 9.105 10 8 L 8 8 Z M 8 8 L 1 8 L 1 10 L 8 10 L 8 8 Z M 1 8 L -1 8 C -1 9.105 -0.105 10 1 10 L 1 8 Z M 1 8 L 1 1 L -1 1 L -1 8 L 1 8 Z M 1 1 L 1 -1 C -0.105 -1 -1 -0.105 -1 1 L 1 1 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3 3)\"/><path d=\"M 0.5 1 L 4.5 1 L 4.5 -1 L 0.5 -1 L 0.5 1 Z M 4.5 1 C 4.224 1 4 0.776 4 0.5 L 6 0.5 C 6 -0.328 5.328 -1 4.5 -1 L 4.5 1 Z M 4 0.5 L 4 4.5 L 6 4.5 L 6 0.5 L 4 0.5 Z M 4 4.5 C 4 4.224 4.224 4 4.5 4 L 4.5 6 C 5.328 6 6 5.328 6 4.5 L 4 4.5 Z M 4.5 4 L 0.5 4 L 0.5 6 L 4.5 6 L 4.5 4 Z M 0.5 4 C 0.776 4 1 4.224 1 4.5 L -1 4.5 C -1 5.328 -0.328 6 0.5 6 L 0.5 4 Z M 1 4.5 L 1 0.5 L -1 0.5 L -1 4.5 L 1 4.5 Z M 1 0.5 C 1 0.776 0.776 1 0.5 1 L 0.5 -1 C -0.328 -1 -1 -0.328 -1 0.5 L 1 0.5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 16 16)\"/><path d=\"M 0.5 1 L 4.5 1 L 4.5 -1 L 0.5 -1 L 0.5 1 Z M 4.5 1 C 4.224 1 4 0.776 4 0.5 L 6 0.5 C 6 -0.328 5.328 -1 4.5 -1 L 4.5 1 Z M 4 0.5 L 4 4.5 L 6 4.5 L 6 0.5 L 4 0.5 Z M 4 4.5 C 4 4.224 4.224 4 4.5 4 L 4.5 6 C 5.328 6 6 5.328 6 4.5 L 4 4.5 Z M 4.5 4 L 0.5 4 L 0.5 6 L 4.5 6 L 4.5 4 Z M 0.5 4 C 0.776 4 1 4.224 1 4.5 L -1 4.5 C -1 5.328 -0.328 6 0.5 6 L 0.5 4 Z M 1 4.5 L 1 0.5 L -1 0.5 L -1 4.5 L 1 4.5 Z M 1 0.5 C 1 0.776 0.776 1 0.5 1 L 0.5 -1 C -0.328 -1 -1 -0.328 -1 0.5 L 1 0.5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 16 7)\"/><path d=\"M 0.5 1 L 4.5 1 L 4.5 -1 L 0.5 -1 L 0.5 1 Z M 4.5 1 C 4.224 1 4 0.776 4 0.5 L 6 0.5 C 6 -0.328 5.328 -1 4.5 -1 L 4.5 1 Z M 4 0.5 L 4 4.5 L 6 4.5 L 6 0.5 L 4 0.5 Z M 4 4.5 C 4 4.224 4.224 4 4.5 4 L 4.5 6 C 5.328 6 6 5.328 6 4.5 L 4 4.5 Z M 4.5 4 L 0.5 4 L 0.5 6 L 4.5 6 L 4.5 4 Z M 0.5 4 C 0.776 4 1 4.224 1 4.5 L -1 4.5 C -1 5.328 -0.328 6 0.5 6 L 0.5 4 Z M 1 4.5 L 1 0.5 L -1 0.5 L -1 4.5 L 1 4.5 Z M 1 0.5 C 1 0.776 0.776 1 0.5 1 L 0.5 -1 C -0.328 -1 -1 -0.328 -1 0.5 L 1 0.5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 7 16)\"/>"
    },
    "Stroke2BranchGitFork": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 3 2 C 3 2.552 2.552 3 2 3 L 2 5 C 3.657 5 5 3.657 5 2 L 3 2 Z M 2 3 C 1.448 3 1 2.552 1 2 L -1 2 C -1 3.657 0.343 5 2 5 L 2 3 Z M 1 2 C 1 1.448 1.448 1 2 1 L 2 -1 C 0.343 -1 -1 0.343 -1 2 L 1 2 Z M 2 1 C 2.552 1 3 1.448 3 2 L 5 2 C 5 0.343 3.657 -1 2 -1 L 2 1 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 5)\"/><path d=\"M 3 2 C 3 2.552 2.552 3 2 3 L 2 5 C 3.657 5 5 3.657 5 2 L 3 2 Z M 2 3 C 1.448 3 1 2.552 1 2 L -1 2 C -1 3.657 0.343 5 2 5 L 2 3 Z M 1 2 C 1 1.448 1.448 1 2 1 L 2 -1 C 0.343 -1 -1 0.343 -1 2 L 1 2 Z M 2 1 C 2.552 1 3 1.448 3 2 L 5 2 C 5 0.343 3.657 -1 2 -1 L 2 1 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 18 5)\"/><path d=\"M 3 2 C 3 2.552 2.552 3 2 3 L 2 5 C 3.657 5 5 3.657 5 2 L 3 2 Z M 2 3 C 1.448 3 1 2.552 1 2 L -1 2 C -1 3.657 0.343 5 2 5 L 2 3 Z M 1 2 C 1 1.448 1.448 1 2 1 L 2 -1 C 0.343 -1 -1 0.343 -1 2 L 1 2 Z M 2 1 C 2.552 1 3 1.448 3 2 L 5 2 C 5 0.343 3.657 -1 2 -1 L 2 1 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 18 15)\"/><path d=\"M 12 1 C 12.552 1 13 0.552 13 0 C 13 -0.552 12.552 -1 12 -1 L 12 1 Z M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 -1 Z M 12 -1 L 0 -1 L 0 1 L 12 1 L 12 -1 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 6 7)\"/><path d=\"M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 -1 Z M 11 11 C 11.552 11 12 10.552 12 10 C 12 9.448 11.552 9 11 9 L 11 11 Z M 0 1 C 1.105 1 2 1.895 2 3 L 4 3 C 4 0.791 2.209 -1 0 -1 L 0 1 Z M 2 3 L 2 8 L 4 8 L 4 3 L 2 3 Z M 2 8 C 2 9.657 3.343 11 5 11 L 5 9 C 4.448 9 4 8.552 4 8 L 2 8 Z M 5 11 L 11 11 L 11 9 L 5 9 L 5 11 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 7 7)\"/>"
    },
    "Stroke2CalendarAppointmentDate": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 1 2 C 1 1.448 1.448 1 2 1 L 2 -1 C 0.343 -1 -1 0.343 -1 2 L 1 2 Z M 2 1 L 16 1 L 16 -1 L 2 -1 L 2 1 Z M 16 1 C 16.552 1 17 1.448 17 2 L 19 2 C 19 0.343 17.657 -1 16 -1 L 16 1 Z M 17 2 L 17 16 L 19 16 L 19 2 L 17 2 Z M 17 16 C 17 16.552 16.552 17 16 17 L 16 19 C 17.657 19 19 17.657 19 16 L 17 16 Z M 16 17 L 2 17 L 2 19 L 16 19 L 16 17 Z M 2 17 C 1.448 17 1 16.552 1 16 L -1 16 C -1 17.657 0.343 19 2 19 L 2 17 Z M 1 16 L 1 2 L -1 2 L -1 16 L 1 16 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3 4)\"/><path d=\"M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 -1 Z M 18 1 C 18.552 1 19 0.552 19 0 C 19 -0.552 18.552 -1 18 -1 L 18 1 Z M 0 1 L 18 1 L 18 -1 L 0 -1 L 0 1 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3 10)\"/><path d=\"M 1 0 C 1 -0.552 0.552 -1 0 -1 C -0.552 -1 -1 -0.552 -1 0 L 1 0 Z M -1 4 C -1 4.552 -0.552 5 0 5 C 0.552 5 1 4.552 1 4 L -1 4 Z M -1 0 L -1 4 L 1 4 L 1 0 L -1 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 16 2)\"/><path d=\"M 1 0 C 1 -0.552 0.552 -1 0 -1 C -0.552 -1 -1 -0.552 -1 0 L 1 0 Z M -1 4 C -1 4.552 -0.552 5 0 5 C 0.552 5 1 4.552 1 4 L -1 4 Z M -1 0 L -1 4 L 1 4 L 1 0 L -1 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 8 2)\"/>"
    },
    "Stroke2Car": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 16 11 C 15.448 11 15 11.448 15 12 C 15 12.552 15.448 13 16 13 L 16 11 Z M 19.363 6.699 L 19.726 5.767 L 19.726 5.767 L 19.363 6.699 Z M 15 5 L 14.143 5.514 C 14.257 5.705 14.431 5.851 14.637 5.932 L 15 5 Z M 12 0 L 12.857 -0.514 C 12.677 -0.816 12.351 -1 12 -1 L 12 0 Z M 4 0 L 4 -1 C 3.591 -1 3.223 -0.751 3.072 -0.371 L 4 0 Z M 2 5 L 2 6 C 2.409 6 2.777 5.751 2.928 5.371 L 2 5 Z M 4 13 C 4.552 13 5 12.552 5 12 C 5 11.448 4.552 11 4 11 L 4 13 Z M 17 12 C 17 11.448 16.552 11 16 11 C 15.448 11 15 11.448 15 12 L 17 12 Z M 13 12 C 13 11.448 12.552 11 12 11 C 11.448 11 11 11.448 11 12 L 13 12 Z M 15 12 C 15 12.552 15.448 13 16 13 C 16.552 13 17 12.552 17 12 L 15 12 Z M 11 12 C 11 12.552 11.448 13 12 13 C 12.552 13 13 12.552 13 12 L 11 12 Z M 5 12 C 5 11.448 4.552 11 4 11 C 3.448 11 3 11.448 3 12 L 5 12 Z M 9 12 C 9 11.448 8.552 11 8 11 C 7.448 11 7 11.448 7 12 L 9 12 Z M 3 12 C 3 12.552 3.448 13 4 13 C 4.552 13 5 12.552 5 12 L 3 12 Z M 7 12 C 7 12.552 7.448 13 8 13 C 8.552 13 9 12.552 9 12 L 7 12 Z M 8 11 C 7.448 11 7 11.448 7 12 C 7 12.552 7.448 13 8 13 L 8 11 Z M 12 13 C 12.552 13 13 12.552 13 12 C 13 11.448 12.552 11 12 11 L 12 13 Z M 16 13 L 19 13 L 19 11 L 16 11 L 16 13 Z M 19 13 C 20.105 13 21 12.105 21 11 L 19 11 L 19 13 Z M 21 11 L 21 7.631 L 19 7.631 L 19 11 L 21 11 Z M 21 7.631 C 21 6.807 20.494 6.067 19.726 5.767 L 19 7.631 L 19 7.631 L 21 7.631 Z M 19.726 5.767 L 15.363 4.068 L 14.637 5.932 L 19 7.631 L 19.726 5.767 Z M 15.857 4.486 L 12.857 -0.514 L 11.143 0.514 L 14.143 5.514 L 15.857 4.486 Z M 12 -1 L 4 -1 L 4 1 L 12 1 L 12 -1 Z M 3.072 -0.371 L 1.072 4.629 L 2.928 5.371 L 4.928 0.371 L 3.072 -0.371 Z M 2 4 L 1 4 L 1 6 L 2 6 L 2 4 Z M 1 4 C -0.105 4 -1 4.895 -1 6 L 1 6 L 1 4 Z M -1 6 L -1 11 L 1 11 L 1 6 L -1 6 Z M -1 11 C -1 12.105 -0.105 13 1 13 L 1 11 L -1 11 Z M 1 13 L 4 13 L 4 11 L 1 11 L 1 13 Z M 15 12 C 15 12.552 14.552 13 14 13 L 14 15 C 15.657 15 17 13.657 17 12 L 15 12 Z M 14 13 C 13.448 13 13 12.552 13 12 L 11 12 C 11 13.657 12.343 15 14 15 L 14 13 Z M 17 12 C 17 10.343 15.657 9 14 9 L 14 11 C 14.552 11 15 11.448 15 12 L 17 12 Z M 14 9 C 12.343 9 11 10.343 11 12 L 13 12 C 13 11.448 13.448 11 14 11 L 14 9 Z M 3 12 C 3 13.657 4.343 15 6 15 L 6 13 C 5.448 13 5 12.552 5 12 L 3 12 Z M 6 15 C 7.657 15 9 13.657 9 12 L 7 12 C 7 12.552 6.552 13 6 13 L 6 15 Z M 5 12 C 5 11.448 5.448 11 6 11 L 6 9 C 4.343 9 3 10.343 3 12 L 5 12 Z M 6 11 C 6.552 11 7 11.448 7 12 L 9 12 C 9 10.343 7.657 9 6 9 L 6 11 Z M 8 13 L 12 13 L 12 11 L 8 11 L 8 13 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 5)\"/>"
    },
    "Stroke2CheckGoodYes": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0.707 5.293 C 0.317 4.902 -0.317 4.902 -0.707 5.293 C -1.098 5.683 -1.098 6.317 -0.707 6.707 L 0.707 5.293 Z M 6 12 L 5.293 12.707 C 5.683 13.098 6.317 13.098 6.707 12.707 L 6 12 Z M 18.707 0.707 C 19.098 0.317 19.098 -0.317 18.707 -0.707 C 18.317 -1.098 17.683 -1.098 17.293 -0.707 L 18.707 0.707 Z M -0.707 6.707 L 5.293 12.707 L 6.707 11.293 L 0.707 5.293 L -0.707 6.707 Z M 6.707 12.707 L 18.707 0.707 L 17.293 -0.707 L 5.293 11.293 L 6.707 12.707 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3 6)\"/>"
    },
    "Stroke2ChevronRightArrow": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0.707 -0.707 C 0.317 -1.098 -0.317 -1.098 -0.707 -0.707 C -1.098 -0.317 -1.098 0.317 -0.707 0.707 L 0.707 -0.707 Z M 8 8 L 8.707 8.707 C 9.098 8.317 9.098 7.683 8.707 7.293 L 8 8 Z M -0.707 15.293 C -1.098 15.683 -1.098 16.317 -0.707 16.707 C -0.317 17.098 0.317 17.098 0.707 16.707 L -0.707 15.293 Z M -0.707 0.707 L 7.293 8.707 L 8.707 7.293 L 0.707 -0.707 L -0.707 0.707 Z M 7.293 7.293 L -0.707 15.293 L 0.707 16.707 L 8.707 8.707 L 7.293 7.293 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 8 4)\"/>"
    },
    "Stroke2DesktopComputerMac": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 8 14 C 8 13.448 7.552 13 7 13 C 6.448 13 6 13.448 6 14 L 8 14 Z M 5 20 L 4.293 19.293 C 4.007 19.579 3.921 20.009 4.076 20.383 C 4.231 20.756 4.596 21 5 21 L 5 20 Z M 15 20 L 15 21 C 15.404 21 15.769 20.756 15.924 20.383 C 16.079 20.009 15.993 19.579 15.707 19.293 L 15 20 Z M 14 14 C 14 13.448 13.552 13 13 13 C 12.448 13 12 13.448 12 14 L 14 14 Z M 6 14 L 6 15.172 L 8 15.172 L 8 14 L 6 14 Z M 6 15.172 C 6 16.717 5.386 18.2 4.293 19.293 L 5.707 20.707 C 7.175 19.239 8 17.248 8 15.172 L 6 15.172 Z M 5 21 L 15 21 L 15 19 L 5 19 L 5 21 Z M 15.707 19.293 C 14.614 18.2 14 16.717 14 15.172 L 12 15.172 C 12 17.248 12.825 19.239 14.293 20.707 L 15.707 19.293 Z M 14 15.172 L 14 14 L 12 14 L 12 15.172 L 14 15.172 Z M 2 15 L 18 15 L 18 13 L 2 13 L 2 15 Z M 18 15 C 19.657 15 21 13.657 21 12 L 19 12 C 19 12.552 18.552 13 18 13 L 18 15 Z M 21 12 L 21 2 L 19 2 L 19 12 L 21 12 Z M 21 2 C 21 0.343 19.657 -1 18 -1 L 18 1 C 18.552 1 19 1.448 19 2 L 21 2 Z M 18 -1 L 2 -1 L 2 1 L 18 1 L 18 -1 Z M 2 -1 C 0.343 -1 -1 0.343 -1 2 L 1 2 C 1 1.448 1.448 1 2 1 L 2 -1 Z M -1 2 L -1 12 L 1 12 L 1 2 L -1 2 Z M -1 12 C -1 13.657 0.343 15 2 15 L 2 13 C 1.448 13 1 12.552 1 12 L -1 12 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 2)\"/>"
    },
    "Stroke2UserGroupAccounts": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 7 4 C 7 5.657 5.657 7 4 7 L 4 9 C 6.761 9 9 6.761 9 4 L 7 4 Z M 4 7 C 2.343 7 1 5.657 1 4 L -1 4 C -1 6.761 1.239 9 4 9 L 4 7 Z M 1 4 C 1 2.343 2.343 1 4 1 L 4 -1 C 1.239 -1 -1 1.239 -1 4 L 1 4 Z M 4 1 C 5.657 1 7 2.343 7 4 L 9 4 C 9 1.239 6.761 -1 4 -1 L 4 1 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 5 3)\"/><path d=\"M -1 6 C -1 6.552 -0.552 7 0 7 C 0.552 7 1 6.552 1 6 L -1 6 Z M 13 6 C 13 6.552 13.448 7 14 7 C 14.552 7 15 6.552 15 6 L 13 6 Z M 1 6 L 1 2 L -1 2 L -1 6 L 1 6 Z M 1 2 C 1 1.448 1.448 1 2 1 L 2 -1 C 0.343 -1 -1 0.343 -1 2 L 1 2 Z M 2 1 L 12 1 L 12 -1 L 2 -1 L 2 1 Z M 12 1 C 12.552 1 13 1.448 13 2 L 15 2 C 15 0.343 13.657 -1 12 -1 L 12 1 Z M 13 2 L 13 6 L 15 6 L 15 2 L 13 2 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 15)\"/><path d=\"M 0.248 -0.969 C -0.287 -1.106 -0.832 -0.783 -0.969 -0.248 C -1.106 0.287 -0.783 0.832 -0.248 0.969 L 0.248 -0.969 Z M -0.248 6.781 C -0.783 6.918 -1.106 7.463 -0.969 7.998 C -0.832 8.533 -0.287 8.856 0.248 8.719 L -0.248 6.781 Z M -0.248 0.969 C 0.397 1.134 0.969 1.509 1.378 2.035 L 2.958 0.809 C 2.277 -0.068 1.324 -0.693 0.248 -0.969 L -0.248 0.969 Z M 1.378 2.035 C 1.786 2.562 2.008 3.209 2.008 3.875 L 4.008 3.875 C 4.008 2.765 3.638 1.686 2.958 0.809 L 1.378 2.035 Z M 2.008 3.875 C 2.008 4.541 1.786 5.188 1.378 5.715 L 2.958 6.941 C 3.638 6.064 4.008 4.985 4.008 3.875 L 2.008 3.875 Z M 1.378 5.715 C 0.969 6.241 0.397 6.616 -0.248 6.781 L 0.248 8.719 C 1.324 8.443 2.277 7.818 2.958 6.941 L 1.378 5.715 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 16 3)\"/><path d=\"M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 -1 Z M 2 6 C 2 6.552 2.448 7 3 7 C 3.552 7 4 6.552 4 6 L 2 6 Z M 0 1 L 1 1 L 1 -1 L 0 -1 L 0 1 Z M 1 1 C 1.552 1 2 1.448 2 2 L 4 2 C 4 0.343 2.657 -1 1 -1 L 1 1 Z M 2 2 L 2 6 L 4 6 L 4 2 L 2 2 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 19 15)\"/>"
    },
    "Stroke2Wallet": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 17 5.714 C 17 6.267 17.448 6.714 18 6.714 C 18.552 6.714 19 6.267 19 5.714 L 17 5.714 Z M 19 10.286 C 19 9.733 18.552 9.286 18 9.286 C 17.448 9.286 17 9.733 17 10.286 L 19 10.286 Z M 20 5.714 L 21 5.714 C 21 5.162 20.552 4.714 20 4.714 L 20 5.714 Z M 20 10.286 L 20 11.286 C 20.552 11.286 21 10.838 21 10.286 L 20 10.286 Z M 19 5.714 L 19 2.286 L 17 2.286 L 17 5.714 L 19 5.714 Z M 19 2.286 C 19 0.601 17.778 -1 16 -1 L 16 1 C 16.431 1 17 1.446 17 2.286 L 19 2.286 Z M 16 -1 L 2 -1 L 2 1 L 16 1 L 16 -1 Z M 2 -1 C 0.222 -1 -1 0.601 -1 2.286 L 1 2.286 C 1 1.446 1.569 1 2 1 L 2 -1 Z M -1 2.286 L -1 13.714 L 1 13.714 L 1 2.286 L -1 2.286 Z M -1 13.714 C -1 15.399 0.222 17 2 17 L 2 15 C 1.569 15 1 14.554 1 13.714 L -1 13.714 Z M 2 17 L 16 17 L 16 15 L 2 15 L 2 17 Z M 16 17 C 17.778 17 19 15.399 19 13.714 L 17 13.714 C 17 14.554 16.431 15 16 15 L 16 17 Z M 19 13.714 L 19 10.286 L 17 10.286 L 17 13.714 L 19 13.714 Z M 20 4.714 L 14 4.714 L 14 6.714 L 20 6.714 L 20 4.714 Z M 14 4.714 C 12.222 4.714 11 6.315 11 8 L 13 8 C 13 7.16 13.569 6.714 14 6.714 L 14 4.714 Z M 11 8 C 11 9.685 12.222 11.286 14 11.286 L 14 9.286 C 13.569 9.286 13 8.84 13 8 L 11 8 Z M 14 11.286 L 20 11.286 L 20 9.286 L 14 9.286 L 14 11.286 Z M 21 10.286 L 21 5.714 L 19 5.714 L 19 10.286 L 21 10.286 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 4)\"/>"
    }
  };
} catch {}
Object.assign(__ds_scope, { __ds_default_components_icon_icon_data_dzztcy });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icon/icon-data.js", error: String((e && e.message) || e) }); }

__ds_scope.__ds_default_components_icon_icon_data_dzztcy$pz0sl2 = __ds_scope.__ds_default_components_icon_icon_data_dzztcy;

// components/icon/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Icon({
  name,
  size,
  ...rest
}) {
  const d = __ds_scope.__ds_default_components_icon_icon_data_dzztcy$pz0sl2[name];
  if (!d) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: d.viewBox,
    fill: "none"
    // body strings are emitter-controlled <path> markup — geometry,
    // numeric fills and transforms only; no .fig-authored text reaches them.
    ,
    dangerouslySetInnerHTML: {
      __html: d.body
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon, __ds_default_components_icon_Icon_e7wouz: Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icon/Icon.jsx", error: String((e && e.message) || e) }); }

// components/showcase/SwatchTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The palette square as it exists in the file: a flat 180px tile, no radius,
   no label (Posts page, nodes 39:149-39:155). */
function SwatchTile({
  color,
  size = 180,
  label,
  hex,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'grid',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      background: color
    }
  }), label || hex ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--type-label)',
      fontWeight: 500,
      lineHeight: 1.3,
      color: 'var(--text-secondary)'
    }
  }, label ? /*#__PURE__*/React.createElement("div", null, label) : null, hex ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)'
    }
  }, hex) : null) : null);
}
Object.assign(__ds_scope, { SwatchTile, __ds_default_components_showcase_SwatchTile_1hykn1a: SwatchTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/showcase/SwatchTile.jsx", error: String((e && e.message) || e) }); }

__ds_scope.__ds_default_components_icon_icon_data_dzztcy$dhlgxg = __ds_scope.__ds_default_components_icon_icon_data_dzztcy;

// components/social/SocialMediaFacebook.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* "Social Media / Facebook" — a registered component in CpanoWebDev.fig.
   Solid single-colour mark; paints with currentColor. */
function SocialMediaFacebook({
  size = 28,
  color = 'currentColor',
  style,
  ...rest
}) {
  const d = __ds_scope.__ds_default_components_icon_icon_data_dzztcy$dhlgxg['SocialMediaFacebook'];
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: d.viewBox,
    fill: "none",
    role: "img",
    "aria-label": "Facebook",
    style: {
      display: 'block',
      color,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: d.body
    }
  }, rest));
}
Object.assign(__ds_scope, { SocialMediaFacebook, __ds_default_components_social_SocialMediaFacebook_baokux: SocialMediaFacebook });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/SocialMediaFacebook.jsx", error: String((e && e.message) || e) }); }

__ds_scope.__ds_default_components_icon_icon_data_dzztcy$1y25ly8 = __ds_scope.__ds_default_components_icon_icon_data_dzztcy;

// components/social/SocialMediaInstagram.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* "Social Media / Instagram" — a registered component in CpanoWebDev.fig.
   Solid single-colour mark; paints with currentColor. */
function SocialMediaInstagram({
  size = 28,
  color = 'currentColor',
  style,
  ...rest
}) {
  const d = __ds_scope.__ds_default_components_icon_icon_data_dzztcy$1y25ly8['SocialMediaInstagram'];
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: d.viewBox,
    fill: "none",
    role: "img",
    "aria-label": "Instagram",
    style: {
      display: 'block',
      color,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: d.body
    }
  }, rest));
}
Object.assign(__ds_scope, { SocialMediaInstagram, __ds_default_components_social_SocialMediaInstagram_13ni7et: SocialMediaInstagram });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/SocialMediaInstagram.jsx", error: String((e && e.message) || e) }); }

__ds_scope.__ds_default_components_icon_icon_data_dzztcy$l7ktyo = __ds_scope.__ds_default_components_icon_icon_data_dzztcy;

// components/social/SocialMediaTikTok.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* "Social Media / Tik Tok" — a registered component in CpanoWebDev.fig.
   Solid single-colour mark; paints with currentColor. */
function SocialMediaTikTok({
  size = 28,
  color = 'currentColor',
  style,
  ...rest
}) {
  const d = __ds_scope.__ds_default_components_icon_icon_data_dzztcy$l7ktyo['SocialMediaTikTok'];
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: d.viewBox,
    fill: "none",
    role: "img",
    "aria-label": "Tik Tok",
    style: {
      display: 'block',
      color,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: d.body
    }
  }, rest));
}
Object.assign(__ds_scope, { SocialMediaTikTok, __ds_default_components_social_SocialMediaTikTok_4v26hh: SocialMediaTikTok });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/SocialMediaTikTok.jsx", error: String((e && e.message) || e) }); }

__ds_scope.__ds_default_components_icon_icon_data_dzztcy$1kgijjh = __ds_scope.__ds_default_components_icon_icon_data_dzztcy;

// components/social/SocialMediaTwitter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* "Social Media / Twitter" — a registered component in CpanoWebDev.fig.
   Solid single-colour mark; paints with currentColor. */
function SocialMediaTwitter({
  size = 28,
  color = 'currentColor',
  style,
  ...rest
}) {
  const d = __ds_scope.__ds_default_components_icon_icon_data_dzztcy$1kgijjh['SocialMediaTwitter'];
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: d.viewBox,
    fill: "none",
    role: "img",
    "aria-label": "Twitter",
    style: {
      display: 'block',
      color,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: d.body
    }
  }, rest));
}
Object.assign(__ds_scope, { SocialMediaTwitter, __ds_default_components_social_SocialMediaTwitter_rg92aa: SocialMediaTwitter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/SocialMediaTwitter.jsx", error: String((e && e.message) || e) }); }

__ds_scope.__ds_default_components_icon_icon_data_dzztcy$1qbvjsy = __ds_scope.__ds_default_components_icon_icon_data_dzztcy;

// components/social/SocialMediaWhatsapp.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* "Social Media / Whatsapp" — a registered component in CpanoWebDev.fig.
   Solid single-colour mark; paints with currentColor. */
function SocialMediaWhatsapp({
  size = 28,
  color = 'currentColor',
  style,
  ...rest
}) {
  const d = __ds_scope.__ds_default_components_icon_icon_data_dzztcy$1qbvjsy['SocialMediaWhatsapp'];
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: d.viewBox,
    fill: "none",
    role: "img",
    "aria-label": "Whatsapp",
    style: {
      display: 'block',
      color,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: d.body
    }
  }, rest));
}
Object.assign(__ds_scope, { SocialMediaWhatsapp, __ds_default_components_social_SocialMediaWhatsapp_1uovk13: SocialMediaWhatsapp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/SocialMediaWhatsapp.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/GlassPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The frosted plate that sits over full-bleed imagery on every ProPreview
   card: rgba(255,255,255,0.1) + backdrop-filter blur(10px). Verbatim from
   CpanoWebDev.fig, page Projects (e.g. node 13:229). */
function GlassPanel({
  blur = 10,
  tint = 'var(--surface-glass)',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: tint,
      backdropFilter: `blur(${blur}px)`,
      WebkitBackdropFilter: `blur(${blur}px)`,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { GlassPanel, __ds_default_components_surfaces_GlassPanel_1twgnyn: GlassPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/GlassPanel.jsx", error: String((e && e.message) || e) }); }

// components/showcase/ProPreview.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The 600x400 project card from the Projects page: a blown-up, rotated crop of
   the work as background, one frosted plate over it, the artwork placed on top,
   and the CP mark set 50%-opaque white in a bottom corner. Node 13:229. */
function ProPreview({
  width = 600,
  backdrop,
  children,
  markCorner = 'right',
  style,
  ...rest
}) {
  const s = width / 600;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width,
      height: 400 * s,
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--cp-white)',
      ...style
    }
  }, rest), backdrop ? /*#__PURE__*/React.createElement("img", {
    src: backdrop,
    alt: "",
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: '162%',
      height: '162%',
      objectFit: 'cover',
      transform: 'translate(-50%, -50%) rotate(180deg)'
    }
  }) : null, /*#__PURE__*/React.createElement(__ds_scope.GlassPanel, {
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center'
    }
  }, children), /*#__PURE__*/React.createElement(__ds_scope.LogoMark, {
    size: 40 * s,
    color: "rgba(255,255,255,0.5)",
    style: {
      position: 'absolute',
      bottom: 20 * s,
      [markCorner === 'right' ? 'right' : 'left']: 20 * s
    }
  }));
}
Object.assign(__ds_scope, { ProPreview, __ds_default_components_showcase_ProPreview_1bhwiu1: ProPreview });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/showcase/ProPreview.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/GlowOrb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Soft radial glow disc — the only "lighting" device in the file. Sizes and
   stop positions are transcribed from the Posts page (nodes 115:277, 115:1595). */
const GLOWS = {
  mint: 'var(--glow-mint)',
  blue: 'var(--glow-blue)',
  aqua: 'var(--glow-aqua)',
  grey: 'var(--glow-grey)'
};
function GlowOrb({
  size = 912,
  tone = 'mint',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-full)',
      background: GLOWS[tone] || GLOWS.mint,
      pointerEvents: 'none',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { GlowOrb, __ds_default_components_surfaces_GlowOrb_1o92zlt: GlowOrb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/GlowOrb.jsx", error: String((e && e.message) || e) }); }

// components/showcase/PostCanvas.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 1080x1080 social canvas as built on the Posts page: flat ground, one or two
   glow orbs bleeding off opposite corners, content inside a 92px safe margin,
   CP mark bottom-right. Nodes 115:277 / 115:301 / 115:1595. */
function PostCanvas({
  size = 1080,
  ground = 'var(--cp-white)',
  orbs = [],
  mark = 'var(--cp-navy-mid)',
  padded = true,
  children,
  style,
  ...rest
}) {
  const s = size / 1080;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      position: 'relative',
      overflow: 'hidden',
      background: ground,
      ...style
    }
  }, rest), orbs.map((o, i) => /*#__PURE__*/React.createElement(__ds_scope.GlowOrb, {
    key: i,
    size: (o.size || 912) * s,
    tone: o.tone,
    style: {
      position: 'absolute',
      left: (o.x ?? 0) * s,
      top: (o.y ?? 0) * s
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: padded ? `${71 * s}px ${92 * s}px` : 0,
      display: 'grid'
    }
  }, children), /*#__PURE__*/React.createElement(__ds_scope.LogoMark, {
    size: 71 * s,
    color: mark,
    style: {
      position: 'absolute',
      right: 93 * s,
      bottom: 72 * s
    }
  }));
}
Object.assign(__ds_scope, { PostCanvas, __ds_default_components_showcase_PostCanvas_rqyvxk: PostCanvas });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/showcase/PostCanvas.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/PatternField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Repeating CP-monogram field (PATRONES page, Artboard 18BIG family).
   The bitmap is the real 4096px tile exported from the file. */
const TILES = {
  navy: 'assets/patterns/pattern-cp-xl.png',
  blue: 'assets/patterns/pattern-mint.png',
  mint: 'assets/patterns/pattern-alt.png'
};
function PatternField({
  tone = 'navy',
  scale = 900,
  assetBase = '',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      backgroundImage: `url("${assetBase}${TILES[tone] || TILES.navy}")`,
      backgroundSize: `${scale}px auto`,
      backgroundRepeat: 'repeat',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { PatternField, __ds_default_components_surfaces_PatternField_10vqvlz: PatternField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/PatternField.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ScreenshotCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* How work is presented in the file: a 5px-radius crop of a screenshot on a
   very soft shadow (0 4px 60px rgba(28,37,65,0.05)). No border, no caption.
   From the Posts page mask groups (nodes 115:325, 115:1595). */
function ScreenshotCard({
  src,
  alt = '',
  width = '100%',
  height = 'auto',
  ratio,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width,
      height: ratio ? undefined : height,
      aspectRatio: ratio,
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      background: 'var(--cp-navy)',
      boxShadow: 'var(--shadow-card)',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : null);
}
Object.assign(__ds_scope, { ScreenshotCard, __ds_default_components_surfaces_ScreenshotCard_19nx8sd: ScreenshotCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ScreenshotCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-sheets/sheets.jsx
try { (() => {
const {
  LogoLockup,
  LogoMark,
  SwatchTile,
  PatternField,
  Icon
} = window.CarlosPanoDesignSystem_cbd0c9;
const PALETTE = [['Black', '#000000', 'var(--cp-black)'], ['Navy', '#0B132B', 'var(--cp-navy)'], ['Navy Mid', '#1C2541', 'var(--cp-navy-mid)'], ['Blue', '#5D79FF', 'var(--cp-blue)'], ['Teal', '#00C1A2', 'var(--cp-teal)'], ['Mint', '#53F3D7', 'var(--cp-mint)'], ['Aqua', '#00FBCA', 'var(--cp-aqua)']];

/* "LOGO CP-01 … 24": one 1443 x 1080 sheet per colourway, mark centred. */
function LockupSheet({
  scale = 0.62
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 2,
      background: 'var(--cp-grey-200)'
    }
  }, [['var(--cp-white)', 'var(--cp-navy)'], ['var(--cp-white)', 'var(--cp-blue)'], ['var(--cp-white)', 'var(--cp-teal)'], ['var(--cp-navy)', 'var(--cp-white)'], ['var(--cp-navy-mid)', 'var(--cp-mint)'], ['var(--cp-mint)', 'var(--cp-white)']].map(([bg, fg], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: bg,
      aspectRatio: '1443 / 1080',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(LogoLockup, {
    width: 230 * scale,
    color: fg
  }))));
}

/* "ícono CP-01 … 32": mark solid, and knocked out of a solid tile. */
function IconSheet() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2
    }
  }, PALETTE.map(([n, hex, c]) => /*#__PURE__*/React.createElement(LogoMark, {
    key: n,
    size: 104,
    boxed: true,
    boxColor: c,
    color: c === 'var(--cp-mint)' || c === 'var(--cp-aqua)' ? 'var(--cp-navy)' : 'var(--cp-white)'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      background: 'var(--cp-white)'
    }
  }, PALETTE.map(([n, hex, c]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      width: 104,
      height: 104,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(LogoMark, {
    size: 56,
    color: c
  })))));
}
function PaletteSheet() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, PALETTE.map(([n, hex, c]) => /*#__PURE__*/React.createElement(SwatchTile, {
    key: n,
    color: c,
    size: 124,
    label: n,
    hex: hex,
    style: {
      gap: 12
    }
  })));
}
function PatternSheet() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 2
    }
  }, ['navy', 'blue', 'mint'].map(t => /*#__PURE__*/React.createElement(PatternField, {
    key: t,
    tone: t,
    scale: 340,
    assetBase: "../../",
    style: {
      aspectRatio: '16 / 10'
    }
  })));
}
function IconGlyphSheet() {
  const stroke = ['Stroke2ActivityGraph', 'Stroke2ApiIntegrationConnection', 'Stroke2Apps', 'Stroke2BranchGitFork', 'Stroke2CalendarAppointmentDate', 'Stroke2Car', 'Stroke2CheckGoodYes', 'Stroke2ChevronRightArrow', 'Stroke2DesktopComputerMac', 'Stroke2UserGroupAccounts', 'Stroke2Wallet'];
  const social = ['SocialMediaFacebook', 'SocialMediaInstagram', 'SocialMediaTikTok', 'SocialMediaTwitter', 'SocialMediaWhatsapp'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 26,
      color: 'var(--cp-navy)'
    }
  }, stroke.map(n => /*#__PURE__*/React.createElement(Icon, {
    key: n,
    name: n,
    size: 34
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 26,
      color: 'var(--cp-teal)'
    }
  }, social.map(n => /*#__PURE__*/React.createElement(Icon, {
    key: n,
    name: n,
    size: 34
  }))));
}
const SHEETS = [{
  id: 'lockup',
  label: 'Lockup sheets',
  render: LockupSheet
}, {
  id: 'icon',
  label: 'Monogram sheets',
  render: IconSheet
}, {
  id: 'palette',
  label: 'Palette row',
  render: PaletteSheet
}, {
  id: 'pattern',
  label: 'Patterns',
  render: PatternSheet
}, {
  id: 'glyphs',
  label: 'Icon glyphs',
  render: IconGlyphSheet
}];
Object.assign(window, {
  SHEETS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-sheets/sheets.jsx", error: String((e && e.message) || e) }); }

// ui_kits/project-showcase/preview-detail.jsx
try { (() => {
const {
  LogoMark
} = window.CarlosPanoDesignSystem_cbd0c9;

/* The file's full-bleed project frames (page Projects: "Aulax", "WTF", "Camion")
   are a single 1920x1080 screenshot, nothing else. This is that, plus a way back. */
function PreviewDetail({
  item,
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      background: 'var(--cp-navy)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: item.shot,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      all: 'unset',
      cursor: 'pointer',
      position: 'absolute',
      left: 40,
      top: 40,
      background: 'var(--surface-glass)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      color: 'var(--cp-white)',
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--type-label)',
      fontWeight: 600,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      padding: '13px 20px'
    }
  }, "Back"), /*#__PURE__*/React.createElement(LogoMark, {
    size: 40,
    color: "rgba(255,255,255,0.5)",
    style: {
      position: 'absolute',
      right: 40,
      bottom: 40
    }
  }));
}
Object.assign(window, {
  PreviewDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/project-showcase/preview-detail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/project-showcase/preview-grid.jsx
try { (() => {
const {
  ProPreview,
  MacbookFrame,
  ScreenIPhone12Pro,
  LogoLockup
} = window.CarlosPanoDesignSystem_cbd0c9;
const B = '../../';
const WORK = [{
  id: 'gainy',
  shot: B + 'assets/imagery/project-desktop.png',
  device: 'mac'
}, {
  id: 'aulax',
  shot: B + 'assets/imagery/project-aulax.png',
  device: 'mac'
}, {
  id: 'mobile',
  shot: B + 'assets/imagery/project-mobile.png',
  device: 'phone'
}, {
  id: 'web',
  shot: B + 'assets/imagery/project-web.png',
  device: 'mac'
}, {
  id: 'marble',
  shot: B + 'assets/imagery/project-liquid-marble.jpg',
  device: 'none'
}, {
  id: 'trio',
  shot: B + 'assets/imagery/project-mobile.png',
  device: 'trio'
}];
function Inner({
  item,
  s
}) {
  if (item.device === 'mac') return /*#__PURE__*/React.createElement(MacbookFrame, {
    width: 420 * s,
    src: item.shot
  });
  if (item.device === 'phone') return /*#__PURE__*/React.createElement(ScreenIPhone12Pro, {
    width: 140 * s,
    src: item.shot
  });
  if (item.device === 'trio') return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 10 * s
    }
  }, /*#__PURE__*/React.createElement(ScreenIPhone12Pro, {
    width: 104 * s,
    src: item.shot
  }), /*#__PURE__*/React.createElement(ScreenIPhone12Pro, {
    width: 116 * s,
    src: item.shot,
    style: {
      marginBottom: 18 * s
    }
  }), /*#__PURE__*/React.createElement(ScreenIPhone12Pro, {
    width: 104 * s,
    src: item.shot
  }));
  return null;
}
function PreviewGrid({
  onOpen
}) {
  const s = 0.75;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cp-white)',
      minHeight: '100%',
      padding: '60px 92px 92px'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 60
    }
  }, /*#__PURE__*/React.createElement(LogoLockup, {
    width: 132
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-label)',
      fontWeight: 600,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Project previews \xB7 600 \xD7 400")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))',
      gap: 30
    }
  }, WORK.map(item => /*#__PURE__*/React.createElement("button", {
    key: item.id,
    onClick: () => onOpen(item),
    style: {
      all: 'unset',
      cursor: 'pointer',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement(ProPreview, {
    width: 600 * s,
    backdrop: item.shot,
    markCorner: item.device === 'trio' ? 'left' : 'right'
  }, /*#__PURE__*/React.createElement(Inner, {
    item: item,
    s: s
  }))))));
}
Object.assign(window, {
  PreviewGrid,
  WORK
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/project-showcase/preview-grid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social-posts/post-formats.jsx
try { (() => {
const {
  PostCanvas,
  ScreenshotCard,
  MacbookFrame,
  PatternField,
  LogoMark,
  GlowOrb
} = window.CarlosPanoDesignSystem_cbd0c9;
const B = '../../';
const ORB = B + 'assets/patterns/pattern-cp-tile.png';

/* Each format below is one of the layouts actually drawn on the Posts page. */

function NavyOrbMac({
  size
}) {
  const s = size / 1080;
  return /*#__PURE__*/React.createElement(PostCanvas, {
    size: size,
    ground: "var(--cp-navy)",
    mark: "var(--cp-white)",
    padded: false,
    orbs: [{
      tone: 'blue',
      x: 749,
      y: 771,
      size: 882
    }]
  }, /*#__PURE__*/React.createElement("img", {
    src: ORB,
    alt: "",
    style: {
      position: 'absolute',
      left: -174 * s,
      top: 330 * s,
      width: 714 * s,
      height: 715 * s,
      transform: 'rotate(225deg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 87 * s,
      top: 275 * s
    }
  }, /*#__PURE__*/React.createElement(MacbookFrame, {
    width: 905.665 * s,
    src: B + 'assets/imagery/project-desktop.png'
  })));
}
function WhiteOrbMac({
  size
}) {
  const s = size / 1080;
  return /*#__PURE__*/React.createElement(PostCanvas, {
    size: size,
    ground: "var(--cp-white)",
    mark: "var(--cp-navy-mid)",
    padded: false
  }, /*#__PURE__*/React.createElement("img", {
    src: ORB,
    alt: "",
    style: {
      position: 'absolute',
      left: -210 * s,
      top: -52 * s,
      width: 714 * s,
      height: 715 * s
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 92 * s,
      top: 277 * s
    }
  }, /*#__PURE__*/React.createElement(MacbookFrame, {
    width: 896 * s,
    src: B + 'assets/imagery/project-desktop.png'
  })));
}
function GlowTallShot({
  size
}) {
  const s = size / 1080;
  return /*#__PURE__*/React.createElement(PostCanvas, {
    size: size,
    ground: "var(--cp-white)",
    mark: "var(--cp-navy-mid)",
    padded: false,
    orbs: [{
      tone: 'grey',
      x: 384,
      y: 741,
      size: 912
    }, {
      tone: 'mint',
      x: -567,
      y: -565,
      size: 912
    }]
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 91 * s,
      top: 71 * s,
      width: 896 * s,
      height: 1013 * s
    }
  }, /*#__PURE__*/React.createElement(ScreenshotCard, {
    src: B + 'assets/imagery/project-web.png',
    width: "100%",
    height: "100%"
  })));
}
function MintPatternShot({
  size
}) {
  const s = size / 1080;
  return /*#__PURE__*/React.createElement(PostCanvas, {
    size: size,
    ground: "var(--cp-mint)",
    mark: "var(--cp-navy)",
    padded: false
  }, /*#__PURE__*/React.createElement(PatternField, {
    tone: "mint",
    scale: 520 * s,
    assetBase: B,
    style: {
      position: 'absolute',
      left: -11 * s,
      top: -179 * s,
      width: 1102 * s,
      height: 1308 * s,
      opacity: .5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 92 * s,
      top: 194 * s,
      width: 896 * s,
      height: 886 * s
    }
  }, /*#__PURE__*/React.createElement(ScreenshotCard, {
    src: B + 'assets/imagery/project-aulax.png',
    width: "100%",
    height: "100%"
  })));
}
function TypePost({
  size
}) {
  const s = size / 1080;
  return /*#__PURE__*/React.createElement(PostCanvas, {
    size: size,
    ground: "var(--cp-navy)",
    mark: "var(--cp-mint)",
    orbs: [{
      tone: 'mint',
      x: -520,
      y: 600,
      size: 880
    }]
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 128 * s,
      lineHeight: '100%',
      color: 'var(--cp-white)'
    }
  }, "Hola Mundo"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 300,
      fontSize: 30 * s,
      lineHeight: 1.35,
      marginTop: 30 * s,
      color: 'var(--cp-mint)',
      maxWidth: 700 * s
    }
  }, "Senior software engineer. AI, product, and the code underneath.")));
}
const FORMATS = [{
  id: 'navy',
  label: 'Navy + blue orb',
  render: NavyOrbMac
}, {
  id: 'white',
  label: 'White + marble',
  render: WhiteOrbMac
}, {
  id: 'glow',
  label: 'Glow + tall shot',
  render: GlowTallShot
}, {
  id: 'mint',
  label: 'Mint + pattern',
  render: MintPatternShot
}, {
  id: 'type',
  label: 'Type only',
  render: TypePost
}];
Object.assign(window, {
  FORMATS,
  NavyOrbMac,
  WhiteOrbMac,
  GlowTallShot,
  MintPatternShot,
  TypePost
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social-posts/post-formats.jsx", error: String((e && e.message) || e) }); }

if (__ds_scope.__ds_default_components_icon_icon_data_dzztcy$pz0sl2 === undefined) __ds_scope.__ds_default_components_icon_icon_data_dzztcy$pz0sl2 = __ds_scope.__ds_default_components_icon_icon_data_dzztcy;
if (__ds_scope.__ds_default_components_icon_icon_data_dzztcy$dhlgxg === undefined) __ds_scope.__ds_default_components_icon_icon_data_dzztcy$dhlgxg = __ds_scope.__ds_default_components_icon_icon_data_dzztcy;
if (__ds_scope.__ds_default_components_icon_icon_data_dzztcy$1y25ly8 === undefined) __ds_scope.__ds_default_components_icon_icon_data_dzztcy$1y25ly8 = __ds_scope.__ds_default_components_icon_icon_data_dzztcy;
if (__ds_scope.__ds_default_components_icon_icon_data_dzztcy$l7ktyo === undefined) __ds_scope.__ds_default_components_icon_icon_data_dzztcy$l7ktyo = __ds_scope.__ds_default_components_icon_icon_data_dzztcy;
if (__ds_scope.__ds_default_components_icon_icon_data_dzztcy$1kgijjh === undefined) __ds_scope.__ds_default_components_icon_icon_data_dzztcy$1kgijjh = __ds_scope.__ds_default_components_icon_icon_data_dzztcy;
if (__ds_scope.__ds_default_components_icon_icon_data_dzztcy$1qbvjsy === undefined) __ds_scope.__ds_default_components_icon_icon_data_dzztcy$1qbvjsy = __ds_scope.__ds_default_components_icon_icon_data_dzztcy;

__ds_ns.LogoLockup = __ds_scope.LogoLockup;

__ds_ns.LogoMark = __ds_scope.LogoMark;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.MacbookFrame = __ds_scope.MacbookFrame;

__ds_ns.ScreenIPhone12Pro = __ds_scope.ScreenIPhone12Pro;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.PostCanvas = __ds_scope.PostCanvas;

__ds_ns.ProPreview = __ds_scope.ProPreview;

__ds_ns.SwatchTile = __ds_scope.SwatchTile;

__ds_ns.SocialMediaFacebook = __ds_scope.SocialMediaFacebook;

__ds_ns.SocialMediaInstagram = __ds_scope.SocialMediaInstagram;

__ds_ns.SocialMediaTikTok = __ds_scope.SocialMediaTikTok;

__ds_ns.SocialMediaTwitter = __ds_scope.SocialMediaTwitter;

__ds_ns.SocialMediaWhatsapp = __ds_scope.SocialMediaWhatsapp;

__ds_ns.GlassPanel = __ds_scope.GlassPanel;

__ds_ns.GlowOrb = __ds_scope.GlowOrb;

__ds_ns.PatternField = __ds_scope.PatternField;

__ds_ns.ScreenshotCard = __ds_scope.ScreenshotCard;

})();
