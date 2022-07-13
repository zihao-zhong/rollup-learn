import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import replace from 'rollup-plugin-replace';


export default {
  input: './src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'es' // amd, cjs, es, iife, umd, system
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    eslint({
      exclude: [
        'src/css/**',
        'build/**',
      ]
    }),
    replace({
      // eslint-disable-next-line no-undef
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    uglify(),
  ]
};