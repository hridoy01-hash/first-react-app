import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import Resturents from '../Resturents/Resturents';


const Home = () => {

   const [searchText,setSearchText] = useState('')
   const [meals,setMeals] = useState([])
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
   useEffect(()=>{
     fetch(url)
     .then(response => response.json())
     .then(data => setMeals(data.meals));
   },[searchText])
  
   const handleSearchField =(event)=>{
    const seachTextValue = event.target.value;
    setSearchText(seachTextValue);

  }
  
    return (
        <div>

<InputGroup onChange={handleSearchField} className="mb-3 mt-3 w-50 mx-auto">
    <FormControl
      placeholder="Search your food here..."
    />
    <Button variant="outline-secondary" id="button-addon2">
      Button
    </Button>
  </InputGroup>
           
         <Container>
         <Row xs={1} md={3} className="g-4">
           
          
         {
         meals.map(meal => <Resturents key={meal.idMeal} meal={meal}></Resturents>)
        } 
            
         </Row>
         </Container>
         
         
        
        </div>
    );
};

export default Home;

/* 
 

*/