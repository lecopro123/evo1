import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import search from '../../search.svg';
import sun from '../../sun.svg';
import moon from '../../moon.svg';

const Header = ({ namer, theme, toggle }) => {
    const [flip, setflip] = useState(false);
    const [ans, setans] = useState('');

    return (
        <div className={`card ${flip ? 'flip' : ''}`}>
            <div className="header front">
                <NavLink to={`/`} className=" linksH brand">Brand</NavLink>
                <div className="head">
                    <NavLink exact activeClassName="activeH" to={`/`} className="topH linksH">Home</NavLink>
                    <NavLink activeClassName="activeH" to={`/admin`} className="topH linksH">Admin</NavLink>
                    <i className="fa fa-bars" onClick={() => setflip(true)} style={{ fontSize: '28px', cursor: 'pointer', paddingLeft: '20px' }}></i>
                </div>
            </div >
            <div style={{ paddingBottom: '30px' }} className="header back">
                <NavLink to={`/`} className=" linksH brand">Brand</NavLink>
                <div className="head">
                    {theme ? <button onClick={toggle} className="tog"><img src={sun} width="30" height="30" alt='nr' /></button> : <button onClick={toggle} className="togD"><img src={moon} width="30" height="30" alt='nd' /></button>}
                    <input
                        className='Sbar'
                        placeholder='Search Subjects'
                        onChange={(e) => e.target.value ? setans(e.target.value) : namer('')}
                    />
                    <img onClick={() => namer(ans)} className='Sbut' src={search} alt='n' />
                    <i className="fa fa-bars" onClick={() => setflip(false)} style={{ fontSize: '28px', cursor: 'pointer', paddingLeft: '20px' }}></i>
                </div>
            </div>
        </div>
    )
}

export default Header;