
import path from 'path';
import { promises as fs } from 'fs';
import dotenv from "dotenv";
dotenv.config(); //

// need dotenv package in node.js files/scripts (Server-side). VITE's import.meta.env wont work here (only works for Client-side)
const isProduction = process.env.VITE_ENVIRONMENT === "production";
const host = process.env.VITE_HOST;
//const isProduction = import.meta.env.VITE_ENVIRONMENT === "production";
//const host = import.meta.env.VITE_HOST

async function generateRobotsTxt() { // doesnt return anything, just runs scripts

  // search engines wont crawl all the dynamic movie pages, except those ive defined in generate-sitemap.js (popular movies)
  const robotsTxtContent = `
  User-agent: *
  Disallow: ${isProduction ? '/movies?sort=*' : ''}
  Disallow: /mypage
  Disallow: /admin
  Allow: /

  Sitemap: ${host}/sitemap.xml
  `; // Sitemap: ${isProduction ? 'https://<verceldomain>.com/sitemap.xml' : 'http://localhost:5173/sitemap.xml'}

  const filePath = path.resolve('public', 'robots.txt');
  await fs.writeFile(filePath, robotsTxtContent, 'utf-8');

  console.log('robots.txt generated and saved to', filePath);
}

generateRobotsTxt(); // will run on build