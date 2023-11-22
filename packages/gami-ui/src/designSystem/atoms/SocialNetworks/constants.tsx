export const options = {
  type: [] as const,
}

export const appTypes = [
  'whatsapp' as const,
  'instagram' as const,
  'tiktok' as const,
  'facebook' as const,
  'messenger' as const,
]

export type TDimensions = {
  width: string
  height: string
}

export type TApps = typeof appTypes[number]
export interface ICreateShareButton {
  app: TApps
  link: string
  size?: string
  color: string
}
