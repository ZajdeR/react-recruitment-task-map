export const decorateLocation = (location) => {
  if (!location.data) {
    return null;
  }

  const { city, country_name, continent_name, region_name } = location.data;

  return `${city}, ${region_name}, ${country_name}, ${continent_name}`;
};
