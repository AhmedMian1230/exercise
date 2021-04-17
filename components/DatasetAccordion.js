import { Accordion, Card, Container, Row, Col } from "react-bootstrap"

const DatasetAccordion = ({ dataset }) => {

    // Append to the accordion card body
    const appendToCard = (offset, key, value) => {
        return (
            <Row>
                <Col md={{ offset: offset }}>
                    <span><b>{key}:</b> {value}</span>
                </Col>
            </Row>
        )
    }

    // Format nested json fields
    const formatJson = (json) => {
        const body = []
        for (const field in json) {
            body.push(appendToCard(1, field, json[field]))
        }
        return body
    }

    // Format data within accordion card
    const body = []
    for (const property in dataset) {
        if (typeof dataset[property] !== "object") {
            body.push(appendToCard(0, property, dataset[property].toString()))
        } else if (Array.isArray(dataset[property])) {
            if (dataset[property].every(element => typeof element === 'string')) {
                body.push(appendToCard(0, property, dataset[property].join(', ')))
            }
            if (dataset[property].every(element => typeof element === 'object')) {
                body.push(appendToCard(0, property))
                const jsonArray = dataset[property]
                jsonArray.forEach((element) => {
                    body.push(formatJson(element))
                })
            }
        } else {
            body.push(appendToCard(0, property))
            body.push(formatJson(dataset[property]))
        }
    }

    return (
        <>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <span><b>{dataset.title}</b></span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Container>
                                {body}
                            </Container>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
    )
}

export default DatasetAccordion