import  React from 'react';
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";


const Table = ({columns}) => {
    return (
        <div>
            <table className="table">
                <TableHeader columns={columns}/>
                <TableBody columns={columns} />
            </table>
        </div>
    );
};

export default Table;