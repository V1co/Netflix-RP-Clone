import styled from 'styled-components';
import { Github } from '@styled-icons/boxicons-logos/Github'
import { LinkedinSquare as Linkedin } from '@styled-icons/boxicons-logos/LinkedinSquare'
import { Envelope } from '@styled-icons/boxicons-regular/Envelope'
import { FacebookSquare as Facebook } from '@styled-icons/boxicons-logos/FacebookSquare'
import { Link as RouterLink} from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    max-width: 1000px;
    flex-direction: column;
    padding: 70px 56px;
    margin: 0 auto;
    background-color: black;
    width: 100%;
    
    @media (max-width: 1000px) {
        padding: 70px 30px;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-right: 20px;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 15px;
    
    @media (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 0px;
    }
`;

export const Link = styled(RouterLink)`
    color: #757575;
    margin-bottom: 20px;
    font-size: 13px;
    text-decoration: none;
`;

export const ExternalLink = styled.a`
    color: #757575;
    margin-bottom: 20px;
    font-size: 13px;
    text-decoration: none;
`;

export const Title = styled.p`
    font-size: 16px;
    color: #757575;
    margin-bottom: 40px;
`;

export const Text = styled.p`
    font-size: 14px;
    color: #757575;
    margin-bottom: 40px;
    font-weight: bold;
`;

export const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`;

export const GithubIcon = styled(Github)`
    color: #757575;
    width: 50px;
    height: 50px;
    cursor: pointer;
    margin-left: 0px;

    &:hover {
        color: #e50914;
    }

    @media(max-width: 1000px) {
        width: 56px;
        height: 56px;
    }
`;

export const LinkedinIcon = styled(Linkedin)`
    color: #757575;
    width: 54px;
    height: 54px;
    cursor: pointer;

    &:hover {
        color: #e50914;
    }

    @media(max-width: 1000px) {
        width: 56px;
        height: 56px;
    }
`;

export const EnvelopeIcon = styled(Envelope)`
    color: #757575;
    width: 60px;
    height: 60px;
    cursor: pointer;

    &:hover {
        color: #e50914;
    }

    @media(max-width: 1000px) {
        width: 54px;
        height: 56px;
    }
`;

export const FacebookIcon = styled(Facebook)`
    color: #757575;
    width: 54px;
    height: 54px;
    cursor: pointer;

    &:hover {
        color: #e50914;
    }
`;