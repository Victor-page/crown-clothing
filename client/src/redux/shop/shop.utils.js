export const convertObjectToArray = (object) =>
  Object.keys(object).map((key) => {
    const objectFromKey = object[key];
    return objectFromKey;
  });
