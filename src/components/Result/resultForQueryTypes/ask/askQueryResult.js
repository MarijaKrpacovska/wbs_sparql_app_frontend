import React from "react";

const AskQueryResult = (props) => {
    return(
        <div>
            {props?.selectedResult?.content}
        </div>
    )
}

export default AskQueryResult;