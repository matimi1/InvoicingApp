import "/css/home.css";
import Button from "react-bootstrap/Button";

const Home = () => {
    return (
        <div className="main__container">
            <div className="top">
                <div className="left">
                    <h2>Ease your invoicing</h2>
                    <h5>
                        With us, you will not have to worry about your invoices
                        ever again!
                    </h5>
                    <Button
                        variant="primary"
                        className="btn"
                        href="/howitworks"
                    >
                        How It Works
                    </Button>
                </div>
                <div className="right">
                    <img
                        className="header-logo-img"
                        src="../images/logo.svg"
                        alt="logo"
                    />
                </div>
            </div>
            <div className="bottom">
                <div className="benefit__one">
                    <img
                        className="icon-img"
                        src="../images/bar-chart.png"
                        alt="logo"
                    />
                    <h5>Statistics</h5>
                    <p>
                        Have all the statistics that you need for your personal
                        desicision making at palm of your hands
                    </p>
                </div>
                <div className="benefit__two">
                    <img
                        className="icon-img"
                        src="../images/customer.png"
                        alt="logo"
                    />
                    <h5>Know your customer</h5>
                    <p>
                        Save and export easily all the data for just the one
                        customer you really need in the moment
                    </p>
                </div>
                <div className="benefit__three">
                    <img
                        className="icon-img"
                        src="../images/tick.png"
                        alt="logo"
                    />
                    <h5>Simple</h5>
                    <p>
                        It just works. Do not spend any necessary time with
                        setting things up. Just register and in two minutes you
                        are good to go.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
