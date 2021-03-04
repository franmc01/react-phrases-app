import React from 'react'
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    padding: 1rem;
    border-radius: .3rem;
    background-color: #fff;
    max-width:80%;
    
    @media (min-width: 992px) {
        margin-top: 10rem;
    }
    h2 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;
        &::before {
            content: open-quote;
            font-size: 8rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight:bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`;


const Frase = ({ frase }) => {

    return (
        <ContenedorFrase>
            <h2>{frase.quote}</h2>
            <p>{frase.author}</p>
        </ContenedorFrase>
    );
}

Frase.prototype = {
    frase: PropTypes.object.isRequired
}

export default Frase;