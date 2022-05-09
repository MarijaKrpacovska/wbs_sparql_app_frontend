import React from 'react';
import {Link} from 'react-router-dom';

const EndpointTerm = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.url}</td>
            <td className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
            </td>
            <td>
                <Link className={"btn btn-secondary ml-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/endpoints/edit/${props.term.id}`}>
                    Edit
                </Link>
            </td>
        </tr>
    )
}

export default EndpointTerm;
