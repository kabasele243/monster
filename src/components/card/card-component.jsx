import React from 'react';
import './card-styles.css';
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";

export const CardComponent = ({monster}) => {
    return (
        <Card>
            <CardImage
                src={`https://robohash.org/${monster.id}?set=set2&size=160x160`}
                rounded={true}
                alt="monster"
            />
            <H6 color="gray">{monster.name}</H6>
            <Paragraph color="gray">{monster.email}</Paragraph> 
        </Card>
    )
}