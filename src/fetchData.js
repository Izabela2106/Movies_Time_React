export const fetchData = async (url) => {
  const response = await window.fetch(url);
  const newMovies = await response.json();
  return newMovies;
};
