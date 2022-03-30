import React from 'react';
import { Header } from '../Layout';

const Layout = ({ children }) => {
    return (
        <>
            <Header/>
            {children}
        </>
    );
}

export default Layout;