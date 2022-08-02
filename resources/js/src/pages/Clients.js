import ClientSearchBar from '../components/clients/ClientSearchBar';
import ClientSearchResults from '../components/clients/ClientSearchResults';
import { useEffect, useState } from "react";
import ClientList from '../components/clients/ClientList';
import Button from 'react-bootstrap/Button';
import ModalGetClientFromAres from '../components/clients/ModalGetClientFromAres';
import ClientDetailsEdit from '../components/clients/ClientDetailsEdit';



const Clients = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [showAres, setShowAres] = useState(false);
    const [clientData, setClientData] = useState(null);
    const [showEdit, setShowEdit] = useState(false);

    const [clients, setClients] = useState([]);
    // const [clientsFiltered, setClientsFiltered] = useState([]);

    const url = `/api/clients/`;

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        //     console.log(data);
        setClients(data);
        //   setClientsFiltered(data);
    }

    useEffect(() => {

        fetchData();

    }, [showEdit, clientData]);


    return (
        <div className="action-page">
            <Button variant="primary" onClick={() => setShowAres(true)}>Add new client</Button>
            <br />

            <br />
            <ModalGetClientFromAres
                showAres={showAres}
                setShowAres={setShowAres}
                setClientData={setClientData}
                setShowEdit={setShowEdit}
                setShowCreateForm={() => { }}
            // flashMessage={flashMessage}
            // handleSubmit={handleSubmit}
            />
            {clientData &&
                <div className={`client-details ${!showEdit && "hidden"}`}>
                    <ClientDetailsEdit clientData={clientData} setEditing={(e) => { }} setShowEdit={setShowEdit} />
                    <br />
                </div>
            }

            <ClientSearchBar
                searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            {
                // <ClientSearchResults query={searchQuery} />
                // : 
                <ClientList query={searchQuery} clients={clients} />
            }


        </div>
    );
}

export default Clients;