import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const InvoiceItem = ({ handleChange, id, total, setTotal }) => {
    // total Sub-total state
    const [subtotal, setSubtotal] = useState(0);

    const [invoiceData, setInvoiceData] = useState({
        invoice_description: "",
        unit_cost: 0,
        unit_quantity: 0,
        sub_total: subtotal,
        id,
    });

    useEffect(() => {
        const value = {
            invoice_description: null,
            unit_cost: null,
            unit_quantity: null,
            sub_total: subtotal,
            id,
        };
        setInvoiceData(value);
    }, []);

    useEffect(() => {
        setSubtotal(invoiceData.unit_cost * invoiceData.unit_quantity);
    }, [invoiceData]);

    useEffect(() => {
        setTotal(total + subtotal);
    }, [subtotal]);
    const handleChangeInput = (e) => {
        const newValue = {
            ...invoiceData,
            [e.target.name]: e.target.value,
        };

        setInvoiceData(newValue);

        handleChange(newValue);
    };

    return (
        <>
            <Col xs="auto">
                <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                    Service description
                </Form.Label>
                <Form.Control
                    type="text"
                    className="mb-2"
                    id="inlineFormInput"
                    name="invoice_description"
                    value={invoiceData?.invoice_description || ""}
                    placeholder="Service description"
                    onChange={(e) => handleChangeInput(e)}
                />
            </Col>
            <Col xs="auto">
                <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                    Unit cost
                </Form.Label>
                <Form.Control
                    type="number"
                    className="mb-2"
                    id="inlineFormInput"
                    name="unit_cost"
                    value={invoiceData?.unit_cost || ""}
                    placeholder="Unit cost"
                    onChange={(e) => handleChangeInput(e)}
                />
            </Col>
            <Col xs="auto">
                <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                    Unit quantity
                </Form.Label>
                <Form.Control
                    type="number"
                    className="mb-2"
                    id="inlineFormInput"
                    name="unit_quantity"
                    value={invoiceData?.unit_quantity || ""}
                    placeholder="Unit quantity"
                    onChange={(e) => handleChangeInput(e)}
                />
            </Col>
            <Col xs="auto">
                Sub-total: {subtotal}
                ,- CZK
            </Col>
        </>
    );
};
export default InvoiceItem;
