import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = ({setAuth}) => {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        name: ""
    });

    const { email, password, name } = inputs;

    const onChange = (e) => {
        setInputs({...inputs, [e.target.name] : e.target.value})
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {

            const body = { email, password, name };

            const response = await fetch("http://localhost:5000/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            const parseResponse = await response.json();

            if (parseResponse.token) {
                localStorage.setItem("token", parseResponse.token);
                setAuth(true);
                toast.success("Registered successfully!");
            } else {
                setAuth(false);
                toast.error(parseResponse);
            }

        } catch (err) {
            console.error(err.message)
        }

    }
    return (
        <Fragment>

        <div className="col-lg-6 mt-5">
            <h2 className="my-4">Welcome! Register or log in to get started</h2>
            <form onSubmit={onSubmitForm}>
                <input type="text" name="name" placeholder="Name" className="form-control my-3" value={name} onChange={e => onChange(e)}/>
                <input type="email" name="email" placeholder="Email" value={email}  className="form-control my-3" onChange={e => onChange(e)}/>
                <input type="password" name="password" placeholder="Password" className="form-control my-3" value={password} onChange={e => onChange(e)}/>
                <button className="btn  btn-primary btn-block">Submit</button>
            </form>
            <div className="mt-2">
                <Link to="/login" > Log in</Link>
            </div>
        </div>
        </Fragment>
    )
}

export default Register
