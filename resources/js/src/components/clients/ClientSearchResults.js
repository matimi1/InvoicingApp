import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ClientMinInfo from './ClientMinInfo';
import Table from 'react-bootstrap/Table';


const ClientSearchResults = ({ query }) => {

    // const params = useParams();
    const [searchResults, setSearchResults] = useState([]);


    // const url = `/api/clients/search/${query}`;

    // const fetchData = async () => {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log(data);
    //     setSearchResults(data);
    // }

    // useEffect(() => {
    //     fetchData();

    // }, [query]);


    return (
        <div className="client-result-container" >
            {searchResults &&
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Reg number</th>
                            <th>Invoices count</th>
                            <th>Total sum</th>
                        </tr>
                    </thead>
                    <tbody>

                        {searchResults.map((client, i) =>
                            <ClientMinInfo client={client} key={i} />
                            // <Link to={`/clients/${client.reg_number}`} key={i}>{client.name}</Link>
                        )
                        }
                    </tbody>
                </Table>
            }
        </div >)
}

export default ClientSearchResults;