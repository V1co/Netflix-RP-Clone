import React, { useContext } from 'react';
import { FeatureContext } from '../../context/feature';
import { Player } from '../../components'

import {
    Container,
    Group,
    Title,
    SubTitle,
    Text,
    Feature,
    FeatureTitle,
    FeatureText,
    FeatureClose,
    Maturity,
    Content,
    Meta,
    Entities,
    Item,
    Link,
    Image,
    SmallContainer
} from './styles/card';

export default function Card({ children, ...restProps }) {    
    return <Container {...restProps}>{children}</Container>
}

Card.Group = function CardGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
}

Card.Title = function CardTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
}

Card.Text = function CardText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}

Card.Entities = function CardEntities({ children, ...restProps }) {
    return <Entities {...restProps}>{children}</Entities>;
}

Card.Meta = function CardMeta({ children, ...restProps }) {
    return <Meta {...restProps}>{children}</Meta>;
}

Card.Link = function CardLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
}

Card.Item = function CardItem({ item, category, children, ...restProps }) {
    const { setShowFeature, setItemFeature } = useContext(FeatureContext);
    
    return (
        <Item
            onClick={() => {
                setItemFeature(item);
                setShowFeature(item.genre);
            }}
            {...restProps}
        >
            {children}
        </Item>
    );
}

Card.SmallContainer = function SmallContainer({ children, ...restProps }) {
    return <SmallContainer {...restProps}>{children}</SmallContainer>;
}

Card.Image = function CardImage({ ...restProps }) {
    return <Image {...restProps} />;
}

Card.Feature = function CardFeature({ children, category, slideItem, ...restProps }) {
    const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);
    
    return showFeature === slideItem.data[0].genre ? (
        <Feature src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
            <Content>
                <FeatureTitle>{itemFeature.title}</FeatureTitle>
                <FeatureText>{itemFeature.description}</FeatureText>
                
                <FeatureClose onClick={() => setShowFeature(false)}>
                    <img src="/images/icons/close.png" alt="Close" />
                </FeatureClose>
                
                <Group margin="24px" flexDirection="row" alignItems="center">
                    <SmallContainer>
                        <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
                        <FeatureText fontWeight="bold">
                            {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
                        </FeatureText>
                    </SmallContainer>
                </Group>

                <Player>
                    <Player.Button />
                    <Player.Video url={itemFeature.url}/>
                </Player>
                
                {children}
            </Content>
        </Feature>
    ): null;
};