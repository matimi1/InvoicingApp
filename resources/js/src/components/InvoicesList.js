import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import InvoicesContext from "../context/InvoicesContext";
import DeleteInvoiceModal from "./DeleteInvoiceModal";
// import DropdownButton from "react-bootstrap/DropdownButton";

export default function InvoicesList() {
    //state to store all  invoices into - for curently logged in user
    const { invoices, setInvoices } = useContext(InvoicesContext);
    const [offset, setOffset] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const url = `api/invoices/suppliers/allinvoices?offset=${offset}`;

    const [status, setStatus] = useState('unpaid');
    const [show, setShow] = useState(false);

    //currently logged in user
    const fetchData = async () => {
        const resp = await fetch(url);
        const data = await resp.json();
        setInvoices(data.data);
        setTotalCount(data.totalCount);
        // console.log(data);
    };

    //use effect hook to fetch the data
    useEffect(() => {
        fetchData();
    }, [offset, status]);

    // //update status function - function that will go to /invoices/changestatus route and with PUT method will change the status of invoice
    // const updateStatus = (value) => {
    // }
    //probably don't need

    const toggleStatus = async (id) => {
        const res = await axios({
            url: "/api/invoices/updatestatus/" + id,
            method: "put",
        });

        return fetchData();
    };

    // function to delte invoice after clicking on dropdown menu
    const deleteInvoice = async (id) => {
        console.log(id);

        await axios({
            url: "/api/invoices/delete/" + id,
            method: "delete",
            data: id,
        });
        setShow(true);
        return fetchData();
    };

    console.log(status);

    return (
        <div className="table__container">
            <DeleteInvoiceModal show={show} setShow={setShow} />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Client</th>
                        <th>Amount</th>
                        <th>Issued on</th>
                        <th>Due date</th>
                        <th>Status</th>
                        <th>More options</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map((invoice, index) => (
                        <tr key={index}>
                            <td>{invoice.number}</td>
                            <td>{invoice.client.name}</td>
                            <td>{invoice.total_amount} CZK</td>
                            <td>{invoice.issued_on}</td>
                            <td>{invoice.due_date}</td>
                            <td>{invoice.status}</td>

                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        variant="secondary"
                                        id="dropdown-basic"
                                    >
                                        Select action
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item
                                            href={`/invoice-template/${invoice.id}`}
                                        >
                                            Show
                                        </Dropdown.Item>

                                        {/* <Dropdown.Item  >Download</Dropdown.Item> */}

                                        {/* <Dropdown.Item href="#/action-3">Send via EMAIL</Dropdown.Item> */}

                                        <Dropdown.Item
                                            onClick={(e) => toggleStatus(e)}
                                        >
                                            <span
                                                onClick={() =>
                                                    toggleStatus(invoice.id)
                                                }
                                            >
                                                Set status{" "}
                                                {invoice.status !== "paid"
                                                    ? "paid"
                                                    : "unpaid"}
                                            </span>
                                        </Dropdown.Item>

                                        <Dropdown.Item>
                                            <span
                                                onClick={() =>
                                                    deleteInvoice(invoice.id)
                                                }
                                            >
                                                Delete
                                            </span>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* showing the current results/all results number */}
            <p className="result__count">
                Results: {offset + 1}-{offset + invoices.length}/{totalCount}
            </p>

            {/* buttons for setting offsets */}
            <button
                disabled={offset === 0}
                onClick={() => setOffset(offset === 0 ? offset : offset - 3)}
            >
                Previous results
            </button>
            <button
                disabled={offset > Object.keys(invoices).length}
                onClick={() => setOffset(offset + 3)}
            >
                Next results
            </button>
        </div>
    );
}
