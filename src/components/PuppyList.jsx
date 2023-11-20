import { useEffect, useState } from 'react'


const PuppyList = () => {
    const [puppies, setPuppies] = useState([])
useEffect (() => {
    const getPuppies = async () => {
        try {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players')
        const result = await response.json()
        const puppies = result.data.players
        console.log(puppies)
    }
    catch (error) {
    console.log(error) 
    }
};
getPuppies(); 
}, []);

return (
    <>
    <div className="main">
        <h1>Puppy List</h1>
        {puppies.map((puppy) => {
            return <div className="detailCard">
                <img src={puppy.imageURL} alt="puppy" />
                <h3 key={puppy.name}>{puppy.name}</h3>         
            </div> 
        })};
    </div>
    </>
  )
}
export default PuppyList
