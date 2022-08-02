// import { use } from "browser-sync";
import { useEffect, useState } from "react";
import TotalRevenueInvoices from "../components/TotalRevenue";
import TotalValueInvoices from "../components/TotalValueInvoices";
import ThisMonthInvoicesValue from "../components/ThisMonthInvoicesValue";
import InvoicesList from "../components/InvoicesList";
import InvoicesContext from "../context/InvoicesContext";

export default function MainDashboard() {
    const [supplier, setSupplier] = useState({});

    const [invoices, setInvoices] = useState([]);


    const [revenue, setRevenue] = useState(null)

    const url = '/api/suppliers/current';
    //currently logged in use

    const fetchData = async () => {
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
        setSupplier(data);

    };

    useEffect(() => {
        fetchData();
    }, []);

    const revenues = async () => {
        const resp = await fetch('api/invoices/paid');
        const paidInvoices = await resp.json();
        const value = await paidInvoices.reduce((a, b) => (a + b), 0)
        setRevenue(value)
    }


    useEffect(() => {
        revenues();
    }, [invoices]);

    console.log(supplier);

    return (
        <InvoicesContext.Provider value={{ invoices, setInvoices, revenue }}>
            <div className="action-page">
                <h2>Welcome {supplier.name} !</h2>
                <h3>Invoices overview:</h3>
                <div className="dashboard__cards">
                        <TotalRevenueInvoices />
                        <TotalValueInvoices />
                        <ThisMonthInvoicesValue />
                </div>
                <InvoicesList />
            </div>
        </InvoicesContext.Provider>
    )
}