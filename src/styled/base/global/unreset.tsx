/* prettier-ignore */ import { createGlobalStyle } from "styled-components";

export const Unreset = createGlobalStyle`
 a {
    &:visited,
    &:link {
      color: inherit;
      text-decoration: underline;
      cursor: auto;

      &:active {
        color: inherit;
      }
    }
  }

  address {
    font-style: italic;
    display: block;
  }

  aside,
  article {
    display: block;
  }

  b {
    font-weight: 700;
  }

  bdo {
    unicode-bidi: bidi-override;
  }

  blockquote {
    margin-top: 1rem;
    margin-right: 4rem;
    margin-bottom: 1rem;
    margin-left: 4rem;
  }

  html,
  body {
    display: block;
  }

  body {
    margin: 0.8rem;

    &:focus {
      outline: none;
    }
  }

  html {
    &:focus {
      outline: none;
    }
  }

  caption {
    text-align: center;
    display: table-caption;
  }

  cite {
    font-style: italic;
  }

  code {
    font-family: monospace;
  }

  col {
    display: table-column;
  }

  colgroup {
    display: table-column-group;
  }

  datalist {
    display: none;
  }

  dd {
    display: block;
    margin-left: 4rem;
  }

  del {
    text-decoration: line-through;
  }

  details {
    display: block;
  }

  dfn {
    font-style: italic;
  }

  div {
    display: block;
  }

  dl {
    display: block;
    margin-top: 1em;
    margin-right: 0;
    margin-bottom: 1em;
    margin-left: 0;
  }

  dt {
    display: block;
  }

  em {
    font-style: italic;
  }

  embed {
    &:focus {
      outline: none;
    }
  }

  fieldset {
    display: block;
    margin-right: 0.2rem;
    margin-left: 0.2rem;
    padding-top: 0.35rem;
    padding-right: 0.75rem;
    padding-bottom: 0.625rem;
    padding-left: 0.75rem;
    border: 2px groove inherit;
  }

  figcaption {
    display: block;
  }

  figure {
    display: block;
    margin-top: 1rem;
    margin-right: 4rem;
    margin-bottom: 1rem;
    margin-left: 4rem;
  }

  footer {
    display: block;
  }

  form {
    display: block;
    margin-top: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    display: block;
    margin-right: 0;
    margin-left: 0;
  }

  h1 {
    font-size: 2rem;
    margin-top: 0.67rem;
    margin-bottom: 0.67rem;
  }

  h2 {
    font-size: 1.5rem;
    margin-top: 0.83rem;
    margin-bottom: 0.83rem;
  }

  h3 {
    font-size: 1.17rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  h4 {
    margin-top: 1.33rem;
    margin-bottom: 1.33rem;
  }

  h5 {
    font-size: 0.83rem;
    margin-top: 1.67rem;
    margin-bottom: 1.67rem;
  }

  h6 {
    font-size: 0.67rem;
    margin-top: 2.33rem;
    margin-bottom: 2.33rem;
  }

  header {
    display: block;
  }

  hr {
    display: block;
    margin-top: 0.5rem;
    margin-right: auto;
    margin-bottom: 0.5rem;
    margin-left: auto;
    border-width: 1px;
    border-style: inset;
  }

  i {
    font-style: italic;
  }

  iframe {
    &:focus {
      outline: none;
    }

    [seamless] {
      display: block;
    }
  }

  img {
    display: inline-block;
  }

  ins {
    text-decoration: underline;
  }

  kbd {
    font-family: monospace;
  }

  label {
    cursor: default;
  }

  legend {
    display: block;
    padding-right: 2px;
    padding-left: 2px;
    border: none;
  }

  li {
    display: list-item;
  }

  script,
  link {
    display: none;
  }

  map {
    display: inline;
  }

  mark {
    color: #000;
    background-color: #ff0;
  }

  menu {
    display: block;
    margin-top: 1rem;
    margin-right: 0;
    margin-bottom: 1rem;
    margin-left: 0;
    padding-left: 4rem;
    list-style-type: disc;
  }

  nav {
    display: block;
  }

  object {
    &:focus {
      outline: none;
    }
  }

  ol {
    display: block;
    margin-top: 1rem;
    margin-right: 0;
    margin-bottom: 1rem;
    margin-left: 0;
    padding-left: 4rem;
    list-style-type: decimal;
  }

  output {
    display: inline;
  }

  p {
    display: block;
    margin-top: 1rem;
    margin-right: 0;
    margin-bottom: 1rem;
    margin-left: 0;
  }

  param {
    display: none;
  }

  pre {
    font-family: monospace;
    white-space: pre;
    display: block;
    margin: 1rem 0;
  }

  q {
    display: inline;

    &::before {
      content: open-quote;
    }

    q::after {
      content: close-quote;
    }
  }

  rt {
    line-height: normal;
  }

  s {
    text-decoration: line-through;
  }

  samp {
    font-family: monospace;
  }

  section {
    display: block;
  }

  small {
    font-size: smaller;
  }

  strike {
    text-decoration: line-through;
  }

  strong {
    font-weight: 700;
  }

  style {
    display: none;
  }

  sub {
    font-size: smaller;
    vertical-align: sub;
  }

  summary {
    display: block;
  }

  sup {
    font-size: smaller;
    vertical-align: super;
  }

  table {
    display: table;
    border-spacing: 2px;
    border-collapse: separate;
    border-color: #808080;
  }

  tbody {
    vertical-align: middle;
    display: table-row-group;
    border-color: inherit;
  }

  td {
    vertical-align: inherit;
    display: table-cell;
  }

  tfoot {
    vertical-align: middle;
    display: table-footer-group;
    border-color: inherit;
  }

  th {
    font-weight: bold;
    text-align: center;
    vertical-align: inherit;
    display: table-cell;
  }

  thead {
    vertical-align: middle;
    display: table-header-group;
    border-color: inherit;
  }

  title {
    display: none;
  }

  tr {
    vertical-align: inherit;
    display: table-row;
    border-color: inherit;
  }

  u {
    text-decoration: underline;
  }

  ul {
    display: block;
    margin-top: 1em;
    margin-right: 0;
    margin-bottom: 1 em;
    margin-left: 0;
    padding-left: 40px;
    list-style-type: disc;
  }

  var {
    font-style: italic;
  }
`;
