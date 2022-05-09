import React from "react";

const UnknownQueryTypeMessage = (props) => {
    return(
        <div className={"text-danger"}>
            Error executing query. Check your syntax. If your query is of type "UPDATE", this app has no permissions to execute.
        </div>
    )
}

export default UnknownQueryTypeMessage;