/* global process, module */

import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser';

process.env.BUILD = process.env.BUILD || 'production';

export default {
  input: 'src/index.js',
  output: {
    name: 'OpeningHoursWidget',
    file: 'dist/opening-hours-widget' + (process.env.BUILD === 'production' ? '.min' : '') +  '.js',
    format: 'umd'
  },
  plugins: [
    resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
      babelHelpers: 'runtime'
    }),
    process.env.BUILD === 'production' && terser()
  ]
};

