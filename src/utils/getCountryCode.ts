export const getCountryCode = (
  countryName: string,
  countryCodeMap: Array<{ name: string; code: string }>
) => {
  const found = countryCodeMap.find((country) => country.name === countryName);
  return found ? found.code : undefined;
};
