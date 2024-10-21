import React from 'react';

const Curve = ({color = "#0073E6", rotation = 0}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 1200"
            style={{
                enableBackground: "new 0 0 1200 1200",
                transform: `rotate(${rotation}deg)`, // Rotation en fonction de l'angle
                width: "100px", // Taille ajustable
                height: "100px",
            }}
            xmlSpace="preserve"
        >
            <path
                d="M0,1200h486.5c0-393.4,320.1-713.5,713.5-713.5V0C538.3,0,0,538.3,0,1200"
                fill={color} // Couleur personnalisée
            />
        </svg>
    );
};

export default Curve;
