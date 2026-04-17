import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://travel.mariatta.ca',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
});