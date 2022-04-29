import React from "react";
import {Link} from 'react-router-dom';

const QueryDetails = (props) => {
    console.log("selected result: "+props.selectedResult)
    console.log(props.selectedResult)


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
                                    <div>

                                        <table className={"table table-striped w-100"}>
                                            <thead className={"fw-bold"}>
                                            {
                                                typeof(props?.selectedResult?.jsonContent?.sparql?.head?.variable?.name)=="string"
                                                ? props?.selectedResult?.jsonContent?.sparql?.head?.variable?.name
                                                : props?.selectedResult?.jsonContent?.sparql?.head?.variable?.map((term) => {
                                                        return (
                                                            <th>{term?.name}</th>
                                                        );
                                                    })
                                            }
                                            </thead>
                                            <tbody>
                                            {
                                                props?.selectedResult?.jsonContent?.sparql?.results?.result?.map((term) => {
                                                    return (
                                                        <tr>{
                                                            typeof(term?.binding?.uri) == "string"
                                                            ?
                                                                <td>{
                                                                    term?.binding?.uri != null
                                                                        ? <a href={term?.binding?.uri}>{term?.binding?.uri}</a> :
                                                                        <p>{term?.binding?.literal}</p>
                                                                }</td>: term?.binding?.map((termB) => {
                                                                    console.log("termB")
                                                                console.log(termB)
                                                                    return (
                                                                        <td>{
                                                                            termB?.uri != null
                                                                                ? <a href={termB?.uri}>{termB?.uri}</a> :
                                                                                <p>{termB?.literal}</p>
                                                                        }</td>
                                                                    );
                                                                })

                                                        }

                                                        </tr>
                                                    );
                                                })
                                            }
                                            </tbody>
                                            {/*{props?.selectedResult?.jsonContent?.sparql?.head?.variable?.map((term) => {
                                                return (
                                                    <thead key={term?.name}>
                                                        <td>{term?.name}</td>
                                                    </thead>
                                                );
                                            })}*/}
                                        </table>
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