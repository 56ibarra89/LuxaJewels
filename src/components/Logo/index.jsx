import React from 'react';
import MiLogo from '../../assets/logo192.png';

const Logo = (props) => {
    return (
        <img
            src={MiLogo}
            alt="logo"
            style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                marginRight: '10px',
                ...(props.sx || {}) // Combina las propiedades de estilo con las props pasadas
            }}
        />
    );
};

export default Logo;
