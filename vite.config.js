import legacy from '@vitejs/plugin-legacy'
import ViteRestart from 'vite-plugin-restart';
import tailwindConfig from './tailwind.config';
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default ({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    manifest: true,
    outDir: 'wp-content/themes/themedir/dist',
    rollupOptions: {
        input: {
            app: 'src/js/app.ts', 
        },
        output: {
            entryFileNames: `assets/[name].js`,
            chunkFileNames: `assets/[name].js`,
            assetFileNames: `assets/[name].[ext]`
        }
    },
  },
  css: {
    postcss: {
        plugins: [
          require('tailwindcss')({
          config: 'tailwind.config.js'
        })
      ]
    }
  },
  server:{
    port: 3000,
    https: true 
  },
  plugins: [
    mkcert(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    ViteRestart({
      reload: [
          'wp-content/themes/themedir/**/*',
          'wp-content/themes/themedir/*',
      ],
    }),
  ],
});

console.log('themedir config loaded');  