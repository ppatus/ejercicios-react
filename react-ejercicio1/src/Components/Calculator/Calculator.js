import { useState } from "react";
import { Row, Form, Button } from "react-bootstrap";
import Result from "./Result.js";

function Calculator(props){
    const [A, setA] = useState("");
    const [B, setB] = useState("");

    const A_handler = (event) => {
        setA(event.target.value);
    }

    const B_handler = (event) => {
        setB(event.target.value);
    }

    return(
        <>
        <Row>
            <Form.Control onChange={A_handler} type='number' value={A} />
            <Form.Control onChange={B_handler} type='number' value={B} />
        </Row>
        <Row>
            <Button variant="primary">+</Button>
            <Button>−</Button>
            <Button>x</Button>
            <Button>÷</Button>
        </Row>
        <Result/>
        </>
    );
}

export default Calculator;