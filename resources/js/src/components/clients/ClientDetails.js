import { useEffect, useState, Fragment } from "react";
import ClientDetailsShow from "./ClientDetailsShow";
import ClientDetailsEdit from "./ClientDetailsEdit";
//import axios from 'axios';

const ClientDetails = ({ number }) => {

    const [clientData, setClientData] = useState(null);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [editing, setEditing] = useState(false);

    const url = `/api/clients/${number}`;

    const fetchData = async () => {
        //console.log(url);

        const response = await fetch(url);
        const data = await response.json();
        // console.log(data[0]);
        setClientData(data[0]);
        setDataLoaded(true);
    }

    useEffect(() => {
        fetchData();


    }, [
        editing,
        //clientData
    ]
    );


    return (
        <Fragment>
            {!dataLoaded ?
                <p>Loading...</p>
                :
                <div className="client-details">
                    {clientData &&

                        <Fragment>

                            {editing ? (<ClientDetailsEdit clientData={clientData} setEditing={setEditing} setShowEdit={(e) => { }} />
                            )
                                : (<ClientDetailsShow clientData={clientData} editing={editing} setEditing={setEditing} />

                                )}
                        </Fragment>

                    }
                </div>
            }
        </Fragment>
    );
}

export default ClientDetails;