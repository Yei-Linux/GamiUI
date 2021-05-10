export const mapEnum = (enumerable: any): any[] => {
  let enumMembers: any[] = Object.keys(enumerable).map(
    (key) => enumerable[key]
  );
  return enumMembers;
};

