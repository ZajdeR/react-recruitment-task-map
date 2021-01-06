export const decorateLocation = (location) => {
  const { city, country_name, continent_name, region_name } = location.data;

  return `${city}, ${region_name}, ${country_name}, ${continent_name}`;
};
