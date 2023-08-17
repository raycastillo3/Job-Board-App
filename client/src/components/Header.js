import React from "react";
import { toast } from "react-toastify";

const Header = ({ setAuth, isAuth }) => {

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        // setAuth(false);
        toast.success("Logged out successfully!");
        window.location = '/login'
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img ng-src="https://exp.unqork.io/basta/styles/basta/assets/images/logo-basta-blue.svg" className="navbar-brand client-header__logo " height="36" alt="Basta Logo" src="https://exp.unqork.io/basta/styles/basta/assets/images/logo-basta-blue.svg"></img>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                          {isAuth && <button className="btn btn-primary" onClick={e => logout(e)}>Log out</button>}
                        </li>
                </ul>
                </div>
            </nav>
        </header>
    )
};

export default Header;
