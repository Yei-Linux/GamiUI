export const INITIAL__CODE__BLOCK = `
import { CodeBlock, nord} from 'react-code-blocks';

const MyCodeComponent = () => (
  <CodeBlock
    text="HELLO WORLD"
    theme={nord}
    language="text"
  />
)`

export const options = {
  type: [] as const,
}
