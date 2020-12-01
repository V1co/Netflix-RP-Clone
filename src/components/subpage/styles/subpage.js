import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    height: fit-content;
`;

export const Body = styled.div`
    padding: 3em 2em;
`;

export const Frame = styled.div`
    background-color: #000;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #000;
    max-width: 1000px;
    margin: 0 2em;
    height: 80px;
`;

export const Title = styled.h2`
    font-size: 18px;
    font-weight: 400;
    padding: 0 1rem;
    color: white;
`;

export const TextTitle = styled.h1`
    font-size: 36px;
    font-weight: 700;
    background-color: white;
    color: black;
    max-width: 960px;
    margin: 0 auto;
`;

export const Text = styled.p`
    background-color: white;
    max-width: 960px;
    margin: 2rem auto;
    line-height: 1.2;
`;

export const Logo = styled.img`
    margin: 20px 0;
    margin-left: 0.25em;
    height: 32px;
    width: 88px;
    padding-right: 1rem;
    border-right: 1px solid white;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: #000;
    padding-top: 20px;
    max-width: 1000px;
    margin: 0 auto;
`;