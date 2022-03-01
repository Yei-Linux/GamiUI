import { ColSpacingTypes } from 'core/domain/types'

export const options = {
  spacingType: ['none', 'sm', 'md', 'lg', 'custom'] as const,
  type: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const,
}

export const spacingValues: Record<ColSpacingTypes, string> = {
  sm: '8px',
  md: '16px',
  lg: '24px',
  none: '0px',
  custom: 'custom',
}
