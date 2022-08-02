import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const ClientSearchBar = ({ searchQuery, setSearchQuery }) => {

    return (
        <Form className="client-search-form">

            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control type="text" placeholder="Enter client number or client name" onChange={(e) => setSearchQuery(e.target.value)} />

            {/* <Button variant="primary"><Link to={`./search/${searchQuery}`}>Search</Link></Button> */}

        </Form>
    );
}

export default ClientSearchBar;