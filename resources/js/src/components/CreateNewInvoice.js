import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ModalGetClientFromAres from "../components/clients/ModalGetClientFromAres";
import ClientCreateForm from "../components/clients/ClientCreateForm";

import ModalCreateInvoice from "./ModalCreateInvoice";
import InvoiceItem from "./InvoiceItem";

const CreateNewInvoice = ({ client_number }) => {
    const [values, setValues] = useState({
        client: {
            name: "",
            reg_number: "",
            reg_number_EU: "",
            reg_type_court: "",
            reg_type_file: "",
            email: "",
            phone: "",
            address: {
                city: "",
                street_name: "",
                house_number: "",
                house_orient: "",
                postal_code: "",
            },
        },
        status: "unpaid",
        currency: "CZK",
        number: "",
        issued_on: "",
        due_date: "",
        form_of_payment: "",
        additional_notes: "",
        invoice_items: [],
        total: 0,
    });

    const navigate = useNavigate();
    console.log(values);

    const [showAres, setShowAres] = useState(false);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [clientData, setClientData] = useState(values.client);

    //console.log(values);

    //success message, if any
    const [flashMessage, setFlashMessage] = useState("");

    //state for modal
    const [show, setShow] = useState(false);

    //state for new InvoiceItem line
    const [listOfNewLines, setListOfNewLines] = useState([]);

    //state for total
    const [total, setTotal] = useState(0);

    const url = `/api/clients/${client_number}`;

    const fetchData = async () => {
        console.log(url);

        const response = await fetch(url);
        const data = await response.json();
        console.log(data[0]);
        setClientData(data[0]);
        /*setClientData({
            client: {
                name: data[0].name ?? '',
                reg_number: data[0].reg_number ?? '',
                reg_number_EU: data[0].reg_number_EU ?? '',
                reg_type_court: data[0].reg_type_court ?? '',
                reg_type_file: data[0].reg_type_file ?? '',
                email: data[0].email ?? '',
                phone: data[0].phone ?? '',
                address: {
                    city: data[0].address.city ?? '',
                    street_name: data[0].address.street_name ?? '',
                    house_number: data[0].address.house_number ?? '',
                    house_orient: data[0].address.house_orient ?? '',
                    postal_code: data[0].address.postal_code ?? '',
                },
            },
            status: "new",
            currency: "CZK",
            number: "",
            issued_on: "",
            due_date: "",
            form_of_payment: "",
            additional_notes: "",
            invoice_items: [],
            total: 0,
        });*/
    };

    useEffect(() => {
        if (client_number) fetchData();
    }, []);

    const handleChange = (event) => {
        setValues((previous_values) => {
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
            };
        });
    };

    const handleInvoiceChange = async (element) => {
        const isMatch = await values.invoice_items.filter(
            (elem) => elem.id === element.id
        );
        if (isMatch.length) {
            const arry = await values.invoice_items.map((elem) =>
                elem.id === element.id ? element : elem
            );

            return setValues({ ...values, invoice_items: arry });
        } else {
            return setValues({
                ...values,
                invoice_items: [...values.invoice_items, element],
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        //    console.log(values);

        const response = await axios.post("/api/create-invoice", values);
        // const response = await axios.get("/development-test/invoice", values);

        const response_data = response.data;
        if (response_data) {
            setFlashMessage(response_data);

            function closeModal() {
                navigate("/dashboard");
            }
            setTimeout(closeModal, 2000);
        }
    };

    const totalAmount = () => {
        values.invoice_items.map((el, i) => {
            setTotal(total + el.sub_total);
            console.log(total);
        });
    };

    const removeLine = (id) => {
        document.getElementById(id).remove();
    };

    useEffect(() => {
        totalAmount();
    }, [values.invoice_items]);

    useEffect(() => {
        setValues({ ...values, client: clientData });
    }, [clientData]);

    return (
        <>
            <div className="new-client-component">
                <Button variant="primary" onClick={() => setShowAres(true)}>
                    Add new client
                </Button>
                <br />
                <br />
                <ModalGetClientFromAres
                    showAres={showAres}
                    setShowAres={setShowAres}
                    setClientData={setClientData}
                    setShowEdit={() => {}}
                    setShowCreateForm={setShowCreateForm}
                />

                <div className={`client-details`}>
                    <ClientCreateForm
                        clientData={clientData}
                        setClientData={setClientData}
                    />
                    <br />
                </div>
            </div>
            <br />
            <br />

            <Form onSubmit={handleSubmit} className="create-invoice-component">
                <ModalCreateInvoice
                    show={show}
                    setShow={setShow}
                    flashMessage={flashMessage}
                    handleSubmit={handleSubmit}
                    formData={values}
                />
                <Row className="create-invoice-row">
                    <Col xs="auto">
                        <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                            Invoice number
                        </Form.Label>
                        <Form.Control
                            className="mb-2"
                            id="inlineFormInput"
                            name="number"
                            value={values.number}
                            placeholder="Invoice number"
                            onChange={handleChange}
                        />
                    </Col>

                    <Form.Label column lg={1}>
                        Issued on:
                    </Form.Label>
                    <Col xs="auto">
                        <Form.Control
                            type="date"
                            className="mb-2"
                            id="inlineFormInput"
                            name="issued_on"
                            value={values.issued_on}
                            min="2022-01-01"
                            max="2022-12-31"
                            onChange={handleChange}
                        />
                    </Col>

                    <Form.Label column lg={1}>
                        Due date:
                    </Form.Label>
                    <Col xs="auto">
                        <Form.Control
                            type="date"
                            className="mb-2"
                            id="inlineFormInput"
                            name="due_date"
                            value={values.due_date}
                            min="2022-01-01"
                            max="2022-12-31"
                            onChange={handleChange}
                        />
                    </Col>

                    <Col xs="auto">
                        <Form.Select
                            name="form_of_payment"
                            value={values.form_of_payment}
                            onChange={handleChange}
                        >
                            <option>Payment</option>
                            <option>Wire transfer</option>
                            <option>Cash</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row className="create-invoice-row">
                    <InvoiceItem
                        values={{ values }}
                        handleChange={handleInvoiceChange}
                        total={total}
                        setTotal={setTotal}
                        id={0}
                    />
                </Row>
                {listOfNewLines.map((Element, index) => (
                    <>
                        <Row
                            className="create-invoice-row"
                            key={index}
                            id={index + 1}
                        >
                            <Element
                                values={{ values }}
                                handleChange={handleInvoiceChange}
                                total={total}
                                setTotal={setTotal}
                                id={index + 1}
                            />

                            <Col xs="auto">
                                <Button
                                    variant="secondary"
                                    onClick={() => removeLine(index + 1)}
                                >
                                    remove line
                                </Button>
                            </Col>
                        </Row>
                    </>
                ))}
                <Col xs="auto">
                    <Button
                        onClick={() =>
                            setListOfNewLines([...listOfNewLines, InvoiceItem])
                        }
                    >
                        add new line
                    </Button>
                </Col>

                <Col xs={7}>
                    <Form.Control
                        name="additional_notes"
                        value={values.additional_notes}
                        placeholder="Your notes to be shown on invoice...."
                        onChange={handleChange}
                    />
                </Col>
                <Col xs="auto">
                    Total: {total}
                    ,- CZK
                </Col>

                <br />
                <Col xs="auto">
                    <Button variant="primary" onClick={() => setShow(true)}>
                        Generate invoice
                    </Button>
                    {/* <Button type="submit">test values</Button>{" "} */}
                </Col>
            </Form>
        </>
    );
};

export default CreateNewInvoice;
