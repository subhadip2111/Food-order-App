

import React from 'react';
import ReactDOM from 'react-dom/client';

import "./index.css"
import Header from './src/component/Header';

import Footer from './src/component/Footer';
import Body from './src/component/Body';


const AppLayout = () => {

    return (
     <>
         <Header />
    <Body/>
    <Footer/>

    </>
)
   
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
//