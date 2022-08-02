import CreateNewInvoice from "../components/CreateNewInvoice";
import { useParams } from "react-router-dom";


const CreateInvoice = () => {
    const params = useParams();
    console.log(params);


    return (
        <div className="action-page">
            <h1>Create new invoice</h1>

            {/* <h3>Create new invoice form component</h3> */}
            <CreateNewInvoice client_number={params.client_number} />
        </div>
    );
};

export default CreateInvoice;
