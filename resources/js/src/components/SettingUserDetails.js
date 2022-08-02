import { useEffect, useState } from "react";
import React from 'react';

function SettingUserDetails() {

    const [details, setDetails] = useState(null);

  const url = "/api/suppliers/current";

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
  
     console.log(data);
   
    setDetails(data);
  
  };

  useEffect(() => {
    fetchData();
  }, []);
  
return (
        <div className="userdetails__box">
            <div className="userdetails__heading">Settings</div>

            { !details ?
            <h2>LOL</h2>
            :
            <div className="userdetails__container">
                <span className="userdetails__detail"><strong>BANK: </strong>{details.bank_account.bank_name}</span>


            </div>
            }

        </div>
    )
}

export default SettingUserDetails;