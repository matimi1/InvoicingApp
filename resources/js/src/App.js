import React from 'react';
import { useEffect, useState } from "react";
import { loadUser } from "./actions/auth";
import UserContext from "./context/UserContext";
import Layout from "./Layout";


export default function App() {

    const [user, setUser] = useState(null)
    const [loadingUser, setLoadingUser] = useState(false)


    useEffect(() => {


        (async () => {

            const res = await loadUser()
            console.log(res)
            if (typeof res === 'string') {

                setUser(null)
                return console.log(res)
            }

            console.log(res)
            setUser(res)


        })()

    }, [])

    return (
        <UserContext.Provider value={{ user, setUser, loadingUser, setLoadingUser }}>

            <Layout />

        </UserContext.Provider>
    )
}