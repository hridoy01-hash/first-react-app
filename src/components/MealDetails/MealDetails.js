import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import SingleMeal from '../SingleMeal/SingleMeal';

const MealDetails = () => {
    const {mealId} = useParams()
    const [meals,setMeal] = useState([])
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(data => setMeal(data.meals))
    },[])
    return (
        <div>
            <Container>
         <Row className="justify-content-md-center mt-5" xs={1} md={2}>
           
          
         {
         meals.map(singlemeal=><SingleMeal singlemeal={singlemeal}></SingleMeal>)
        } 
            
         </Row>
         </Container>
       
        </div>
    );
};

export default MealDetails;