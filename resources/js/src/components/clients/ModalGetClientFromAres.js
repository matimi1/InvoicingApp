import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import getAres from "../../actions/getAres";

const ModalGetClientFromAres = ({ showAres, setShowAres, setClientData, setShowEdit, setShowCreateForm }) => {

    const [number, setNumber] = useState('');
    const handleClick = async () => {

        console.log(number);

        const aresData = await getAres(number);
        await setClientData(aresData);

        console.log(aresData);
        setShowAres(false);
        setShowEdit(true);
        setShowCreateForm(true);
    }



    return (
        <>
            <Modal
                show={showAres}
                onHide={() => setShowAres(false)}
                dialogClassName="modal-100w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <p>Loading from ARES</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="client-search-ares-modal">

                        <Form.Control type="text" placeholder="Enter client number" value={number} onChange={(e) => setNumber(e.target.value)} />
                        <br />
                        <Button variant="primary" onClick={(e) => handleClick(e)}>Load client</Button>

                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalGetClientFromAres;
