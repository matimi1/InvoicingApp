import Button from 'react-bootstrap/Button';

const ClientDetailsShow = ({ clientData, editing, setEditing }) => {

    return (
        <>
            <h3>{clientData.name}</h3>
            <div className="client-details-items">
                <div className="client-details-items item">
                    <p><strong>ICO/REG N.</strong> {clientData.reg_number}</p>
                    <p><strong>DIC/VAT N.</strong> {clientData.reg_number_EU}</p>
                    <p><strong>Address: </strong>{clientData.address.postal_code}, {clientData.address.city} {clientData.address.street_name} {clientData.address.house_number}/{clientData.address.house_orient} </p>
                </div>
                <div className="client-details-items item">
                    <p><strong>Registration court: </strong> {clientData.reg_type_court}</p>
                    <p><strong>Registration file:</strong> {clientData.reg_type_file}</p>
                    <p><strong>Phone: </strong>{clientData.phone}</p>
                    <p><strong>Email: </strong>{clientData.email}</p>
                </div>
                <div className="client-details-items item">
                    <Button className="button-container" type="button" onClick={() => setEditing(true)}>
                        Edit
                    </Button>
                </div>
            </div>
        </>
    );
}

export default ClientDetailsShow;