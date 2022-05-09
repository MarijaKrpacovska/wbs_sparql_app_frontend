import React from "react";
import {Link} from 'react-router-dom';
import SelectQueryResultTable from "../../Result/resultForQueryTypes/select/table/selectQueryResultTable";
import QueryResult from "../../Result/getResultForQuery/queryResult";

const QueryDetails = (props) => {
    console.log("selected result: "+props.selectedResult)
    console.log(props.selectedResult)


    return (
        <div className={"container mm-4 mt-5"}>

            <div className={"row"}>
                <div className={"row"}>
                    <section>
                        <div className={"row"}>

                            <div className={"col-md-12"}>
                                <div className={"row"}>
                                    <div className={"col-md-7"}>
                                        <h3 className={"text-dark nameOfMovie"}>
                                            {props?.selectedQuery?.name}
                                        </h3>
                                        <div>
                                            <textarea style={{height:"200px", width:"1200px"}} disabled={true} value={props?.selectedQuery?.content}/>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <br/>
                    <hr/>
                    <section>
                        <QueryResult selectedQuery={props?.selectedQuery}
                                     selectedResult={props?.selectedResult}></QueryResult>
                    </section>


                </div>
            </div>
        </div>
    );
}

export default QueryDetails;