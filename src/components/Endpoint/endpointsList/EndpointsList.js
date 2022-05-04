import React from 'react';
import ReactPaginate from 'react-paginate'
import EndpointTerm from '../endpointTerm/endpointTerm';
import {Link} from 'react-router-dom';
import sparqlRepository from "../../../repository/sparqlRepository";

class EndpointsList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 10
        }
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.endpoints.length / this.state.size);
        const endpoints = this.getEndpointsPage(offset, nextPageOffset);
        console.log(endpoints, pageCount)

        return (
            <div className={"container mm-4 mt-5"}>
                <h3>Manage Endpoints</h3>
                <div className={"row"}>
                    <div className={"table-responsive"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Url</th>
                            </tr>
                            </thead>
                            <tbody>
                            {endpoints}
                            </tbody>
                        </table>
                    </div>
                    <div className="col mb-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <Link className={"btn btn-block btn-dark"} to={"/endpoints/add"}>Add new endpoint</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <ReactPaginate previousLabel={"back"}
                               nextLabel={"next"}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"break-me"}
                               pageClassName={"ml-1"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination m-4 justify-content-center"}
                               activeClassName={"active"}/>
            </div>
        )
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        console.log(selected)
        this.setState({
            page: selected
        })
    }

    getEndpointsPage = (offset, nextPageOffset) => {
        console.log(offset, nextPageOffset)
        return this.props.endpoints.map((term, index) => {
            return (
                <EndpointTerm term={term} onDelete={this.props.onDelete} onEdit={this.props.onEdit}/>
            );
        }).filter((endpoint, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }
}

export default EndpointsList;
