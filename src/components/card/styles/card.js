import styled from 'styled-components';

export const Title = styled.p`
    font-size: 24px;
    color: #e5e5e5;
    font-weight: bold;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    box-sizing: border-box;
    
    &:last-of-type {
        margin-bottom: 0;
    }
`;

export const Group = styled.div`
    display: flex;
    flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
    ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
    ${({ margin }) => margin && `margin: ${margin}`};
    margin-bottom: 1.8rem;
    margin-left: 56px;
    margin-right: 56px;
    
    ${Container}:first-of-type {
        @media (min-width: 1100px) {
            margin-top: -150px;
        }
    }
`;

export const SubTitle = styled.p`
    font-size: 12px;
    color: white;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
    user-select: none;
    display: none;
    margin: 10px;

    @media (min-width: 991px) and (max-width: 1139px) {
        font-size: 11px;
    }

    @media (min-width: 1400px) and (max-width: 1600px) {
        font-size: 11px;
    }

    @media (min-width: 1500px) and (max-width: 1629px) {
        font-size: 11px;
    }
`;

export const Text = styled.p`
    margin: 10px;
    font-size: 10px;
    color: white;
    margin-bottom: 0;
    user-select: none;
    display: none;
    line-height: normal;

    @media (min-width: 991px) and (max-width: 1139px) {
        font-size: 8.5px;
    }

    @media (min-width: 1400px) and (max-width: 1499px) {
        font-size: 8.0px;
    }

    @media (min-width: 1500px) and (max-width: 1629px) {
        font-size: 9.0px;
    }
`;

export const Entities = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Meta = styled.div`
    display: none;
    position: absolute;
    bottom: 0;
    padding: 0 auto;
    background-color: #0000008f;
    width: 90%;
    height: 90%;
    text-align: center;

    @media(max-width: 1200px) {
        width: 90%;
        height: 90%;
    }
`;

export const Image = styled.img`
    border: 0;
    width: 100%;
    max-width: 305px;
    cursor: pointer;
    height: auto;
    padding: 0;
    margin: 0;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    margin: none;
    position: relative;
    cursor: pointer;
    transition: transform 0.2;
    
    &:hover {
        transform: scale(1.3);
        z-index: 99;
    }
    
    @media (min-width: 991px) {
        &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
            display: block;
            z-index: 100;
            
        }
        &:first-of-type:hover {
            margin-left: 30px;
        }
    }
`;

export const FeatureText = styled.p`
    font-size: 18px;
    color: white;
    font-weight: ${({ fontWeight }) => {return fontWeight === 'bold' ? 'bold' : 'normal'}};
    margin: 0;
    
    @media (max-width: 800px) {
        line-height: 22px;
    }
`;

export const Feature = styled.div`
    display: flex;
    flex-direction: row;
    background: url(${({ src }) => src});
    background-size: contain;
    position: relative;
    height: 360px;
    background-position-x: right;
    background-repeat: no-repeat;
    background-color: black;
    margin-left: 0;
    
    @media (max-width: 1000px) {
        height: auto;
        background-size: cover;
        
        ${Title} {
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 10px;
        }
        ${FeatureText} {
            font-size: 14px;
        }
    }
`;

export const FeatureTitle = styled(Title)`
    margin-left: 0;
`;

export const FeatureClose = styled.button`
    color: white;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    
    img {
        filter: brightness(0) invert(1);
        width: 24px;
    }
`;

export const Content = styled.div`
    margin: 56px;
    max-width: 500px;
    line-height: normal;
    margin-left: 0;
    
    @media (max-width: 1000px) {
        margin: 30px;
        margin-left: 0px;
        max-width: none;
    }
`;

export const Maturity = styled.div`
    background-color: ${({ rating }) => (rating >= 15 ? 'red' : 'green')};
    border-radius: 15px;
    width: 20px;
    padding: 5px;
    text-align: center;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-right: 10px;
    font-size: 12px;
`;

export const Link = styled.p``;

export const SmallContainer = styled.div`
    display: flex;
    margin-left: -56px;
`