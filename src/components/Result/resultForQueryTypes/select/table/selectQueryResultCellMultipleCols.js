import React from "react";

const SelectQueryCellMultipleCols = (props) => {
    return(
        props.term?.binding?.map((termB) => {
            console.log("termB")
            console.log(termB)
            return (
                // <td>
                //     test
                // </td>
                <td>{
                    termB?.uri != null
                        ?
                        <a href={termB?.uri}>{termB?.uri}</a> :
                        <div> {termB?.literal?.content}</div>
                        // <a href={termB?.uri}>{termB?.uri}</a> :
                        // <p>{termB?.literal}</p>
                }</td>
            );
        }
        )
    )
}

export default SelectQueryCellMultipleCols;