import React from 'react';
import ReactPaginate from 'react-paginate'
import QueryTerm from "../queriesTerm/queryTerm";
import {Link} from 'react-router-dom';
import sparqlRepository from "../../../../repository/sparqlRepository";

class QueriesList extends React.Component {

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
        const pageCount = Math.ceil(this.props.queries.length / this.state.size);
        const queries = this.getQueriesPage(offset, nextPageOffset);
        console.log(queries, pageCount)

        return (
            <div className={"container mm-4 mt-5"}>
                <h3>Manage Queries</h3>
                <div className={"row"}>
                    <div className={"table-responsive"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Content</th>
                                <th scope={"col"}>Type</th>
                                <th scope={"col"}>Endpoint</th>
                                <th scope={"col"}>User</th>
                                <th scope={"col"}>Execution time</th>
                            </tr>
                            </thead>
                            <tbody>
                            {queries}
                            </tbody>
                        </table>
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

    getQueriesPage = (offset, nextPageOffset) => {
        console.log(offset, nextPageOffset)
        return this.props.queries.map((term, index) => {
            return (
                <QueryTerm term={term} onDelete={this.props.onDelete}/>
            );
        }).filter((query, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }
}

export default QueriesList;
