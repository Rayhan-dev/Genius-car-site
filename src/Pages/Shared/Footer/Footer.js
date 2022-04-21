import React from 'react';

const Footer = () => {
const today = new Date();
const year = today.getFullYear();
    return (
        <footer className='mx-auto text-center py-4 bg-primary text-white'>
            <p>&copy; Rayhan, {year} </p>
        </footer>
    );
};

export default Footer;