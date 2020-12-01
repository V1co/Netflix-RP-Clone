import React, { useState } from 'react';
import { FeatureContext } from '../context/feature';
import { Card, Carousel } from '../components';

export function CardGroupContainer({ category, slideRows }) {
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState(false);
    
    return (
        <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
            <Card.Group>
            {slideRows.map((slideItem) => (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`} >
                        <Card.Title>{slideItem.title}</Card.Title>
                        <Carousel>
                            {slideItem.data.map((item) => (
                                <Card.Item key={item.docId} item={item}>
                                    <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}/>
                                    <Card.Meta>
                                        <Card.SubTitle>{item.title}</Card.SubTitle>
                                        <Card.Text>{item.description}</Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Carousel>

                        <Card.Feature category={category} slideItem={slideItem}>
                            <Card.Link></Card.Link>
                        </Card.Feature>
                    </Card>
                    ))} 
            </Card.Group>
        </FeatureContext.Provider>
    );
}