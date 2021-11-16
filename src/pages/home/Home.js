import React, { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        console.log('Home Page');
    }, []);

    return (
        <h1 >
            Home
        </h1>
    )
}

export default Home
