import React from "react";

const Endpoints = (props) => {
    console.log(props);
    return(
        <div>
            <table className={"table table-striped"}>
                <thead>
                <tr>
                    <th scope={"col"}>Name</th>
                    <th scope={"col"}>url</th>
                </tr>
                </thead>
                <tbody>
                {props.endpoints.map((term) => {
                    return (
                        <tr key={term.id}>
                            <td>{term.name}</td>
                            <td>{term.url}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>

        </div>
    )
}

export default Endpoints;