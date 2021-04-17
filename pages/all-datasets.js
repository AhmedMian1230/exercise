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
                        <Dropdown.Item /*onClick={}*/>Criteria 1</Dropdown.Item>
                        <Dropdown.Item>Criteria 2</Dropdown.Item>
                        <Dropdown.Item>Criteria 3</Dropdown.Item>
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