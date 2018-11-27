import fs from 'fs'
import {Response} from 'whatwg-fetch'

const request = (url, format) => new Promise((resolve, reject) => {
  // Transform url into a filename
  const fileName = url.split('?')[0].replace(/\//g, '.')

  // Load json data from a file in de subfolder for mock data
  fs.readFile(`./src/__mockData__/${fileName}.${format}`, 'utf8', (err, data) => {
    if (err) reject(err)

    let myResponse = new Response(data)
    resolve(myResponse)
  })
})

export default request
