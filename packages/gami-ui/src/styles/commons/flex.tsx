import { css } from '@emotion/react'

const flexJustifyContent = css`
  .justify-start {
    justify-content: flex-start;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-around {
    justify-content: space-around;
  }
`
const flexAlignItems = css`
  .items-start {
    align-items: flex-start;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
`

const flexWrap = css`
  .wrap {
    flex-wrap: wrap;
  }
  .wrap-reverse {
    flex-wrap: wrap-reverse;
  }
  .no-wrap {
    flex-wrap: nowrap;
  }
`

export const flex = () => css`
  ${flexAlignItems}
  ${flexJustifyContent}
  ${flexWrap}
`
