import styled from '@emotion/styled'
import Select from 'react-select'
import { defaultTheme } from 'styles/tokens'

export const ReactSelect = styled(Select)`
  max-width: 300px;

  .Select__control {
    padding: 5px;
    border-radius: 0.7em;
    border: none;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
  }

  .Select__multi-value {
    border-radius: 15px;
  }

  .Select__multi-value__remove:hover {
    background-color: ${defaultTheme.light.primary.selago};
    color: ${defaultTheme.light.neutral[800]};
  }

  .Select__placeholder {
    color: ${defaultTheme.light.neutral[400]};
  }
`
