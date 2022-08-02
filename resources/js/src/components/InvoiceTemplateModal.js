import Table from "react-bootstrap/Table";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const InvoiceTemplateModal = ({ formData }) => {
    // //Client state
    // const [clientIco, setClientIco] = useState("");
    const [clientData, setClientData] = useState("");

    // //Supplier state
    // const [supplierIco, setSupplierIco] = useState("");
    const [supplierData, setSupplierData] = useState("");

    // //data loading states
    // const [dataLoaded, setDataLoaded] = useState(false);
    const [clientLoaded, setClientLoaded] = useState(false);
    const [supplierLoaded, setSupplierLoaded] = useState(false);

    //total amount state
    const [total, setTotal] = useState(0);

    // const clientIco = 27074358;
    const supplierIco = 87654321;

    // const fetchClient = async () => {
    //     const response = await axios.get(`/api/clients/${clientIco}`);
    //     setClientData(response.data[0]);
    //     console.log(response.data[0]);
    //     setClientLoaded(true);
    // };

    const fetchSupplier = async () => {
        const response = await axios.get(`/api/suppliers/current`);
        setSupplierData(response.data);
        setSupplierLoaded(true);
    };

    const totalAmount = () => {
        if (typeof formData.invoice_items === "undefined") {
            console.log("console 1 undefined");
        } else {
            let total = 0;
            formData.invoice_items.map((item) => {
                total += item.unit_cost * item.unit_quantity;
            });
            setTotal(total);
            console.log(total);
        }
    };

    useEffect(() => {
        fetchSupplier();
        totalAmount();
    }, [formData]);

    return (
        <>
            {!supplierLoaded ? (
                <Loader />
            ) : (
                <div className="container_invoice">
                    <div className="invoice__header">
                        <div className="invoice__header_img">
                            <img src="../images/logo.svg" alt="logo" />
                        </div>

                        <div className="invoice__header_data">
                            <p>Invoice # {formData.number}</p>
                            <p>Issued at: {formData.issued_on}</p>
                            <p>Due date: {formData.due_date}</p>
                        </div>
                    </div>
                    <div className="seperator_invoice"></div>
                    <div className="invoice__counterparts">
                        <div className="invoice__counterparts_supplier">
                            <p>
                                <b>Supplier name: {supplierData.name}</b>
                            </p>
                            <p>
                                {" "}
                                {supplierData.address.street_name}{" "}
                                {supplierData.address.house_number} /
                                {supplierData.address.house_orient}
                            </p>
                            <p>
                                {" "}
                                {supplierData.address.postal_code}{" "}
                                {supplierData.address.city}
                            </p>
                            <p>Reg.#: {supplierData.reg_number} </p>
                            <p>
                                Registred at: {supplierData.reg_type_court},
                                file {supplierData.reg_type_file}
                            </p>
                            <p>I am not a VAT payer</p>
                        </div>
                        <div className="invoice__counterparts_client">
                            <p>
                                <b>Bill to: {formData.client.name}</b>
                            </p>
                            <p>
                                {formData.client.address.street_name}{" "}
                                {formData.client.address.house_number} /{" "}
                                {formData.client.address.house_orient}
                            </p>
                            <p>
                                {formData.client.address.postal_code}{" "}
                                {formData.client.address.city}
                            </p>
                            <p>Reg.#: {formData.client.reg_number} </p>
                            <p>VAT.#: {formData.client.reg_number_EU} </p>
                            <p>
                                Registred at: {formData.client.reg_type_court},
                                file {formData.client.reg_type_file}
                            </p>
                        </div>
                    </div>
                    <div className="seperator_invoice"></div>
                    {formData.form_of_payment === "Cash" ? (
                        <div className="invoice__payment_cash">
                            <p>
                                <b>Payment Method:</b> Cash
                            </p>
                        </div>
                    ) : (
                        <div className="invoice__payment_wire">
                            <p>
                                <b>Payment Method:</b> Wire Transfer
                            </p>

                            <Table
                                striped
                                bordered
                                hover
                                className="bank_details"
                            >
                                <thead>
                                    <tr>
                                        <th>Bank name</th>
                                        <th>Account number</th>
                                        <th>Bank code</th>
                                        <th>SWIFT</th>
                                        <th>IBAN (BIC)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> {supplierData.bank_name}</td>
                                        <td>
                                            {" "}
                                            {
                                                supplierData.bank_account_prefix
                                            } -{" "}
                                            {supplierData.bank_account_number}
                                        </td>
                                        <td>
                                            {" "}
                                            {supplierData.bank_account_code}
                                        </td>
                                        <td> {supplierData.iban}</td>
                                        <td> {supplierData.swift}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    )}

                    <div className="seperator_invoice"></div>

                    <Table striped bordered hover className="invoice__body">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Service name</th>
                                <th>Unit price</th>
                                <th>Unit quantity</th>
                                <th>Sub-Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData.invoice_items.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.invoice_description}</td>
                                    <td>{item.unit_cost}</td>
                                    <td>{item.unit_quantity}</td>
                                    <td>
                                        {item.unit_cost * item.unit_quantity},-
                                        CZK
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className="seperator_invoice"></div>
                    <div className="invoice__total">
                        <div>
                            <p>
                                <b>Additional Notes: </b>
                                {formData.additional_notes}
                            </p>
                        </div>
                        <div>
                            <p>
                                <b>Total:</b>
                            </p>
                            <p>{total},- CZK</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default InvoiceTemplateModal;
