import React from "react";
import {Link} from "react-router-dom";
import SelectQueryResultTable from "../resultForQueryTypes/select/table/selectQueryResultTable";
import ConstructQueryResult from "../resultForQueryTypes/constrAndDescr/constructQueryResult";

const QueryResult = (props) => {
    console.log(props);
    return(
            <div className={"row"}>

                <div className={"col-md-12"}>
                    <div className={"row"}>
                        <h5>
                            Results:
                        </h5>
                        {   props?.selectedQuery?.queryType == 'SELECT'
                                ? <div>
                                    <SelectQueryResultTable selectedResult={props?.selectedResult}> </SelectQueryResultTable>
                                </div>
                                : props?.selectedQuery?.queryType == 'CONSTRUCT'
                                    ? <div>
                                        <ConstructQueryResult selectedResult={props?.selectedResult}> </ConstructQueryResult>
                                    </div>
                                    : props?.selectedQuery?.queryType == 'DESCRIBE'
                                        ? <div>
                                            <ConstructQueryResult selectedResult={props?.selectedResult}> </ConstructQueryResult>
                                        </div>
                                        : props?.selectedQuery?.queryType == 'ASK'
                                            ? <div>
                                                <ConstructQueryResult selectedResult={props?.selectedResult}> </ConstructQueryResult>
                                            </div>
                                            : props?.selectedQuery?.queryType == 'UNKNOWN'
                                                ? <div>
                                                    <ConstructQueryResult selectedResult={props?.selectedResult}> </ConstructQueryResult>
                                                </div>
                                                : <div>other</div>
                        }
                    </div>
                </div>
            </div>
    )
}

export default QueryResult;