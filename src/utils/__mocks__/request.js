import fs from 'fs'
import {Response} from 'whatwg-fetch'

const request = (url) => new Promise((resolve, reject) => {
  // Transform url into a filename
  const fileName = url.replace(/\//g, '.')

  // Load json data from a file in de subfolder for mock data
  fs.readFile(`./src/__mockData__/${fileName}.json`, 'utf8', (err, data) => {
    if (err) reject(err)

    let myResponse = new Response(data)
    resolve(myResponse)
  })
})

export default request
