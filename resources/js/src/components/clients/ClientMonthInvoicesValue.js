import Icon from '@mdi/react';
import { mdiWallet } from '@mdi/js';
import Alert from 'react-bootstrap/Alert';

const ClientMonthInvoicesValue = ({ clientInvoicesData }) => {

    console.log(clientInvoicesData);

    let totalMounthAmount = 0;
    let now = new Date();



    //console.log(now.getMonth() + 1);

    clientInvoicesData.forEach(element => {

        const date = new Date(element.issued_on);

        //console.log(date.getMonth()+1);

        if (date.getMonth() == now.getMonth())
            totalMounthAmount += element.total_amount;
    });

    return (

        <Alert variant="secondary">
            <div className="sum-container-element">
                <Alert.Heading>This month invoices</Alert.Heading>
                <p>
                    {totalMounthAmount}
                </p>
            </div>
            <Icon path={mdiWallet}
                size={2}
                color="gray" />
        </Alert>

    );
}

export default ClientMonthInvoicesValue;