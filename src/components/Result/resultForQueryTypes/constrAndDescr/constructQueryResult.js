import React from "react";
import SelectQueryCellOneCol from "../select/table/selectQueryResultCellOneCol";
import SelectQueryCellMultipleCols from "../select/table/selectQueryResultCellMultipleCols";

const ConstructQueryResult = (props) => {
    return(
        <section>
            <h3>Namespace Prefixes</h3>
            <table>
                <thead>
                <th>1 </th>
                <th> 2</th>
                <th> 3</th>
                </thead>
                <tbody>
                        {
                            props?.selectedResult?.contentList?.map((term) => {
                            return (
                                <tr>
                                    <td>
                                        {term.split(" ")[0]}
                                    </td>
                                    <td>
                                        {term.split(" ")[1]}
                                    </td>
                                    <td>
                                        {term.split(" ")[2]}
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </section>
    )
}

export default ConstructQueryResult;