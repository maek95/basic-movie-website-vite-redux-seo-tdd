import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.APIKEY

export async function getTMDBPopularMovies() {
  // https://developer.themoviedb.org/reference/movie-popular-list
  
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);

    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error("Failed running fethTMDBPopularMovies():", error);
  }
}
