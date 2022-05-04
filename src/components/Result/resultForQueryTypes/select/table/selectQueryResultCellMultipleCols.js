import React from "react";

const SelectQueryCellMultipleCols = (props) => {
    return(
        props.term?.binding?.map((termB) => {
            console.log("termB")
            console.log(termB)
            return (
                <td>{
                    termB?.uri != null
                        ?
                        <a href={termB?.uri}>{termB?.uri}</a> :
                        <p>{termB?.literal}</p>
                }</td>
            );
        }
        )
    )
}

export default SelectQueryCellMultipleCols;