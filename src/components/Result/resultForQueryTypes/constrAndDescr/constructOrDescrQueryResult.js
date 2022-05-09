import React from "react";
import SelectQueryCellOneCol from "../select/table/selectQueryResultCellOneCol";
import SelectQueryCellMultipleCols from "../select/table/selectQueryResultCellMultipleCols";

const ConstructOrDescrQueryResult = (props) => {
    function isValidHttpUrl(string) {
        let url;

        try {
            url = new URL(string);
        } catch (_) {
            return false;
        }

        return url.protocol === "http:" || url.protocol === "https:";
    }
    return(
        <section>
            <div className={"container"}>
                        {
                            props?.selectedResult?.contentList?.map((term) => {
                            return (
                                <div className={"row"} style={{width: "1200px"}}>
                                    <div className={"col-4"} style={{width:"400px","word-wrap":"break-word"}}>
                                        {isValidHttpUrl(term.split(" ")[0]) ?
                                            <a href={term.split(" ")[0]}>{term.split(" ")[0]}</a>:
                                            <div>{term.split(" ")[0]}</div>}

                                    </div>
                                    <div className={"col-4"} style={{width:"400px","word-wrap":"break-word"}}>
                                        {isValidHttpUrl(term.split(" ")[1]) ?
                                            <a href={term.split(" ")[1]}>{term.split(" ")[1]}</a>:
                                            <div>{term.split(" ")[1]}</div>}
                                    </div>
                                    <div className={"col-4"} style={{width:"400px","word-wrap":"break-word"}}>
                                        {isValidHttpUrl(term.split(" ")[2]) ?
                                            <a href={term.split(" ")[2]}>{term.split(" ")[2]}</a>:
                                            <div>
                                                {term.split(" ")[2].includes('^^') ?
                                                    <div>
                                                        {isValidHttpUrl(term.split(" ")[2].split('^^')[0]) ?
                                                            <a href={term.split(" ")[2].split('^^')[0]}>{term.split(" ")[2].split('^^')[0]}</a>:
                                                            <div>{term.split(" ")[2].split('^^')[0]}</div>}
                                                        {isValidHttpUrl(term.split(" ")[2].split('^^')[1]) ?
                                                            <a href={term.split(" ")[2].split('^^')[1]}>{term.split(" ")[2].split('^^')[1]}</a>:
                                                            <div>{term.split(" ")[2].split('^^')[1]}</div>}
                                                    </div>:
                                                    <div>
                                                        term.split(" ")[2]
                                                    </div>}
                                            </div>
                                        }
                                    </div>
                                </div>
                            );
                        })}
            </div>
        </section>
    )
}

export default ConstructOrDescrQueryResult;