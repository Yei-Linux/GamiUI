export const mapEnum = (enumerable: any): any[] => {
  const enumMembers: any[] = Object.keys(enumerable).map(
    (key) => enumerable[key]
  )
  return enumMembers
}
