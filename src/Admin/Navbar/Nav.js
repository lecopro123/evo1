import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({ open, opener }) => {
    const showHideClassName =
        open ? 'modal display-block' : ' display-none'

    return (
        <div className={showHideClassName}>
            <div className='nav-main'>
                <div className="rowss">
                    <NavLink to={`/admin`} activeClassName="active" className="top links">Admin</NavLink>
                    <NavLink exact activeClassName="active" to={`/`} className="top links">Home</NavLink>
                    <i onClick={opener} className="fa fa-times" style={{ fontSize: '26px', cursor: 'pointer' }}></i>
                </div>
            </div>
        </div>
    )
}

export default Nav;
