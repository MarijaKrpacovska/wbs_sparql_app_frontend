import React from "react";
import {Link} from "react-router-dom";

const Queries = (props) => {
    console.log(props);
    return(
        <div>
            <h3>My Queries:</h3>
            <table className={"table table-striped"}>
                <thead>
                <tr>
                    <th scope={"col"}>Name</th>
                    <th scope={"col"}>Query</th>
                    <th scope={"col"}>Timestamp</th>
                    <th scope={"col"}>Details</th>
                </tr>
                </thead>
                <tbody>
                {props.myQueries.map((term) => {
                    return (
                        <tr key={term.id}>
                            <td>{term.name}</td>
                            <td>{term.content}</td>
                            <td>{term.timestamp}</td>
                            <id>
                                <Link
                                    onClick={() => {
                                        props.onDetails(term.id);
                                    }}
                                    to={`/query/${term.id}`}>
                                    details
                                </Link>
                            </id>
                        </tr>
                    );
                })}
                </tbody>
            </table>

        </div>
    )
}

export default Queries;