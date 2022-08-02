import { useEffect, useState } from "react";
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const ClientDetailsEdit = ({ clientData, setEditing, setShowEdit }) => {

    const [formData, setFormData] = useState({
        //...clientData
        name: clientData.name || '',
        // reg_number: clientData.reg_number,
        reg_number_EU: clientData.reg_number_EU || "",
        reg_type_court: clientData.reg_type_court || '',
        reg_type_file: clientData.reg_type_file || '',
        address_city: clientData.address.city || '',
        address_street_name: clientData.address.street_name || '',
        address_house_number: clientData.address.house_number || '',
        address_house_orient: clientData.address.house_orient || '',
        address_postal_code: clientData.address.postal_code || '',
        email: clientData.email || '',
        phone: clientData.phone || ''

    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        //console.log(formData);
    }

    const handleSubmit = async (e) => {

        e.preventDefault();


        const response = await axios.post(`/api/clients/${clientData.reg_number}`, formData);
        const response_data = response.data;
        console.log(response_data);

        setShowEdit(false);
        setEditing(false);

    }

    useEffect(() => {
        //console.log(formData);
        //console.log(clientData);
        //console.log(formData.clientData.address.postal_code);
        //console.log(formData.address['postal_code']);
        setFormData({
            name: clientData.name || '',
            // reg_number: clientData.reg_number,
            reg_number_EU: clientData.reg_number_EU || "",
            reg_type_court: clientData.reg_type_court || '',
            reg_type_file: clientData.reg_type_file || '',
            address_city: clientData.address.city || '',
            address_street_name: clientData.address.street_name || '',
            address_house_number: clientData.address.house_number || '',
            address_house_orient: clientData.address.house_orient || '',
            address_postal_code: clientData.address.postal_code || '',
            email: clientData.email || '',
            phone: clientData.phone || ''
        })


    }, [clientData, setShowEdit])

    return (
        <Form className="client_form">
            <Row className="client_contact_row">
                <Form.Group as={Col} className="client_form_element client_name">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text"
                        name="name"
                        onChange={(e) => handleChange(e)}
                        value={formData.name || ''} />
                </Form.Group>
                <Form.Group as={Col} className="client_form_element client_reg_number_EU">
                    <Form.Label>DIC/VAT N:</Form.Label>
                    <Form.Control type="text"
                        name="reg_number_EU"
                        onChange={(e) => handleChange(e)}
                        value={formData.reg_number_EU || ''} />
                </Form.Group>
            </Row>

            <Row className="client_contact_row">
                <Form.Group as={Col} className="client_form_element client_reg_type_court">
                    <Form.Label>Registration court:</Form.Label>
                    <Form.Control type="text"
                        name="reg_type_court"
                        onChange={(e) => handleChange(e)}
                        value={formData.reg_type_court || ''} />
                </Form.Group>
                <Form.Group as={Col} className="client_form_element client_reg_type_file">
                    <Form.Label>Registration file:</Form.Label>
                    <Form.Control type="text"
                        name="reg_type_file"
                        onChange={(e) => handleChange(e)}
                        value={formData.reg_type_file || ''} />
                </Form.Group>
            </Row>

            <Row className="client_contact_row">
                <Form.Group as={Col} className="client_form_element client_email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email"
                        name="email"
                        onChange={(e) => handleChange(e)}
                        value={formData.email || ''} />
                </Form.Group>
                <Form.Group as={Col} className="client_form_element client_phone">
                    <Form.Label>Phone:</Form.Label>
                    <Form.Control type="text"
                        name="phone"
                        onChange={(e) => handleChange(e)}
                        value={formData.phone || ''} />
                </Form.Group>
            </Row>



            <strong>Address:  </strong>
            <Row className="client_address_row">

                <Form.Group as={Col} className="client_form_element client_address_postal_code">
                    <Form.Label>Postal code:</Form.Label>
                    <Form.Control type="text"
                        name="address_postal_code"
                        onChange={(e) => handleChange(e)}
                        value={formData.address_postal_code} />
                </Form.Group>
                <Form.Group as={Col} className="client_form_element client_address_city">
                    <Form.Label>City:</Form.Label>
                    <Form.Control type="text"
                        name="address_city"
                        onChange={(e) => handleChange(e)}
                        value={formData.address_city} />
                </Form.Group>
                <Form.Group as={Col} className="client_form_element client_address_street">
                    <Form.Label>Street:</Form.Label>
                    <Form.Control type="text"
                        name="address_street_name"
                        onChange={(e) => handleChange(e)}
                        value={formData.address_street_name} />
                </Form.Group>
                <Form.Group as={Col} className="client_form_element client_address_house_number">
                    <Form.Label>House number:</Form.Label>
                    <Form.Control type="text"
                        name="address_house_number"
                        onChange={(e) => handleChange(e)}
                        value={formData.address_house_number} />
                </Form.Group>
                <Form.Group as={Col} className="client_form_element client_address_house_orient">
                    <Form.Label>House orient number:</Form.Label>
                    <Form.Control type="text"
                        name="address_house_orient"
                        onChange={(e) => handleChange(e)}
                        value={formData.address_house_orient} />
                </Form.Group>

            </Row>
            <Button type="submit" variant="primary" onClick={(e) => handleSubmit(e)}>
                Save
            </Button>
            <Button type="button" variant="primary" onClick={() => { setEditing(false); setShowEdit(false); }}>
                Cancel
            </Button>


        </Form>
    );
}

export default ClientDetailsEdit;