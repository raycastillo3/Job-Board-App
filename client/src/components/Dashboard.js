import Panel from "../components/Panel";
import ListJobs from '../components/ListJobs';
import AddNewJob from '../components/AddNewJob';
import React, { Fragment, useState, useEffect } from "react";


const Dashboard = ({setAuth}) => {
    const [name, setName] = useState("");

    const getName = async () => {
        try {
            const response = await fetch("http://localhost:5000/dashboard/", {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const parseResponse = await response.json();

            setName(parseResponse.user_name)

        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getName();
    }, []);

    return (
        <Fragment>
        <Panel name={name} />
        <AddNewJob/>
        <ListJobs/>
        </Fragment>
    )
}

export default Dashboard;
