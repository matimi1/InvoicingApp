import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import InvoiceTemplateModal from "./InvoiceTemplateModal";

const ModalCreateInvoice = ({
    show,
    setShow,
    flashMessage,
    handleSubmit,
    formData,
}) => {
    return (
        <>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                fullscreen={true}
                // dialogClassName="modal-100w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        {flashMessage}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <InvoiceTemplateModal formData={formData} />

                        <ButtonGroup className="me-2" aria-label="First group">
                            <Button
                                variant="primary"
                                size="sm"
                                className="mb-2"
                                onClick={() => setShow(false)}
                            >
                                Edit invoice
                            </Button>
                        </ButtonGroup>
                        <ButtonGroup className="me-2" aria-label="Second group">
                            <Button
                                type="submit"
                                size="sm"
                                className="mb-2"
                                onClick={(event) => handleSubmit(event)}
                            >
                                Save invoice
                            </Button>
                        </ButtonGroup>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalCreateInvoice;
