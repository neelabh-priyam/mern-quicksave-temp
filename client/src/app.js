import React, { useState } from "react";
import axios from "axios";

import "./app.css";

function App() {
    const [details, setDetails] = useState({
        name: "",
        email: "",
        password: "",
    });

    const changeState = (event) => {
        setDetails((currentDetails) => {
            return {
                ...currentDetails,
                [event.target.name]: event.target.value,
            };
        });
    };

    const register = async () => {
        axios
            .post("/api/auth/register", {
                name: details.name,
                email: details.email,
                password: details.password,
            })
            .then((response) => {
                console.log(response.data);
            });
    };

    const getInfo = async () => {
        axios.get("/api/info").then((response) => {
            console.log(response.data);
        });
    };

    const login = async () => {
        axios.get("/api/auth/login").then((response) => {
            console.log(response.data);
        });
    };

    const getUsers = async () => {
        axios.get("/api/users").then((response) => {
            console.log(response.data);
        });
    };

    const getUser = async () => {
        axios
            .post("/api/user", {
                email: details.email,
            })
            .then((response) => {
                console.log(response.data);
            });
    };

    return (
        <div className="app">
            <div className="form">
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    value={details.name}
                    onChange={changeState}
                />
                <input
                    type="email"
                    placeholder="email"
                    name="email"
                    value={details.email}
                    onChange={changeState}
                />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={details.password}
                    onChange={changeState}
                />
                <button type="submit" onClick={register}>
                    Submit
                </button>
                <div className="options">
                    <button className="op-1" onClick={getInfo}>
                        Get Info
                    </button>
                    <button className="op-2" onClick={login}>
                        Login
                    </button>
                    <button className="op-3" onClick={getUsers}>
                        Get Users
                    </button>
                    <button className="op-4" onClick={getUser}>
                        Get User
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
