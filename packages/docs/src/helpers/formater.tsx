export const exampleComponentCodeBlock = (
  codeExample: string,
  hasComment = true
) => `
${hasComment ? "//Component Variants" : ""} 
${codeExample}
`
