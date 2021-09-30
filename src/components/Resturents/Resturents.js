import React from 'react';
import { Card,Col,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Resturents = (props) => {
    const {strMeal,idMeal,strMealThumb,strCategory,strInstructions} = props.meal;
    const buttonUrl = `/home/${idMeal}`
    return (
        <div>
           <Col>
                <Card>
                  <Card.Img variant="top" src={strMealThumb} />
                  <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>{strCategory}</Card.Text>
                    <Card.Text>
                      {strInstructions.slice(0,200)}
                    </Card.Text>

                    <Link to={buttonUrl}><Button variant="warning">See Details</Button>{' '} </Link>
                    

                  </Card.Body>
                </Card>
              </Col>
        </div>
    );
};

export default Resturents;
