import React from 'react';
import sun from '../../sun.svg';
import moon from '../../moon.svg';
import ar from '../../arrows.png';

const Footer = ({ theme, toggle }) => {
    //console.log(theme)
    return (
        <div className="footer">
            <div className="rowss">
                <button
                    className='tog'
                    style={{ backgroundColor: '#d97e79' }}
                    onClick={() =>
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                    }
                >
                    <img src={ar} width="30" height="30" alt='ar' />
                </button>
                <div className="top">All Rights Reserved!!! &#169;</div>
                {theme ? <button onClick={toggle} style={{ backgroundColor: '#d97e79' }} className="tog"><img src={sun} width="30" height="30" alt='nr' /></button> : <button onClick={toggle} style={{ backgroundColor: '#d97e79' }} className="togD"><img src={moon} width="30" height="30" alt='nd' /></button>}
            </div>
        </div>
    )
}

export default Footer;