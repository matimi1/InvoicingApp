import { useEffect,useState } from "react";
import Card from 'react-bootstrap/Card';
import CardHeader from "react-bootstrap/esm/CardHeader";

// this component will show total amlount of already paid invoices
export default function TotalValueInvoices(){

    // function to sum all paid invoices fetched from API
    let sum = 0; 
    const sumOfIssuedInvoices = () => {
    for (let i = 0; i < invoices.length; i++) {
        sum += invoices[i];
    }return <>{sum}</>
}
    //state to store all paid invoices into
    const [invoices, setInvoices] = useState([])
    const url = 'api/invoices/issued';


    //currently logged in user
    const fetchData = async() => {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    setInvoices(data);
    };

    //watching fetch data and also revenues function 
    useEffect(() => {
        fetchData(), sumOfIssuedInvoices();
    }, []);

    
  

    return(
        <Card
        bg='Secondary'
        key='Secondary' 
        text="dark"
        style={{ width: '14rem' }}
        className="mb-2"
        >
            <CardHeader>
               All issued invoices value:
            </CardHeader>
            <Card.Body>
             <Card.Title>{sumOfIssuedInvoices()} CZK</Card.Title>
              </Card.Body>
        </Card>
        
    )
}