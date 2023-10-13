/* prettier-ignore */ import { css, createGlobalStyle }  from "styled-components";
/* prettier-ignore */ import { JsonToVars }              from "@/styled/abstracts/functions";

export const Initial = createGlobalStyle`${css`
  :root {
    ${({ theme }) => JsonToVars(theme)};
    font-size: var(--global--font-size-reduce);
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  // Set 100% line-height
  body {
    font-size: 100%;
    line-height: 1;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-decoration-skip: objects;
    text-rendering: optimizelegibility;
    text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }

  a,
  button {
    cursor: pointer;
    outline: none;
  }

  figure,
  picture {
    line-height: 0;
    display: inline-block;
    margin: 0;

    img {
      width: 100%;
    }
  }

  img {
    vertical-align: top;
    user-select: none;
    // Remove border when inside "a" element in IE 8/9/10.
    border: none;
  }

  fieldset {
    @include kill-space;
    border: 0;
  }

  ul,
  li {
    list-style: none;
  }

  video {
    @include wh(100%);
    outline: none;
  }

  // HTML5 display definitions
  // ==========================================================================

  // Correct "block" display not defined in IE 8/9.
  summary {
    display: block;
  }

  // 1. Correct "inline-block" display not defined in IE 8/9.
  // 2. Normalize vertical alignment of "progress" in Chrome, Firefox, and Opera.
  audio,
  canvas,
  progress,
  video {
    vertical-align: baseline;
    display: inline-block;
  }

  // Prevent modern browsers from displaying "audio" without controls.
  // Remove excess height in iOS 5 devices.
  audio {
    &:not([controls]) {
      display: none;
      height: 0;
    }
  }

  // Address "[hidden]" styling not present in IE 8/9.
  // Hide the "template" element in IE, Safari, and Firefox < 22.
  [hidden],
  template {
    display: none;
  }

  // Base
  // ==========================================================================

  // 1. Set default font family to sans-serif.
  // 2. Prevent iOS text size adjust after orientation change, without disabling user zoom.
  // 3. Remove highlite on mobile devices.
  // 4. Set default cursor.
  html {
    // font-family: sans-serif; // 1
    overflow-x: hidden;
    box-sizing: border-box;
    cursor: default; // 4
    scroll-behavior: smooth;
    text-size-adjust: 100%; // 2
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); // 3
    -webkit-focus-ring-color: rgba(255, 255, 255, 0); // 3
  }

  // Links
  // ==========================================================================

  // Remove the gray background color from active links in IE 10.
  a {
    color: currentcolor;
    text-decoration: none;
    background: transparent;
  }

  // Improve readability when focused and also mouse hovered in all browsers.
  *:focus,
  *:active,
  *:hover {
    outline: none;
  }

  // Typography
  // ==========================================================================

  // Address differences between Firefox and other browsers.
  hr {
    box-sizing: content-box;
    height: 0;
  }

  // Remove default style
  ol,
  ul {
    list-style: none;
  }

  // Improve readability of pre-formatted text in all browsers.
  pre {
    white-space: pre-wrap;
    tab-size: 4;
  }

  // Embedded content
  // ==========================================================================

  // Correct overflow displayed oddly in IE 9.
  svg {
    &:not(:root) {
      overflow: hidden;
    }
  }

  // Forms
  // ==========================================================================

  // Address Firefox 4+ setting "line-height" on "input" using "!important" in the UA stylesheet.
  button,
  input {
    line-height: normal;
  }

  // Address inconsistent "text-transform" inheritance for "button" and "select".
  // All other form control elements do not inherit "text-transform" values.
  // Correct "button" style inheritance in Chrome, Safari 5+, and IE 8+.
  // Correct "select" style inheritance in Firefox 4+ and Opera.
  button,
  select {
    text-transform: none;
  }

  // Address "overflow" set to "hidden" in IE 8/9/10.
  button {
    overflow: visible;
  }

  // 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native "audio" and "video" controls.
  // 2. Correct inability to style clickable "input" types in iOS.
  // 3. Improve usability and consistency of cursor style between image-type "input" and others.
  button,
  html input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    appearance: button; // 2
    cursor: pointer; // 3
  }

  // Re-set default cursor for disabled elements.
  button[disabled],
  html input[disabled] {
    cursor: default;
  }

  // Address box sizing set to "content-box" in IE 8/9.
  input[type="checkbox"],
  input[type="radio"] {
    box-sizing: border-box;
  }

  // Fix the cursor style for Chrome's increment/decrement buttons. For certain
  // "font-size" values of the "input", it causes the cursor style of the
  // decrement button to change from "default" to "text".
  input[type="number"] {
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      height: auto;
    }
  }

  // 1. Address "appearance" set to "searchfield" in Safari 5 and Chrome.
  // 2. Address "box-sizing" set to "border-box" in Safari 5 and Chrome (include "-moz" to future-proof).
  input[type="search"] {
    appearance: textfield;
    box-sizing: content-box;
    // Remove inner padding and search cancel button in Safari 5 and Chrome on OS X.
    &::-webkit-search-cancel-button,
    &::-webkit-search-decoration {
      appearance: none;
    }
  }

  // Remove inner padding and border in Firefox 4+.

  /* stylelint-disable-next-line no-duplicate-selectors */
  button,
  input {
    &::-moz-focus-inner {
      padding: 0;
      border: none;
    }
  }

  // 1. Remove default vertical scrollbar in IE 8/9.
  // 2. Improve readability and alignment in all browsers.
  textarea {
    vertical-align: top; // 2
    overflow: auto; // 1
  }

  // Reset unusual Firefox-on-Android default style.
  button,
  input,
  select[multiple],
  textarea {
    background-image: none;
  }

  // 1. Remove "border-radius" in iOS.
  // 2. Remove "box-shadow" in iOS.
  input,
  select,
  textarea {
    box-shadow: none; // 2
    border-radius: 0; // 1
  }

  // 1. Disable resize.
  // 2. Allow user select.
  input,
  textarea {
    resize: none; // 1
    user-select: text; // 2
  }

  // Hide placeholder on focus.
  [placeholder] {
    &:focus::placeholder {
      color: transparent;
    }
  }

  // Tables
  // ==========================================================================

  // Remove most spacing between table cells.
  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  .text-select {
    pointer-events: all;
  }

  html,
  body {
    display: flex;
    width: 100%;
    min-height: 100%;
    font-weight: 100;
  }

  #root {
    width: 100%;
    height: 1500px;
  }
`}`;
