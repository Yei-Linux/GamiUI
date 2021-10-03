import { All } from './All'
import { Backgrounds } from './Backgrounds'
import { Base } from './Base'
import { DrawkitIcons } from './DrawkitIcons'

export const IconsPack: any = {
  ...Backgrounds,
  ...DrawkitIcons,
  ...Base,
  ...All,
}

export const options = {
  names: Object.keys(IconsPack),
}
