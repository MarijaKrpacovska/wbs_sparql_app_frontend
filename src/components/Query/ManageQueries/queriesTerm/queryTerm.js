import React from 'react';
import {Link} from 'react-router-dom';

const QueryTerm = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.content}</td>
            <td>{props.term?.queryType}</td>
            <td>{props.term?.endpoint?.name}</td>
            <td>{props.term?.user?.name}</td>
            <td>{props.term?.timestamp}</td>
            <td className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
            </td>
        </tr>
    )
}

export default QueryTerm;
