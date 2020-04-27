// Library
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Costum css 
import '../css/BodyStyle.css';

// Costum component
import LoaderImage from './LoaderImageComponent';

const BodyComponent = (props) => {
    return (
        <Container fluid>
            <Row className="RowBody" xs={12} sm={12} md={12}>
                <Col xs={6}>
                    <Col xs={{ span: 11, offset: 1 }}>
                        <h1 className="TextHeader">
                            {props.content.header}
                        </h1>
                    </Col>
                    <Col xs={{ span: 11, offset: 1 }}>
                        <p className="TextBody">
                            {props.content.description}
                        </p>
                    </Col>
                </Col>
                <Col xs={6}>
                    <Col xs={{ span: 12 }}>
                        <LoaderImage path={props.content.resourcePath} type={props.content.resourceType} />
                    </Col>
                </Col>
            </Row>
        </Container>
    );
}

export default BodyComponent;