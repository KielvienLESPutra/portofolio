// Library
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Costum css 
import '../css/HomeStyle.css';

// Costum component
import LoaderImage from './LoaderImageComponent';

const HomeComponent = (props) => {
    return (
        <Container fluid>
            <Row xs={12} sm={12} md={12} lg={12} xl={12}>
                <Col className="TextComponentStyle" xs={12} lg={6}>
                    <Col xs={{ span: 11, offset: 1 }}>
                        <h1 className="TextHeaderStyle">
                            {props.content.header}
                        </h1>
                    </Col>
                    <Col xs={{ span: 11, offset: 1 }}>
                        <p className="TextBodyStyle">
                            {props.content.description}
                        </p>
                    </Col>
                </Col>
                <Col className="ImageComponentStyle" xs={12} lg={6}>
                    <Col xs={{ span: 12 }}>
                        <LoaderImage path={props.content.resourcePath} type={props.content.resourceType} />
                    </Col>
                </Col>
            </Row>
        </Container>
    );
}

export default HomeComponent;