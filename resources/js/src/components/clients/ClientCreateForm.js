import { useEffect, useState } from "react";

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const ClientCreateForm = ({ clientData, setClientData }) => {

    const [address, setAddress] = useState(clientData.address);


    const handleChange = (e) => {
        setClientData({ ...clientData, [e.target.name]: e.target.value });
        //console.log(formData);
    }

    const handleAddressChange = (e) => {

        setAddress({ ...address, [e.target.name]: e.target.value })

        //console.log(address);   

    }

    useEffect(() => {
        setClientData({ ...clientData, address: address });

    }, [address])



    return (
        <Form className="client_form">
            <Row className="client_contact_row">
                <Form.Group as={Col} className="client_form_element client_name">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text"
                        name="name"
                        onChange={(e) => handleChange(e)}
                        value={clientData.name || ''} />
                </Form.Group>
                <Form.Group as={Col} className="client_form_element client_reg_number">
                    <Form.Label>ICO / REG N.:</Form.Label>
                    <Form.Control type="text"
                        name="reg_number"
                        onChange={(e) => handleChange(e)}
                        value={clientData.reg_number || ''} />
                </Form.Group>
                <Form.Group as={Col} className="client_form_element client_reg_number_EU">
                    <Form.Label>DIC/VAT N:</Form.Label>
                    <Form.Control type="text"
                        name="reg_number_EU"
                        onChange={(e) => handleChange(e)}
                        value={clientData.reg_number_EU || ''} />
                </Form.Group>
            </Row>

            <Row className="client_contact_row">
                <Form.Group as={Col} className="client_form_element client_reg_type_court">
                    <Form.Label>Registration court:</Form.Label>
                    <Form.Control type="text"
                        name="reg_type_court"
                        onChange={(e) => handleChange(e)}
                        value={clientData.reg_type_court || ''} />
                </Form.Group>
                <Form.Group as={Col} className="client_form_element client_reg_type_file">
                    <Form.Label>Registration file:</Form.Label>
                    <Form.Control type="text"
                        name="reg_type_file"
                        onChange={(e) => handleChange(e)}
                        value={clientData.reg_type_file || ''} />
                </Form.Group>
            </Row>

            <Row className="client_contact_row">
                <Form.Group as={Col} className="client_form_element client_email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email"
                        name="email"
                        onChange={(e) => handleChange(e)}
                        value={clientData.email || ''} />
                </Form.Group>
                <Form.Group as={Col} className="client_form_element client_phone">
                    <Form.Label>Phone:</Form.Label>
                    <Form.Control type="text"
                        name="phone"
                        onChange={(e) => handleChange(e)}
                        value={clientData.phone || ''} />
                </Form.Group>
            </Row>


            <strong>Address:  </strong>
            <Row className="client_address_row">

                <Form.Group as={Col} className="client_form_element client_address_postal_code">
                    <Form.Label>Postal code:</Form.Label>
                    <Form.Control type="text"
                        name="postal_code"
                        onChange={(e) => handleAddressChange(e)}
                        value={clientData.address.postal_code || ''} />
                </Form.Group>
                <Form.Group as={Col} className="client_form_element client_address_city">
                    <Form.Label>City:</Form.Label>
                    <Form.Control type="text"
                        name="city"
                        onChange={(e) => handleAddressChange(e)}
                        value={clientData.address.city || ''} />
                </Form.Group>
                <Form.Group as={Col} className="client_form_element client_address_street">
                    <Form.Label>Street:</Form.Label>
                    <Form.Control type="text"
                        name="street_name"
                        onChange={(e) => handleAddressChange(e)}
                        value={clientData.address.street_name || ''} />
                </Form.Group>
                <Form.Group as={Col} className="client_form_element client_address_house_number">
                    <Form.Label>House number:</Form.Label>
                    <Form.Control type="text"
                        name="house_number"
                        onChange={(e) => handleAddressChange(e)}
                        value={clientData.address.house_number || ''} />
                </Form.Group>
                <Form.Group as={Col} className="client_form_element client_address_house_orient">
                    <Form.Label>House orient number:</Form.Label>
                    <Form.Control type="text"
                        name="house_orient"
                        onChange={(e) => handleAddressChange(e)}
                        value={clientData.address.house_orient || ''} />
                </Form.Group>

            </Row>


        </Form>
    );
}

export default ClientCreateForm;