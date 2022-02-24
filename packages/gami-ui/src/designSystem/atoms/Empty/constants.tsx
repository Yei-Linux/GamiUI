export const iconsEmpty: Record<string, 'empty' | 'sad'> = {
  base: 'empty',
  sad: 'sad',
}

export const options = {
  type: ['base', 'sad'] as const,
}
