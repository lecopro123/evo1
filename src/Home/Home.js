import React, { useState } from 'react';
import './Home.css';
import Header from './Header/header';
import Body from './Body/body';
import { useTheme } from './Theme/themeContext';

const Home = () => {
    const { theme, toggle } = useTheme();
    const [name, setname] = useState('');

    return (
        <>
            <Header namer={setname} theme={theme} toggle={toggle} />
            <Body name={name} theme={theme} toggle={toggle} />
        </>
    )
}

export default Home;