/* global process, module */

import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'

process.env.BUILD = process.env.BUILD || 'production'

module.exports = {
  input: 'src/index.js',
  output: {
    name: 'OpeningHoursApi',
    dir: 'dist',
    file: 'opening-hours-api' + (process.env.BUILD === 'production' ? '.min' : '') +  '.js',
    format: 'umd'
  },
  plugins: [
    resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
      runtimeHelpers: true,
    }),
    process.env.BUILD === 'production' && uglify()
  ]
}

