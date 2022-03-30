import React from "react";
import {Link} from "react-router-dom";

const QueryResult = (props) => {
    console.log(props);
    return(
        <div>
            <table className={"table table-striped"}>
                <thead>
                <tr>
                    <th scope={"col"}>Result</th>
                </tr>
                </thead>
                <tbody>
                {props.result.map((term) => {
                    return (
                        <tr key={term}>
                            <td> <a href={term}>{term}</a></td>
                        </tr>
                    );
                })}
                </tbody>
            </table>

        </div>
    )
}

export default QueryResult;