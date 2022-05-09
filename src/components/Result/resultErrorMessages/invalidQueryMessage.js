import React from "react";

const InvalidQueryMessage = (props) => {
    return(
        <div className={"text-danger"}>
            Error executing query. Check your syntax. If your query is of type "UPDATE", this app has no permissions to execute.
        </div>
    )
}

export default InvalidQueryMessage;