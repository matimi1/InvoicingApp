import ClientDetails from '../components/clients/ClientDetails';
import { useParams } from "react-router-dom";
import ClientInvoicesList from '../components/clients/ClientInvoicesList';
import Button from 'react-bootstrap/Button';
import ClientTotalInvoicesValue from "../components/clients/ClientTotalInvoicesValue";
import ClientMonthInvoicesValue from '../components/clients/ClientMonthInvoicesValue';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

const Client = () => {
    const params = useParams();

    //console.log(params);

    const [clientInvoicesData, setClientInvoicesData] = useState([]);
    const [status, setStatus] = useState('new')

    const url = `/api/clients/${params.number}/invoices`;

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        //   console.log(data);
        setClientInvoicesData(data)
    }

    const toggleStatus = async (id) => {

        const res = await axios({
            url: '/api/invoices/updatestatus/' + id,
            method: 'put'
        })
        return fetchData();
    }

    useEffect(() => {
        fetchData();

    }, [status]);

    return (
        <div className="action-page">
            <Button variant="primary"><Link to={`/create-invoice/${params.number}`}
            // clientData={clientData}
            >Create new invoice</Link>
            </Button>
            <br />
            <br />
            <div className="sum-container">
                <ClientTotalInvoicesValue clientInvoicesData={clientInvoicesData} />
                <ClientMonthInvoicesValue clientInvoicesData={clientInvoicesData} />
            </div>
            <ClientDetails number={params.number} />
            <br />
            <br />
            <ClientInvoicesList clientInvoicesData={clientInvoicesData} setClientInvoicesData={setClientInvoicesData} toggleStatus={toggleStatus} />
        </div>
    );
};

export default Client;
