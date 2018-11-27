import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

module.exports = {
  input: 'src/index.js',
  output: {
    name: 'OpeningHoursApi',
    dir: 'dist',
    file: 'opening-hours-api.js',
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
    })
  ]
}

