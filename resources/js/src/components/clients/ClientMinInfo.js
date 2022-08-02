import { Link } from 'react-router-dom';
// import Table from 'react-bootstrap/Table';

const ClientMinInfo = ({ client }) => {

    //console.log(client);

    return (
        <tr className='clients-min-info'>
            <td><Link to={`/clients/${client.reg_number}`}>{client.name}</Link></td>
            <td>{client.reg_number}</td>
            <td>{client.invoices_count}</td>
            <td>{client.total_sum}</td>
        </tr >)
}

export default ClientMinInfo;