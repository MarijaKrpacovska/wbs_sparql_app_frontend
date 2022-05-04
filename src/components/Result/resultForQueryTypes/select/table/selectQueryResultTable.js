import React from "react";
import SelectQueryResultHead from "./selectQueryResultHead";
import SelectQueryResultBody from "./selectQueryResultBody";

const SelectQueryResultTable = (props) => {
    return(
        <div>
            <table className={"table table-striped w-100"}>
                <SelectQueryResultHead selectedResult={props?.selectedResult}></SelectQueryResultHead>
                <SelectQueryResultBody selectedResult={props?.selectedResult}></SelectQueryResultBody>
            </table>

        </div>
    )
}

export default SelectQueryResultTable;