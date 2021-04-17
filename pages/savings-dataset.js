import axios from "axios"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"

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
    // TODO: Format the cells that contain json to make more readable
    const generateTds = (savingJson, uniqueKeys) => {
        const tdArray = []
        uniqueKeys.forEach((uniqueKey) => {
            tdArray.push(<td>{JSON.stringify(savingJson[uniqueKey])}</td>)
        })
        return tdArray
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
        </>
    )
}

export default SavingsDataset