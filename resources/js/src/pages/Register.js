import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { loadUser } from "../actions/auth";
import UserContext from "../context/UserContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

export default function Register(props) {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: "",
        name: "",
        password: "",
        password_confirmation: "",
    });

    const { setUser } = useContext(UserContext);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await axios.post("/register", values);
        const response_data = response.data;

        if (response_data) {
            return console.log(response_data);
        }

        const userData = await loadUser();

        setUser(userData);
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
            <Form className="form-centered">
                <h1>Register</h1>

                <Form.Group className="user-name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="user-email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
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
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="user-password-confirmation">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password_confirmation"
                        value={values.password_confirmation}
                        onChange={handleChange}
                    />
                </Form.Group>
                <br />
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Register
                </Button>

                {/* <span>Name</span>

            <input type="text" autoComplete='off' name="name" value={values.name} onChange={handleChange} />

            <span>Email</span>

            <input type="email" autoComplete='off' name="email" value={values.email} onChange={handleChange} />

            <span>Password</span>

            <input type="password" autoComplete='off' name="password" value={values.password} onChange={handleChange} />

            <span>Password Confirmation</span>

            <input type="password" autoComplete='off' name="password_confirmation" value={values.password_confirmation} onChange={handleChange} />

            <button>Register</button> */}
            </Form>
        </div>
    );
}
