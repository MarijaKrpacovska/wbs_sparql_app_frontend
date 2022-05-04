import React from "react";
import SelectQueryCellOneCol from "./selectQueryResultCellOneCol";
import SelectQueryCellMultipleCols from "./selectQueryResultCellMultipleCols";

const SelectQueryResultBody = (props) => {
    return(
        <tbody>
        {
            props?.selectedResult?.jsonContent?.sparql?.results?.result?.map((term) => {
                return (
                    <tr>{
                        typeof (term?.binding?.uri) == "string" ? <SelectQueryCellOneCol term={term}> </SelectQueryCellOneCol>
                             : <SelectQueryCellMultipleCols term={term}> </SelectQueryCellMultipleCols>

                    }

                    </tr>
                );
            })
        }
        </tbody>
    )
}

export default SelectQueryResultBody;