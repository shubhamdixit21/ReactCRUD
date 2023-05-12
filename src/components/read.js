import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table, Button } from 'semantic-ui-react';

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox);
        console.log(data)
    }
    const onDelete = (id) => {
        axios.delete(`https://645e15f08d08100293f67df1.mockapi.io/fakedata/${id}`)
                  .then(() => {
                        getData();
                    })
    }
    const getData = () => {
        axios.get('https://645e15f08d08100293f67df1.mockapi.io/fakedata')
                   .then((getData) => {
                        setAPIData(getData.data);
                    })
    }
    useEffect(() => {
        axios.get('https://645e15f08d08100293f67df1.mockapi.io/fakedata')
            .then(res => {
                setAPIData(res.data);
            })
    }, [])
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map(data => {
                        return (
                            <Table.Row key={data.id}>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell>
                                        <Button onClick={() => setData(data)}>Update</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>);
}

