import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {NavDropdown} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {FormControl} from "react-bootstrap";

const header = (props) => {
    let authenticate
    let myQueries
    if (localStorage.jwtToken) {
        myQueries = (<Link className="nav-link" to={"/my-queries"}>My Queries</Link>);
        authenticate = (<button className="btn btn-outline-info my-2 my-sm-0"
                                onClick={() => localStorage.removeItem("jwtToken")}>Logout</button>);
    } else {
        myQueries = (<li></li>);
        authenticate = (<ul><li><Link className="btn btn-outline-info my-2 my-sm-0" to={"/login"}>Login</Link>
        <Link className="btn btn-outline-info my-2 my-sm-0" to={"/register"}>Register</Link></li></ul>);
    }

    let myEndpointManagement
    let myQueriesManagement
    if (localStorage?.roles?.includes("ROLE_ADMIN")) {
        myEndpointManagement = (<Link className="nav-link" to={"/manage-endpoints"}>Manage Endpoints</Link>);
        myQueriesManagement = (<Link className="nav-link" to={"/manage-queries"}>Manage Queries</Link>);
    } else {
    }

    return (
        <header>

            {/*<nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark">
                <div className={"container"}>
                <a className="navbar-brand" href="/new-query">Sparql tool</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/new-query"}>New Query</Link>
                        </li>
                        <li  className="nav-item active">
                            {myQueries}
                        </li>
                    </ul>
                    <form className="form-inline mt-2 mt-md-0 ml-4">
                        {authenticate}
                    </form>
                </div>
                </div>
            </nav>*/}
            <Navbar bg="dark" className={"navbar-dark"} expand="lg">
                <div className={"container"}>
                    <Navbar.Brand href="/new-query">SPARQL tool</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to={"/new-query"}>New Query</Link>
                                </li>
                                <li  className="nav-item active">
                                    {myQueries}
                                </li>
                                <li>
                                    {myEndpointManagement}
                                </li>
                                <li>
                                    {myQueriesManagement}
                                </li>
                            </ul>
                        </Nav>
                        <Form className="d-flex">

                            {authenticate}
                        </Form>
                    </Navbar.Collapse>
                </div>

            </Navbar>

        </header>
    )
}

export default header;
