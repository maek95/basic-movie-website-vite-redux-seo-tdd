
const apiKey = import.meta.env.VITE_APIKEY // VITE .env import on CLIENT-SIDE

export async function querySearchMovie(inputString) {

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        inputString
      )}&api_key=${apiKey}`
    )

    const data = await response.json();

    const slicedResults = data.results.slice(0, 10); // 20 movie-results are too many...
    return slicedResults;
  } catch (error) {
    console.error("Failed running querySearchMovie:", error);
    
  }
}