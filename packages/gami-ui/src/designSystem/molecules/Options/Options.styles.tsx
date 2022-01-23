import styled from '@emotion/styled'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'
import { mixinFontWeight } from 'styles/mixins/fonts'
import { mixinScroll } from 'styles/mixins/scroll'
import { sizes, spacing, defaultTheme } from 'styles/tokens'

export const Options = styled.div`
  width: ${sizes.width.full};
`

export const QuestionCode = styled.div<{ theme?: ICustomTheme }>`
  box-sizing: border-box;
  background-color: ${defaultTheme.light.neutral[800]};
  overflow: auto;

  padding: ${spacing.padding.md};

  width: ${sizes.width.full};
  height: 550px;

  ${mixinScroll('light')}

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
    white-space: break-spaces;
  }

  blockquote,
  p,
  pre {
    margin-top: 12px;
  }

  b,
  strong {
    ${({ theme }) => mixinFontWeight(theme, 'bold')}
  }
`

export const Code = styled.div`
  height: ${sizes.height.full};
`

const CodeBlockLayout = styled.div`
  width: ${sizes.width.full};
  padding: ${spacing.padding.md};

  color: ${defaultTheme.light.neutral[200]};
  background-color: ${defaultTheme.light.neutral[700]};

  border-top-left-radius: 0.8em;
  border-top-right-radius: 0.8em;
`

export const CodeHeader = styled(CodeBlockLayout)``

export const CodeFooter = styled(CodeBlockLayout)``
