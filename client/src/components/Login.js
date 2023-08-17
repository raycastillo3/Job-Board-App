import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const Login = ({ setAuth }) => {

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const { email, password } = inputs;

    const onChange = (e) => {
        setInputs({...inputs, [e.target.name] : e.target.value})
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { email, password };

            const response = await fetch("http://localhost:5000/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            const parseResponse = await response.json();

            if (parseResponse.token) {
                localStorage.setItem("token", parseResponse.token);
                setAuth(true);

                toast.success("Login successfully!");
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
                <h2 className="my-4"> Welcome! Login or register to get started. </h2>
                <form onSubmit={onSubmitForm}>
                    <input type="email" name="email" placeholder="Email" className="form-control my-3" value={email} onChange={e => onChange(e)}/>
                    <input type="password" name="password" placeholder="Password" className="form-control my-3" value={password} onChange={e => onChange(e)}/>
                    <button className="btn  btn-primary btn-block">Login</button>
                </form>
                <div className="d-flex flex-column mt-2">
                <Link to="">Forgot Password</Link>
                <Link to="/register">Sign Up</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Login
