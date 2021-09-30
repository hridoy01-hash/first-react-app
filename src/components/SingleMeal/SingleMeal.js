import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const SingleMeal = (props) => {

    const {strMeal,strMealThumb,strCategory,strInstructions} = props.singlemeal
    
    return (
        <div>
           <Col>
                <Card style={{width:"400px",height:"300px",}}>
                  <Card.Img style={{width:"400px",height:"300px"}} variant="top" src={strMealThumb} />
                  <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>{strCategory}</Card.Text>
                    <Card.Text>
                      {strInstructions.slice(0,200)}
                    </Card.Text>
                  </Card.Body>
                  <Link><Button variant="warning">Add to Cart</Button>{' '} </Link>
                </Card>
              </Col>
        </div>
    );
};

export default SingleMeal;