import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Dropdown, Button } from "react-bootstrap"
import DatasetAccordion from '../components/DatasetAccordion'

const AllDatasets = () => {
    const [datasets, setDatasets] = useState([])
    useEffect(async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/data')
            console.log('Received response from /api/data endpoint. ', response.data)
            setDatasets(response.data.dataset)
        } catch (err) {
            console.log('Error fetching from /api/data endpoint ', err)
        }
    }, [])

    const handleSort = (criteria) => {
        const sortedData = datasets.sort((a, b) => a[criteria] > b[criteria] ? 1 : -1)
        setDatasets([...sortedData])
    }

    const handleReverseSort = (criteria) => {
        const sortedData = datasets.sort((a, b) => a[criteria] < b[criteria] ? 1 : -1)
        setDatasets([...sortedData])
    }

    return (
        <>
            <div className='top'>
                <Link href={'/'}>
                    <Button variant="secondary">&larr; Back</Button>
                </Link>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        Sort by
                </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleSort('title')}>Title</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleReverseSort('title')}>Title (Reverse)</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleSort('modified')}>Modified (Oldest)</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleReverseSort('modified')}>Modified (Newest)</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleSort('bureauCode')}>Bureau Code</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleSort('programCode')}>Program Code</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div>
                {/* Display each dataset within an accordion */}
                {datasets.length > 0 &&
                    datasets.map(dataset => <DatasetAccordion dataset={dataset} />)
                }
            </div>
        </>
    )
}

export default AllDatasets