import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import Sitemap from 'vite-plugin-sitemap';

const dynamicRoutes = ['/whisky', '/vodka', '/gin', '/rum', '/tequila', '/cachaca', '/vinho', '/historia', '/glossario', '/receitas', '/tecnicas'];

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://artedocoquetel.com.br',
      dynamicRoutes: dynamicRoutes,
      robots: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    }),
  ],
  ssr: {
    noExternal: ['react-helmet-async'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}));
