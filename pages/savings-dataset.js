import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Table, Dropdown, Button } from "react-bootstrap"

const SavingsDataset = () => {

    const [savings, setSavings] = useState([])
    useEffect(async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/savings')
            console.log('Received response from /api/savings endpoint. ', response.data)
            setSavings(response.data.strategies)
        } catch (err) {
            console.log('Error fetching data from /api/savings endpoint ', err)
        }
    }, [])

    // Generate the cells for table
    const generateTds = (savingJson, uniqueKeys) => {
        const tdArray = []
        uniqueKeys.forEach((uniqueKey) => {
            if (savingJson.hasOwnProperty(uniqueKey)) {
                if (typeof savingJson[uniqueKey] !== 'object' || Array.isArray(savingJson[uniqueKey])) {
                    tdArray.push(<td>{savingJson[uniqueKey].toString()}</td>)
                } else {
                    const json = savingJson[uniqueKey]
                    const jsonSummary = []
                    for (const field in json) {
                        jsonSummary.push(`${field} - ${json[field]}`)
                    }
                    tdArray.push(<td>{jsonSummary.join('\n')}</td>)
                }
            } else {
                tdArray.push(<td>{''}</td>)
            }
        })
        return tdArray
    }

    const handleSort = (criteria) => {
        const sortedData = savings.sort((a, b) => a[criteria] > b[criteria] ? 1 : -1)
        setSavings([...sortedData])
    }

    const handleReverseSort = (criteria) => {
        const sortedData = savings.sort((a, b) => a[criteria] < b[criteria] ? 1 : -1)
        setSavings([...sortedData])
    }

    // Generate array of all unique headers
    const savingsKeys = []
    savings.forEach((saving) => {
        for (const key in saving) {
            savingsKeys.push(key)
        }
    })
    const uniqueSavingsKeys = Array.from(new Set(savingsKeys))

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
                        <Dropdown.Item onClick={() => handleSort('strategyId')}>Strategy Id</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleReverseSort('strategyId')}>Strategy Id (Reverse)</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleSort('strategyTitle')}>Strategy Title</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleReverseSort('strategyTitle')}>Strategy Title (Reverse)</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleSort('decisionDate')}>Decision Date (Oldest)</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleReverseSort('decisionDate')}>Decision Date (Newest)</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleSort('ombInitiative')}>OMB Initiative</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleReverseSort('ombInitiative')}>OMB Initiative (Reverse)</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {uniqueSavingsKeys.map((saving) => {
                                return <th>{saving}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {savings.map((saving) => {
                            return (
                                <tr>
                                    {generateTds(saving, uniqueSavingsKeys)}
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>

        </>
    )
}

export default SavingsDataset