import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { fileURLToPath, URL } from 'node:url';

const API_PROXY_TARGET = process.env.VITE_API_PROXY_TARGET ?? 'http://localhost:5000';

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';

  const plugins: PluginOption[] = [
    react(),
    VitePWA({
      // Silent, hands-free upgrades: the new worker activates as soon as it is
      // installed and the open client is reloaded on the next navigation.
      registerType: 'autoUpdate',
      injectRegister: null,
      strategies: 'generateSW',
      outDir: 'dist',
      includeAssets: ['favicon.svg', 'icons/apple-touch-icon.png', 'robots.txt', 'offline.html'],
      manifest: {
        id: '/?source=pwa',
        name: 'Conceptual OBGYN — Revision Workspace',
        short_name: 'Conceptual OBGYN',
        description:
          'Structured clinical concepts and recall modules for NEET UG and NEET PG Obstetrics & Gynecology. Offline-ready.',
        lang: 'en-IN',
        dir: 'ltr',
        start_url: '/?source=pwa',
        scope: '/',
        display: 'standalone',
        display_override: ['window-controls-overlay', 'standalone', 'minimal-ui'],
        orientation: 'any',
        theme_color: '#F8FAFC',
        background_color: '#F8FAFC',
        categories: ['education', 'medical', 'productivity'],
        icons: [
          { src: 'icons/pwa-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'icons/pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: 'icons/maskable-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
          { src: 'favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
        ],
        shortcuts: [
          {
            name: 'NEET UG Track',
            short_name: 'NEET UG',
            description: 'Reproductive physiology, embryology and NCERT-aligned core concepts.',
            url: '/track/ug',
            icons: [{ src: 'icons/pwa-192x192.png', sizes: '192x192' }],
          },
          {
            name: 'NEET PG Track',
            short_name: 'NEET PG',
            description: 'Case vignettes, labor protocols and surgical pearls.',
            url: '/track/pg',
            icons: [{ src: 'icons/pwa-192x192.png', sizes: '192x192' }],
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,webp,woff2,webmanifest}'],
        globIgnores: ['**/sw.js', '**/workbox-*.js'],
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/api\//],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        runtimeCaching: [
          {
            // High-yield revision payloads: always try the network, fall back to
            // the last good snapshot so revision cards stay usable offline.
            urlPattern: ({ url }) => url.pathname.startsWith('/api/v1/revision'),
            handler: 'NetworkFirst',
            options: {
              cacheName: 'obgyn-revision-modules-v1',
              networkTimeoutSeconds: 4,
              expiration: { maxEntries: 300, maxAgeSeconds: 60 * 60 * 24 * 30, purgeOnQuotaError: true },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            // Track metadata is cheap and highly cacheable -> instant cold render.
            urlPattern: ({ url }) => url.pathname.startsWith('/api/v1/tracks'),
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'obgyn-track-summary-v1',
              expiration: { maxEntries: 24, maxAgeSeconds: 60 * 60 * 24 * 7 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: ({ request }) => request.destination === 'font',
            handler: 'CacheFirst',
            options: {
              cacheName: 'obgyn-fonts-v1',
              expiration: { maxEntries: 24, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'obgyn-web-fonts-v1',
              expiration: { maxEntries: 24, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
      devOptions: {
        enabled: process.env.VITE_ENABLE_SW_IN_DEV === 'true',
        type: 'module',
        navigateFallback: 'index.html',
      },
    }),
  ];

  return {
    plugins,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      port: 5173,
      strictPort: false,
      host: true,
      proxy: {
        '/api': {
          target: API_PROXY_TARGET,
          changeOrigin: true,
          secure: false,
        },
      },
    },
    preview: { port: 4173, strictPort: true },
    build: {
      target: 'es2022',
      sourcemap: false,
      cssCodeSplit: true,
      reportCompressedSize: false,
      chunkSizeWarningLimit: 900,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            motion: ['framer-motion'],
            data: ['@tanstack/react-query', 'zustand', 'zod'],
          },
        },
      },
    },
    esbuild: {
      legalComments: 'none',
      ...(isDev ? {} : { drop: ['debugger'] as const }),
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'framer-motion', 'lucide-react', 'zustand', 'zod'],
    },
  };
});
