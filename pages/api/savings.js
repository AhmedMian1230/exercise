import axios from 'axios'

export default async (req, res) => {
  const costSavingsUrl = 'https://www.defense.gov/digitalstrategy/costsavings.json'
  let httpCode = 500
  let response = {
    error: `Failed to fetch data from ${costSavingsUrl}`
  }
  if (req.method !== 'GET') {
    httpCode = 400
    response.error = 'The /api/savings endpoint only accepts GET requests.'
  } else {
    try {
      const savingsData = await axios.get(costSavingsUrl)
      if (savingsData.data) {
        httpCode = 200
        response = savingsData.data
      }
    } catch (err) {
      console.log(`Error fetching data from ${costSavingsUrl}. `, err)
    }
  }
  console.log(`Called ${req.method} on /api/savings.`)
  res.status(httpCode).json(response)
}
