import React from "react";
import {Link} from "react-router-dom";
import SelectQueryResultTable from "../resultForQueryTypes/select/table/selectQueryResultTable";
import ConstructQueryResult from "../resultForQueryTypes/constrAndDescr/constructQueryResult";
import ConstructOrDescrQueryResult from "../resultForQueryTypes/constrAndDescr/constructOrDescrQueryResult";
import AskQueryResult from "../resultForQueryTypes/ask/askQueryResult";
import UnknownQueryTypeMessage from "../resultErrorMessages/unknownQueryTypeMessage";
import InvalidQueryMessage from "../resultErrorMessages/invalidQueryMessage";

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
                                        <ConstructOrDescrQueryResult selectedResult={props?.selectedResult}> </ConstructOrDescrQueryResult>
                                    </div>
                                    : props?.selectedQuery?.queryType == 'DESCRIBE'
                                        ? <div>
                                            <ConstructQueryResult selectedResult={props?.selectedResult}> </ConstructQueryResult>
                                        </div>
                                        : props?.selectedQuery?.queryType == 'ASK'
                                            ? <div>
                                                <AskQueryResult selectedResult={props?.selectedResult}> </AskQueryResult>
                                            </div>
                                            : props?.selectedQuery?.queryType == 'UNKNOWN'
                                                ? <div>
                                                    <UnknownQueryTypeMessage> </UnknownQueryTypeMessage>
                                                </div>
                                                : <InvalidQueryMessage> </InvalidQueryMessage>
                        }
                    </div>
                </div>
            </div>
    )
}

export default QueryResult;