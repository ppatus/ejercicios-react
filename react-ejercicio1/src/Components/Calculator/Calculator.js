import { useState } from "react";
import { Row, Form, Col, Container } from "react-bootstrap";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Result from "./Result.js";
import 'bootstrap/dist/css/bootstrap.css';


function Calculator(props){
    const [A, setA] = useState("");
    const [B, setB] = useState("");
    const [operation, setOperation] = useState("+");

    const A_handler = (event) => {
        setA(event.target.value);
    }

    const B_handler = (event) => {
        setB(event.target.value);
    }

    const sumar = (event) => {
        setOperation("+");
    }

    const restar = (event) => {
        setOperation("-");
    }

    const multiplicar = (event) => {
        setOperation("x");
    }

    const dividir = (event) => {
        setOperation("/");
    }

    const operaciones = [
        {"sign": "+", "handler": sumar},
        {"sign": "-", "handler": restar},
        {"sign": "x", "handler": multiplicar},
        {"sign": "/", "handler": dividir}
    ];

    return(
        <>
        <h6>Elige un modo de operación</h6>

        <ButtonGroup style={{ marginBottom: '40px', marginTop: '20px'}}>
            {operaciones.map((operacion, _) => (
            <ToggleButton
                type="radio"
                variant="success"
                onClick={operacion.handler}
                checked={operation==operacion.sign}
            >
                {operacion.sign}
            </ToggleButton>
            ))}

        </ButtonGroup>
        

        <Container xs>
            <Row>
                <Col xs><Form.Control onChange={A_handler} type='number' value={A} /></Col>
                <Col xs><h3>{operation}</h3></Col>
                <Col xs><Form.Control onChange={B_handler} type='number' value={B} /></Col>
                <Col xs><h5>=</h5></Col>
                <Col xs><Result a={A} b={B} op={operation}/></Col>
            </Row>
        </Container>
        
        
        
        </>
    );
}

export default Calculator;