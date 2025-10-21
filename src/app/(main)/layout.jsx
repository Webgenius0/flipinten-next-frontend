import Footer from '@/Shared/Footer';
import Navbar from '@/Shared/Navbar';
import React from 'react';

const layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default layout;