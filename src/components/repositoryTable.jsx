import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Table from './common/table';


class RepositoryTable extends Component {

    columns = [
        {
            path: 'webhook',
            label: 'Webhook',
            content: ["https://webhookOne.com", "https://webhookTwo.com", "https://webhookThree.com"]
        },
        {
            path: 'sshKeys',
            label: 'SSH-Key',
            content: "asdgqqweqw21324251dasf324eq3wr32"
        },
        {
            path: 'name',
            label: 'Name',
            content: 'asdyjtyjtyj6584564856u4wefqewr43t34y5*-*/234@#!$@#%'
        }
    ]

    render() {
        //const{movies, sortColumn, onSort} = this.props;

        return (
            <div>
                <Table columns={this.columns}/>
            </div>
        );
    }
}

export default RepositoryTable