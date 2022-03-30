import logo from '../../logo.svg';
import './App.css';
import NewQuery from "../Query/NewQuery/newQuery";
import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route, Routes} from 'react-router-dom'
import SparqlService from "../../repository/sparqlRepository"
import Endpoints from "../Endpoint/endpoints";
import QueryResult from "../Result/queryResult";
import {Provider} from 'react-redux';
import store from '../../services/store';

import Queries from "../Query/MyQueries/queries";
import QueryDetails from "../Query/QueryDetails/queryDetails";

import UserList from "../User/UserList";
import Login from "../User/Login";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            endpoints: [],
            lastResult: [],
            loggedInUser: JSON.parse(localStorage.getItem('loggedInUser')) || {},
            myQueries:[],
            selectedQuery:{},
            selectedResult:{}
        }
    }

    render() {
        return (
            <Router>
                <main>
                    <div className="container">
                        <Route path={"/query/:id"} exact render={() =>
                            <QueryDetails selectedQuery={this.state.selectedQuery}
                                          selectedResult={this.state.selectedResult}/>}/>
                        <Route path={"/endpoints"} exact render={() =>
                            <Endpoints endpoints={this.state.endpoints}/>}/>
                        <Route path={"/my-queries"} exact render={() =>
                            <Queries myQueries={this.state.myQueries}
                                     onDetails={this.getQuery}/>}/>
                        <Route path="/login" exact component={Login}/>

                        <Route path="/users" exact component={UserList}/>
                        <Route path="/users" exact component={() =>
                            <Provider store={store}><UserList/></Provider>}/>
                        <Route path={"/new-query"} exact render={() =>
                            <NewQuery endpoints={this.state.endpoints}
                                      onAddQuery={this.addQuery}/>}/>


                    </div>

                </main>
            </Router>
        );
    }

    componentDidMount() {
        this.loadEndpoints();
        this.loadMyQueries();
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
    }
    addQuery = (name, content, endpointId) => {
        console.log("In App.js - addQuery function, endpointId: "+endpointId);
        SparqlService.addQuery(name, content, endpointId)
            .then((data) => {
                console.log("logging data");
                console.log(data.data);
                this.setState({
                    lastResult: data.data
                });
            })
    }


}


export default App;

