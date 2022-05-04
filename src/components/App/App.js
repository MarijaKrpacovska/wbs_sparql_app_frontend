import logo from '../../logo.svg';
import './App.css';
import NewQuery from "../Query/NewQuery/newQuery";
import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route, Routes} from 'react-router-dom'
import SparqlService from "../../repository/sparqlRepository"
import UserService from "../../repository/userRepository"
import Endpoints from "../Endpoint/endpoints";
import QueryResult from "../Result/getResultForQuery/queryResult";
import {Provider} from 'react-redux';
import store from '../../services/store';

import Queries from "../Query/MyQueries/queries";
import QueryDetails from "../Query/QueryDetails/queryDetails";

import UserList from "../User/UserList";
import Login from "../User/Login";
import Register from "../User/Register";
import Verify from "../User/Verify";
import Header from "../Header/header"

import NewEndpoint from "../Endpoint/add/newEndpoint";
import EndpointEdit from "../Endpoint/edit/endpointEdit";
import EndpointsList from "../Endpoint/endpointsList/EndpointsList";
import QueriesList from "../Query/ManageQueries/allQueries/QueriesList";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            endpoints: [],
            queries: [],
            lastResult: [],
            loggedInUser: JSON.parse(localStorage.getItem('loggedInUser')) || {},
            myQueries:[],
            selectedQuery:{},
            selectedEndpoint:{},
            selectedResult:{},
            selectedJsonResult:{},
            verifyResponse:""
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className="container">
                        <Route path={"/endpoints/edit/:id"} exact render={() =>
                            <EndpointEdit onEditEndpoint={this.editEndpoint}
                                         endpoint={this.state.selectedEndpoint}/>}/>

                        <Route path={"/query/:id"} exact render={() =>
                            <QueryDetails selectedQuery={this.state.selectedQuery}
                                          selectedResult={this.state.selectedJsonResult}/>}/>
                        <Route path={"/add-endpoint"} exact render={() =>
                            <NewEndpoint onAddEndpoint={this.addEndpoint}/>}/>
                        <Route path={"/endpoints"} exact render={() =>
                            <Endpoints endpoints={this.state.endpoints}
                                       onDelete={this.deleteEndpoint}
                                       onEdit={this.getEndpoint}/>}
                        />
                        <Route path={"/my-queries"} exact render={() =>
                            <Queries myQueries={this.state.myQueries}
                                     onDetails={this.getQuery}/>}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/register" exact render={() =>
                            <Register onRegister={this.register}/>}/>
                        <Route path="/verify-email" exact render={() =>
                            <Verify onVerify={this.verify}/>}/>

                        <Route path="/users" exact component={UserList}/>
                        <Route path="/users" exact component={() =>
                            <Provider store={store}><UserList/></Provider>}/>
                        <Route path={["/","/new-query"]} exact render={() =>
                            <NewQuery endpoints={this.state.endpoints}
                                      onAddQuery={this.addQuery}/>}/>
                        <Route path={"/manage-endpoints"} exact render={() =>
                            <EndpointsList endpoints={this.state.endpoints}
                                      onDelete={this.deleteEndpoint}
                                      onEdit={this.getEndpoint}/>}/>
                        <Route path={"/manage-queries"} exact render={() =>
                            <QueriesList queries={this.state.queries}
                                           onDelete={this.deleteQuery}/>}/>
                    </div>

                </main>
            </Router>
        );
    }

    componentDidMount() {
        this.loadEndpoints();
        this.loadMyQueries();
        this.loadQueries();
    }

    loadEndpoints = () => {
        SparqlService.fetchEndpoints()
            .then((data) => {
                this.setState({
                    endpoints: data.data
                })
            });
    }
    loadMyQueries = () => {
        SparqlService.fetchMyQueries()
            .then((data) => {
                this.setState({
                    myQueries: data.data
                })
            });
    }
    loadQueries = () => {
        SparqlService.fetchQueries()
            .then((data) => {
                this.setState({
                    queries: data.data
                })
            });
    }
    getQuery = (id) => {
        // console.log("vo getMovie"+id)
        SparqlService.getQuery(id)
            .then((data) => {
                console.log("vo getMovie"+data.data)
                console.log("vo getMovie"+data.data.queryResultId)
                this.getResult(data.data.queryResultId)
                this.setState({
                    selectedQuery: data.data
                })
            })
    }
    getResult = (id) => {
        // console.log("vo getMovie"+id)
        SparqlService.getResult(id)
            .then((data) => {
                console.log("vo getMovie"+typeof (data.data))
                this.setState({
                    selectedResult: data.data
                })
            })
        SparqlService.getJsonResult(id)
            .then((data) => {
                console.log("vo getMovie"+typeof (data.data))
                this.setState({
                    selectedJsonResult: data.data
                })
            })
    }

    deleteEndpoint = (id) => {
        SparqlService.deleteEndpoint(id)
            .then(() => {
                this.loadEndpoints();
            });
    }
    deleteQuery = (id) => {
        SparqlService.deleteQuery(id)
            .then(() => {
                this.loadQueries();
            });
    }

    addQuery = (name, content, endpointId) => {
        console.log("In App.js - addQuery function, endpointId: "+endpointId);
        SparqlService.addQuery(name, content, endpointId)
            .then((data) => {
                console.log("logging data");
                console.log(data.data);
                this.setState({
                    selectedQuery: data.data
                });
            })
    }
    addEndpoint = (name, url) => {
        SparqlService.addEndpoint(name, url)
            .then((data) => {
                this.loadEndpoints();
            })
    }
    getEndpoint = (id) => {
        SparqlService.getEndpoint(id)
            .then((data) => {
                this.setState({
                    selectedEndpoint: data.data
                })
            })
    }

    editEndpoint = (id, name, url) => {
        SparqlService.editEndpoint(id, name, url)
            .then((data) => {
                this.loadEndpoints();
            })
    }

    verify = (code) => {
        console.log("In verify");
        UserService.verify(code)
            .then((data) => {
                console.log("logging data");
                console.log(data.data);
                this.setState({
                    verifyResponse: data.data
                });
            })
    }
    register = (name, email, password, repeatPassword, mobile) => {
        console.log("register");
        UserService.register(name, email, password, repeatPassword,mobile).then(
            this.loadEndpoints
        )
    }


}


export default App;

