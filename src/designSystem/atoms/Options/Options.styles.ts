import styled from '@emotion/styled'
import { colorLight } from '../../../styles/theme'

export const OptionsWrapper = styled.div``

export const QuestionCodeContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  outline-offset: -1px;
  background-color: #fff;
  padding: 1rem;
  height: 550px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff8a;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colorLight.primary.oneLight};
    border-radius: 20px;
  }

  a,
  abbr,
  acronym,
  address,
  applet,
  article,
  aside,
  audio,
  b,
  big,
  blockquote,
  body,
  canvas,
  caption,
  center,
  cite,
  code,
  dd,
  del,
  details,
  dfn,
  div,
  dl,
  dt,
  em,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  hgroup,
  html,
  i,
  iframe,
  img,
  ins,
  kbd,
  label,
  legend,
  li,
  mark,
  menu,
  nav,
  object,
  ol,
  p,
  pre,
  q,
  s,
  samp,
  section,
  small,
  span,
  strike,
  strong,
  sub,
  summary,
  sup,
  table,
  tbody,
  td,
  tfoot,
  th,
  thead,
  time,
  tr,
  tt,
  u,
  ul,
  var,
  video {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
  }

  ul {
    margin-left: 3rem;
  }

  blockquote {
    background: #f0f0f4;
    padding: 10px;
    border-left: 4px solid #c0c7d0;
  }

  pre {
    padding: 20px;
    border: none;
    background-color: #e7eeef;
    color: #0e141e;
    font-size: 14px;
    line-height: 20px;
  }

  blockquote,
  p,
  pre {
    margin-top: 12px;
  }

  b,
  strong {
    font-weight: bolder;
  }
`

export const CodeContainer = styled.div`
  height: 100%;
`

export const CodeHeader = styled.div`
  width: 100%;
  padding: 1rem;
  color: ${colorLight.primary.two};
  background-color: ${colorLight.secondary.three};
`

export const CodeFooter = styled.div`
  width: 100%;
  padding: 1rem;
  color: ${colorLight.primary.two};
  background-color: ${colorLight.secondary.three};
`
