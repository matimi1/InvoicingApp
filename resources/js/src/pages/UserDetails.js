import CompanyDetails from "../components/CompanyDetails";
import React from 'react';
import PaymentDetails from "../components/PaymentDetails";
import SettingUserDetails from "../components/SettingUserDetails";



function UserDetails () {

return (
    <div className="userdetails__section">

    <h1><strong>User Details</strong></h1>
    <CompanyDetails />
    
    <PaymentDetails />

    {/* <SettingUserDetails /> */}
    
    </div>
)
}

export default UserDetails;