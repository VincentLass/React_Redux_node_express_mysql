import React from 'react';
import Header from '../components/Header';

const Home = ({listeAttractions}) => {
    return (
        <div className='home-page'>
            <Header />
            <h1>Accueil</h1>
            <p>Il y a {listeAttractions.length} attractions dans notre parc!!!!!</p>
        </div>
    );
};

export default Home;