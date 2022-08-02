import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { useEffect, useState } from "react";

import Icon from "@mdi/react";
import { mdiTwitter } from "@mdi/js";
import { mdiInstagram } from "@mdi/js";
import { mdiFacebook } from "@mdi/js";
import MailFeedbackModal from "../components/MailFeedbackModal";

const Contact = () => {
    const [message, setMessage] = useState({});
    const [respond, setRespond] = useState("");
    const [show, setShow] = useState(false);

    const handleChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value });
        //console.log(formData);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await axios.post("/api/sendtestemail", message);
        const response_data = response.data;
        console.log(response_data);
        setRespond(response_data);
        setShow(true);
    };

    return (
        <div className="contact-info-container">
            <MailFeedbackModal
                show={show}
                setShow={setShow}
                respond={respond}
            />
            <h2>Contact us</h2>
            <p>
                We love questions and feedback – and we're always happy to help!
                Here are some ways to contact us.
            </p>
            <Alert variant="primary" className="contact-info-card">
                <Form className="contact-info-form">
                    <Form.Text className="contact-form-text">
                        <h3>Send us a message</h3>
                        <p>
                            Send us a message and we'll respond within 24 hours.
                        </p>
                    </Form.Text>
                    <Row className="contact-form-row">
                        <Form.Group as={Col} className="contact-form-fullname">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter full name here"
                                name="fullname"
                                onChange={(e) => handleChange(e)}
                                value={message.fullname || ""}
                            />
                        </Form.Group>

                        <Form.Group as={Col} className="contact-form-email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email here"
                                name="email"
                                onChange={(e) => handleChange(e)}
                                value={message.email || ""}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="contact-form-row">
                        <Form.Group as={Col} className="contact-form-phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Phone number"
                                name="phone"
                                onChange={(e) => handleChange(e)}
                                value={message.phone || ""}
                            />
                        </Form.Group>

                        <Form.Group
                            as={Col}
                            className="contact-form-organisation"
                        >
                            <Form.Label>Organisation</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Organisation name"
                                name="organisation"
                                onChange={(e) => handleChange(e)}
                                value={message.organisation || ""}
                            />
                        </Form.Group>
                    </Row>
                    <br />
                    <Form.Group className="contact-form-message">
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Your message"
                            name="text"
                            onChange={(e) => handleChange(e)}
                            value={message.text || ""}
                        />


                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </Form>
                <div className="contact-info-line"></div>
                <div className="contact-info-contacts">
                    <h3>Contact information</h3>
                    <div className="contact-info-contacts_text">
                        <p>Email: contact-us@company.com</p>
                        <p>Phone: +420 000 000 001</p>
                    </div>
                    <div className="contact-info-contacts_icons">
                        <Icon path={mdiTwitter} title="twitter icon" size={1} />
                        <Icon
                            path={mdiInstagram}
                            title="instagram icon"
                            size={1}
                        />
                        <Icon
                            path={mdiFacebook}
                            title="facebook icon"
                            size={1}
                        />
                    </div>
                </div>
            </Alert>
        </div>
    );
};

export default Contact;
