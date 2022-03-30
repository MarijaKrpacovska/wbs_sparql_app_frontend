import React from "react";
import {Link} from 'react-router-dom';

const QueryDetails = (props) => {

    return (
        <div className={"container mm-4 mt-5"}>

            <div className={"row"}>
                <div className={"row"}>
                    <section>
                        <div className={"row"}>

                            <div className={"col-md-8"}>
                                <div className={"row"}>
                                    <div className={"col-md-7"}>
                                        <h1 className={"text-dark nameOfMovie"}>
                                            {props?.selectedQuery?.name}
                                        </h1>
                                        <div>
                                            {props?.selectedQuery?.content}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr/>
                    <section>
                        <div className={"row"}>

                            <div className={"col-md-8"}>
                                <div className={"row"}>
                                    <h5>
                                        Results:
                                    </h5>
                                    <div className={"col-md-7"}>
                                            {props?.selectedResult?.content}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>
            </div>
        </div>
    );
}

export default QueryDetails;