import { mdiChartAreasplineVariant } from '@mdi/js';
import Icon from '@mdi/react';
import Alert from 'react-bootstrap/Alert';

const ClientTotalInvoicesValue = ({ clientInvoicesData }) => {

    //console.log(clientInvoicesData);

    let totalAmount = 0;

    clientInvoicesData.forEach(element => {
        totalAmount += element.total_amount;
    });
    return (

        <Alert variant="secondary">
            <div className="sum-container-element">
                <Alert.Heading>All issued invoices value:</Alert.Heading>
                <p>
                    {totalAmount}
                </p>
            </div>
            <Icon path={mdiChartAreasplineVariant}
                size={2}
                color="gray"
            />
        </Alert>

    );
}

export default ClientTotalInvoicesValue;