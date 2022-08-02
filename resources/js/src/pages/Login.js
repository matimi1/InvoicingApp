import axios from "axios";
import React, { useState, useContext } from "react";
import { loadUser } from "../actions/auth";
import UserContext from "../context/UserContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await axios.post("/login", values);
        const response_data = response.data;

        if (typeof response_data === "string") {
            return console.log(response_data);
        }

        const data = await loadUser();

        setUser(data);
        navigate("/dashboard");
    };

    const handleChange = (event) => {
        setValues((previous_values) => {
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
            };
        });
    };

    return (
        <div className="form-container">
            <Form
                className="form-centered"
                // action="/login" method="post" onSubmit={handleSubmit}
            >
                <h1>Account login</h1>
                <Form.Group className="user-login">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="user-password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        autoComplete="off"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                </Form.Group>
                <br />
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Log in
                </Button>
                <br />
                <p>
                    or <Link to="/register">create an account</Link>
                </p>

                {/* <span>Email</span>
            <input type="email" autoComplete='off' name="email" value={values.email} onChange={handleChange} />

            <span>Password</span>
            <input type="password" autoComplete='off' name="password" value={values.password} onChange={handleChange} /> */}

                {/* <button>Login</button> */}
            </Form>
        </div>
    );
}
