import React, { useState, useEffect, useContext } from "react";
import { logout } from "../actions/auth";
import UserContext from "../context/UserContext";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link, useNavigate } from "react-router-dom";
import avatar from "/images/avatar.png";
import { mdiLogout } from "@mdi/js";
import { mdiCog } from "@mdi/js";
import Icon from "@mdi/react";

const About = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        const res = await logout();

        if (res) {
            return console.log(res);
        }
        setUser(null);
        navigate("/");
    };

    if (!user) return null;

    return (
        <Dropdown>
            <Dropdown.Toggle variant="Secondary">
                <div className="user-info-container">
                    <div className="user-info-container-avatar">
                        <img src={avatar} alt="" />
                    </div>
                    <div className="user-info-container-text">
                        <p>
                            <strong> {user.name} </strong>
                        </p>
                        <p> {user.email} </p>
                    </div>
                </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item as="button">
                    <Icon path={mdiCog} color="gray" size={1} />
                    <Link to={`/userdetails`}>Company details</Link>
                </Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => handleLogout()}>
                    <Icon path={mdiLogout} color="gray" size={1} />
                    <span>Log out</span>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default About;
