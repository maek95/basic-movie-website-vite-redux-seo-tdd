import { SitemapStream, streamToPromise } from "sitemap";
import { promises as fs } from 'fs'; // async fs?
import path from 'path';
import { Readable } from "stream";
import dotenv from "dotenv"; 
dotenv.config();

async function getPopularMovieIds() { // used for dynamic movie page sitemaps

  const apiKey = process.env.VITE_APIKEY // 
  // const apiKey = import.meta.env.VITE_APIKEY;

  // same function as in apiPopularMovies.jsx ... but couldnt import during build?
  async function getTMDBPopularMovies() {
    // https://developer.themoviedb.org/reference/movie-popular-list
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
  
      const data = await response.json();
  
      return data.results;
    } catch (error) {
      console.error("Failed running fethTMDBPopularMovies():", error);
    }
  }  

  const popularMovies = await getTMDBPopularMovies(); 
  
  const popularMovieIds = popularMovies.map(movie => {
    return movie.id; // push movie id into popularMovieIds array
  })

  return popularMovieIds;
}

async function generateSitemap() {

  const host = process.env.VITE_HOST // http://localhost:5173 locally, and vercel-url on deployment 
  // const host = import.meta.env.VITE_HOST;

  const popularMovieIds = await getPopularMovieIds();
  const pages = [ // popularMovieIds for /movie/:id page, otherwise too many pages to crawl.
    {url: '/', changefreq: 'monthly', priority: 1.0 }, 
    {url: '/about', changefreq: 'monthly', priority: 0.8 },  // do not crawl mypage? {url: '/mypage', changefreq: 'monthly', priority: 0.8 }, 
    ...popularMovieIds.map(id => ({url: `/movie/${id}`, changefreq: 'weekly', priority: 0.8})) // changefreq weekly feels relevant for popular movies, i.e. tell search engines to visit weekly.
    //  { url: '/movie/*', changefreq: 'monthly', priority: 0.8 }  // also works, "wildcard", just signals search engines that there are multiple pages under /movie path. 
  ]

  const stream = new SitemapStream( { hostname: host} )  

  // Convert pages to a readable stream and pipe to the sitemap stream
  const sitemap = await streamToPromise(Readable.from(pages).pipe(stream)); 

  // write the XML to a file
  // path.resolve() takes he current working directory (/Users/yourname/project) and appends the public/sitemap.xml path to it, producing an absolute path.
  const filePath = path.resolve('public', 'sitemap.xml');
  await fs.writeFile(filePath, sitemap.toString(), 'utf-8'); // 'await': wait for 'write operation' completes before continueing code execution. NOTE HOWEVER: this is basically the end of the function so await is kinda unnecessary, but good practice!

  console.log('Sitemap generated and saved to', filePath);

}

generateSitemap(); // Will run on build, Search engines use your sitemap to discover and index the most important pages on your site more efficiently.

// npm install sitemap
// https://www.npmjs.com/package/sitemap // note that they use a Promise-based approach while we use a async/await approach. 
// Node.js script to generate a sitemap. Not a page or component. Backend not needed. Will generate a sitemap.xml that gets placed in the public folder.
// added this script to package.json to be run on npm run build:
/* 
"scripts": {
  "generate-sitemap": "node generate-sitemap.js", // sitemap will be generated before the build process starts.
  "build": "npm run generate-sitemap && vite build"
}
 */


// https://yourdomain.com/sitemap.xml

/* 
sitemap is currently only generated on build, and that's typically sufficient for many websites. However, if your site content changes frequently (e.g., new pages, blog posts, or product listings are added often), you might want to periodically update your sitemap.

see https://www.npmjs.com/package/sitemap how to create a backend that can continuously update the sitemap! I wont do that here.
*/