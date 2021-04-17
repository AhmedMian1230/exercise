import { Accordion, Card, Container, Row, Col } from "react-bootstrap"

const DatasetAccordion = ({ dataset }) => {
    // TODO: Make data in Card.Body more readable
    // Format data within accordion card
    const body = []
    for (const property in dataset) {
        body.push(
            <Row>
                <Col>
                    <span><b>{property}: </b>{JSON.stringify(dataset[property])}</span>
                </Col>
            </Row>
        )
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