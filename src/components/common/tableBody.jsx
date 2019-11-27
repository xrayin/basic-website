import React, {Component} from 'react';
import _ from 'lodash';

class TableBody extends Component {

    renderCell = (column) => {
        if (column.content) return column.content;

        return _.get(column.path);
    };

    createKey = (column) => {

        return (column.path || column.key);
    }

    render() {

        const {columns} = this.props;

        return (
            <tbody>
            {columns.map(column => <tr key={column.path}>
                {columns.map(column =>
                    <td key={this.createKey(column.content)}
                    >
                        {this.renderCell(column)}
                    </td>)}
            </tr>)}

            </tbody>
        );
    }
}

export default TableBody;