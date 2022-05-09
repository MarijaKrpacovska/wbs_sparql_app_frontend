import React from 'react';
import {Link} from 'react-router-dom';

const MyQueryTerm = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.content.substring(0, 40)}...</td>
            <td>{props.term?.queryType}</td>
            <td>{props.term?.endpoint?.name}</td>
            <td>{props.term?.timestamp}</td>
            <td><input value={props.term?.uniqueUrl} disabled={true}/></td>
            <td className={"text-right"}>
                <Link
                    onClick={() => {
                        props.onDetails(props.term?.id);
                    }}
                    to={`/query/${props.term?.id}`}>
                    details
                </Link>
            </td>
            <td className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
            </td>
        </tr>
    )
}

export default MyQueryTerm;
