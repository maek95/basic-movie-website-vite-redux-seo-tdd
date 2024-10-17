const apiKey = import.meta.env.VITE_APIKEY; // VITE .env import on CLIENT-SIDE

export async function getMovieDetails(id) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    );

    const data = await response.json();

    // TODO: add check to see if data contains maybe data.title ?

    return data;
  } catch (error) {
    console.error(
      `Error fetching movie details getMovieDetails(${id}):`,
      error
    );
  }
}
