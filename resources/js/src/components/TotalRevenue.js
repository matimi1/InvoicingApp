import { useContext, useEffect,useState } from "react";
import Card from 'react-bootstrap/Card';
import CardHeader from "react-bootstrap/esm/CardHeader";
import InvoicesContext from "../context/InvoicesContext";


// this component will show total amlount of already paid invoices
export default function TotalRevenueInvoices(){


    const { revenue } = useContext(InvoicesContext)
    //currently logged in user

    return(
        
        <Card
            bg='Secondary'
            key='Secondary' 
            text="dark"
            style={{ width: '14rem' }}
            className="mb-2"
        >
            <CardHeader>
                Total Revenue:
            </CardHeader>
            <Card.Body>
             <Card.Title>{revenue || 0} CZK</Card.Title>
              </Card.Body>
        </Card>
    )
}