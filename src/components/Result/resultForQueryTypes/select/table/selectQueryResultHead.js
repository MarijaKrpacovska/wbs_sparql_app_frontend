import React from "react";

const SelectQueryResultHead = (props) => {
    return(
        <thead className={"fw-bold"}>
        {
            typeof (props?.selectedResult?.jsonContent?.sparql?.head?.variable?.name) == "string"
                ? props?.selectedResult?.jsonContent?.sparql?.head?.variable?.name
                : props?.selectedResult?.jsonContent?.sparql?.head?.variable?.map((term) => {
                    return (
                        <th>{term?.name}</th>
                    );
                })
        }
        </thead>
    )
}

export default SelectQueryResultHead;