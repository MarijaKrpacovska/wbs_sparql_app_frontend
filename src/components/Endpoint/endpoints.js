import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";

const Endpoints = (props) => {

    const [paginationData, updatePaginationData] = React.useState({
        page: 0,
        size: 2
    })


    console.log(props);
    const handlePageClick = (data) => {
        let selected = data.selected;
        console.log(selected)
        updatePaginationData({
            ...paginationData,
            page: selected
        })
    }
    let pageCount = Math.ceil(props.endpoints.length / paginationData.size);
    useEffect(() => {
        pageCount = Math.ceil(props.endpoints.length / paginationData.size);
    });

    return(
        <div>
            <div className="col mb-3 mt-4 align-content-end">
                <div className="row align-content-end">
                    <div className="col-sm-10 col-md-10 align-content-end">
                        <h3>Manage endpoints:</h3>
                    </div>
                    <div className="col-sm-2 col-md-2 align-content-end">
                        <Link className={"btn btn-block btn-dark"} to={"/products/add"}>Add new endpoint</Link>
                    </div>
                </div>
            </div>

            <table className={"table table-striped"}>
                <thead>
                <tr>
                    <th scope={"col"}>Name</th>
                    <th scope={"col"}>Url</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {props.endpoints.map((term) => {
                    return (
                        <tr key={term.id}>
                            <td>{term.name}</td>
                            <td> <a href={term.url}>{term.url}</a></td>
                            <td className={"text-right"}>
                                <a title={"Delete"} className={"btn btn-danger mr-1"}
                                   onClick={() => props.onDelete(term.id)}>
                                    Delete
                                </a>
                            </td>
                            <td>
                                <Link className={"btn btn-secondary ml-3"}
                                      onClick={() => props.onEdit(term.id)}
                                      to={`/endpoints/edit/${term.id}`}>
                                    Edit
                                </Link>
                            </td>

                        </tr>
                    );
                })}
                </tbody>
            </table>
            <ReactPaginate previousLabel={"back"}
                           nextLabel={"next"}
                           breakLabel={<a href="/#">...</a>}
                           breakClassName={"break-me"}
                           pageClassName={"ml-1"}
                           pageCount={pageCount}
                           marginPagesDisplayed={2}
                           pageRangeDisplayed={6}
                           onPageChange={handlePageClick}
                           containerClassName={"pagination m-4 justify-content-center"}
                           activeClassName={"active"}/>

        </div>
    )
}

export default Endpoints;