import axios from 'axios'

export default async (req, res) => {
  const defenseDataUrl = 'https://www.defense.gov/data.json'
  let httpCode = 500
  let response = {
    error: `Failed to fetch data from ${defenseDataUrl}`
  }
  if (req.method !== 'GET') {
    httpCode = 400
    response.error = 'The /api/data endpoint only accepts GET requests.'
  } else {
    try {
      const defenseData = await axios.get(defenseDataUrl)
      if (defenseData.data) {
        httpCode = 200
        response = defenseData.data
      }
    } catch (err) {
      console.log(`Error fetching data from ${defenseDataUrl}. `, err)
    }
  }
  console.log(`Called ${req.method} on /api/data.`)
  res.status(httpCode).json(response)
}
