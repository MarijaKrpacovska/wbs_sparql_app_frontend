import React from "react";

const SelectQueryCellOneCol = (props) => {
    return(
        <td>{
            props?.term?.binding?.uri != null
                ?
                <a href={props?.term?.binding?.uri}>{props?.term?.binding?.uri}</a> :
                <p>{props?.term?.binding?.literal}</p>
        }</td>
    )
}

export default SelectQueryCellOneCol;