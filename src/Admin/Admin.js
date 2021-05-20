import React, { useState } from 'react';
import Register from './Register/Register'
import Editer from './Editer/Editer'
import Table from './Table/Table'
import Nav from './Navbar/Nav';
import './Admin.css';


const Admin = () => {

    const [open, setop] = useState(false);

    function opener() {
        setop(!open)
    }

    return (
        <>
            <Nav open={open} opener={opener} />
            <div className="dish-con">
                <i className="fa fa-bars" onClick={opener} style={{ fontSize: '36px', cursor: 'pointer' }}></i>
                <Register />
                <Editer />
                <Table />
            </div >
        </>
    )
}

export default Admin