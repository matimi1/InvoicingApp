import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


function CompanyDetails() {

    const [details, setDetails] = useState(null);
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState(null)

    const url = "/api/suppliers/current";

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        setDetails(data);

        const formData = { ...data }
        console.log(formData)
        setFormData({ ...formData, ...formData.bank_account, ...formData.address, 'data_batch': 'company-details' })
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        setEditing(false);

        const response = await axios.post(`/api/suppliers/current`, formData);
        const response_data = response.data;

        setFormData({ ...formData, ...response_data })
        setDetails({ ...details, ...response_data });

    }

    return (

        <div>
            {!details ?
                <h2>LOL</h2>
                :
                <div className="userdetails__box">
                    <h1 className="userdetails__heading">Company Details</h1>

                    {details &&

                        <div>

                            {editing ? (
                                <Form className="client_form">
                                    <input type="hidden" name="data_batch" value="company-details" />
                                    <Form.Group className="client_form_element client_reg_number_EU">
                                        <Form.Label>ICO/Reg. N.:</Form.Label>
                                        <Form.Control type="text"
                                            name="reg_number"
                                            onChange={(e) => handleChange(e)}
                                            value={formData.reg_number || ""} />
                                    </Form.Group>
                                    <Row className="client_contact_row">
                                        <Form.Group as={Col} className="client_form_element client_email">
                                            <Form.Label>Email:</Form.Label>
                                            <Form.Control type="email"
                                                name="email"
                                                onChange={(e) => handleChange(e)}
                                                value={formData.email || ""} />
                                        </Form.Group>
                                        <Form.Group as={Col} className="client_form_element client_phone">
                                            <Form.Label>Phone:</Form.Label>
                                            <Form.Control type="text"
                                                name="phone"
                                                onChange={(e) => handleChange(e)}
                                                value={formData.phone || ""} />
                                        </Form.Group>
                                    </Row>


                                    <strong>Address:  </strong>
                                    <Row className="client_address_row">

                                        <Form.Group as={Col} className="client_form_element client_address_postal_code">
                                            <Form.Label>Postal code:</Form.Label>
                                            <Form.Control type="text"
                                                name="postal_code"
                                                onChange={(e) => handleChange(e)}
                                                value={formData.postal_code || ""} />
                                        </Form.Group>
                                        <Form.Group as={Col} className="client_form_element client_address_city">
                                            <Form.Label>City:</Form.Label>
                                            <Form.Control type="text"
                                                name="city"
                                                onChange={(e) => handleChange(e)}
                                                value={formData.city || ""} />
                                        </Form.Group>

                                    </Row>
                                    <Form.Group className="client_form_element client_address_street">
                                        <Form.Label>Street:</Form.Label>
                                        <Form.Control type="text"
                                            name="street_name"
                                            onChange={(e) => handleChange(e)}
                                            value={formData?.street_name || ""} />
                                    </Form.Group>
                                    <Row className="client_address_house">

                                        <Form.Group as={Col} className="client_form_element client_address_house_number">
                                            <Form.Label>House number:</Form.Label>
                                            <Form.Control type="text"
                                                name="house_number"
                                                onChange={(e) => handleChange(e)}
                                                value={formData.house_number || ""} />
                                        </Form.Group>
                                        <Form.Group as={Col} className="client_form_element client_address_house_orient">
                                            <Form.Label>House orient number:</Form.Label>
                                            <Form.Control type="text"
                                                name="house_orient"
                                                onChange={(e) => handleChange(e)}
                                                value={formData.house_orient || ""} />
                                        </Form.Group>

                                    </Row>
                                    <Button type="button" variant="primary" onClick={(e) => handleSubmit(e)}>
                                        Save
                                    </Button>

                                    <Button type="button" variant="primary" onClick={() => { setEditing(false); setShowEdit(false); }}>
                                        Cancel
                                    </Button>


                                </Form>) :
                                (
                                    <div className="userdetails__container">
                                        <span className="userdetails__detail"><strong>ICO/REG N.: </strong>{details.reg_number}</span>

                                        {/* <span className="userdetails__detail"><strong>DIC/REG N.: </strong>{details.reg_number_EU}</span> */}

                                        <span className="userdetails__detail"><strong>Phone: </strong>{details.phone}</span>

                                        <span className="userdetails__detail"><strong>E-mail: </strong>{details.email}</span>

                                        <div className='userdetails__address'>

                                            <span className='userdetails__address_heading'><strong>Address</strong></span>

                                            <div className='userdetails__address_container'>

                                                <span className="userdetails__detail">{details?.address?.street_name}</span><br />

                                                <span className="userdetails__detail">{details?.address?.house_number}/{details.address?.house_orient}</span><br />

                                                <span className="userdetails__detail">{details?.address?.postal_code} {details.address?.city}</span><br />

                                            </div>


                                        </div>

                                    </div>
                                )}
                        </div>

                    }


                    <Button type="button" onClick={() => setEditing(true)}>
                        Edit
                    </Button>
                </div>
            }
        </div>
    );
}

export default CompanyDetails;
