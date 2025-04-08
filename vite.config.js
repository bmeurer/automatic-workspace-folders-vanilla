import {defineConfig} from 'vite';
import devtoolsJson from 'vite-plugin-devtools-json';

export default defineConfig({
  plugins: [
    devtoolsJson(),
    // ...
  ]
});
