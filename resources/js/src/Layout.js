import React, { Fragment, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserContext from "./context/UserContext";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import InvoiceTemplate from "./components/InvoiceTemplate";

//pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import MainDashboard from "./pages/MainDashboard";
import CreateInvoice from "./pages/CreateInvoice";
import UserDetails from "./pages/UserDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Client from "./pages/Client";
import Clients from "./pages/Clients"
import HowItWorks from "./pages/Howitworks";

const Layout = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="layout">
            <Router>
                <Header />
                <div className="main-container">
                    <Sidebar />
                    <main id="main">
                        <Routes>
                            {user ? (
                                <Fragment>
                                    <Route
                                        exact
                                        path="/"
                                        element={<Home />}
                                    />
                                    <Route
                                        exact
                                        path="/home"
                                        element={<Home />}
                                    />
                                    <Route
                                        exact
                                        path="/blog"
                                        element={<Blog />}
                                    />
                                    <Route
                                        exact
                                        path="/contact"
                                        element={<Contact />}
                                    />
                                    {/* <Route exact path="/about" element={<About />} /> */}
                                    <Route
                                        exact
                                        path="/dashboard"
                                        element={<MainDashboard />}
                                    />
                                    <Route
                                        exact
                                        path="/userdetails"
                                        element={<UserDetails />}
                                    />
                                    <Route
                                        exact
                                        path="/create-invoice"
                                        element={<CreateInvoice />}
                                    />
                                    <Route exact path="/clients" element={<Clients />} />

                                    <Route
                                        exact
                                        path="/clients/:number"
                                        element={<Client />}
                                    />
                                    {/* Path to test invoice template */}
                                    <Route
                                        path="/invoice-template/:invoice_number"
                                        element={<InvoiceTemplate />}
                                    />

                                    <Route
                                        exact
                                        path="/howitworks"
                                        element={<HowItWorks />}
                                    />
                                    <Route
                                        path="/create-invoice/:client_number"
                                        element={<CreateInvoice />}
                                    />
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <Route
                                        exact
                                        path="/"
                                        element={<Home />}
                                    />
                                    <Route
                                        exact
                                        path="/blog"
                                        element={<Blog />}
                                    />
                                    <Route
                                        exact
                                        path="/contact"
                                        element={<Contact />}
                                    />
                                    <Route
                                        exact
                                        path="/howitworks"
                                        element={<HowItWorks />}
                                    />
                                    <Route
                                        exact
                                        path="/login"
                                        element={<Login />}
                                    />
                                    <Route
                                        exact
                                        path="/register"
                                        element={<Register />}
                                    />
                                </Fragment>
                            )}
                        </Routes>
                    </main>
                </div>
            </Router>
            <Footer />
        </div>
    );
};

export default Layout;
