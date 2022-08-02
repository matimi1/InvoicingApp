
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from "axios";



const ClientInvoicesList = ({ clientInvoicesData, setClientInvoicesData, toggleStatus }) => {
    // const [clientInvoicesData, setClientInvoicesData] = useState([]);

    // const url = `/api/clients/${number}/invoices`;

    // const fetchData = async () => {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log(data);
    //     setClientInvoicesData(data);
    // }

    // useEffect(() => {
    //     fetchData();

    // }, []);




    return (
        <div className="clients-invoices" >
            {clientInvoicesData &&
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Amount</th>
                            <th>Issued on</th>
                            <th>Due date</th>
                            <th>Status</th>
                            <th>More options</th>
                        </tr>
                    </thead>
                    <tbody>

                        {clientInvoicesData.map((invoice) =>
                            <tr key={invoice.id}>
                                <td>{invoice.number}</td>
                                <td>{invoice.total_amount} CZK</td>
                                <td>{invoice.issued_on}</td>
                                <td>{invoice.due_date}</td>
                                <td>{invoice.status}</td>

                                <td>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                            Select action
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href={`/invoice-template/${invoice.id}`}>Show</Dropdown.Item>
                                            {/* <Dropdown.Item href="#/action-2">Download</Dropdown.Item> */}
                                            {/* <Dropdown.Item href="#/action-3">Send via EMAIL</Dropdown.Item> */}
                                            <Dropdown.Item><span onClick={() => toggleStatus(invoice.id)}>Set status {invoice.status !== 'paid' ? 'paid' : 'unpaid'}</span></Dropdown.Item>
                                            <Dropdown.Item href="#/action-3"><span onClick={() => deleteInvoice(invoice.id)}>Delete</span></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>

                            </tr>
                        )
                        }
                    </tbody>
                </Table>
            }
        </div >)
}

export default ClientInvoicesList;