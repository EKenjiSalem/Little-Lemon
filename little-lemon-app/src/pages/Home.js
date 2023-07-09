import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <h1>Little Lemon is the best place to eat in the bay</h1>
            <p> This is the best plalce in the bay, so any time you feel like grabbing a great bite to eat, come on through to the Little Lemon</p>
            <Link to="book">book you table</Link>
        </>
    )
};

export default Home;