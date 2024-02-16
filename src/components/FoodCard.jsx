import React from 'react';
import "./FoodCard.css";
import { Button, Card } from 'react-bootstrap';

const FoodCard = ({el}) => {
    console.log(el);
  return (
  <div style={{margin:"25px"}}> 
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.food.image} />
      <Card.Body>
        <Card.Title>{el.food.label}</Card.Title>
        <Card.Text>Category: {el.food.category},CHOCDF: {el.food.nutrients.CHOCDF},
        ENERC_KCAL:{el.food.nutrients.ENERC_KCAL},FAT:{""}
        {el.food.nutrients.ENERC_FAT}
        </Card.Text>
        <Button variant="primary">Plus de détails</Button>
      </Card.Body>
    </Card>
  </div>
  );
};

export default FoodCard;