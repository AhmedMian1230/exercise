import axios from "axios"
import { useEffect, useState } from "react"
import DatasetAccordion from '../components/DatasetAccordion'

const AllDatasets = () => {
    const [datasets, setDatasets] = useState([])
    // Get data from http endpoint
    useEffect(async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/data')
            console.log('Received response from /api/data endpoint. ', response.data)
            setDatasets(response.data.dataset)
        } catch (err) {
            console.log('Error fetching from /api/data endpoint ', err)
        }
    }, [])
    return (
        <>
            {/* Display each dataset within an accordion */}
            {datasets.length > 0 &&
                datasets.map(dataset => <DatasetAccordion dataset={dataset} />)
            }
        </>
    )
}

export default AllDatasets