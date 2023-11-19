import React from 'react';
import { AboutYouBackend } from "../../utils/utils";

const TruthLies = () => {
  const [state, setState] = React.useState([]);
  // Define your GET route function
  const fetchData = async () => {
    try {
      // Make a GET request using the AboutYouBackend instance
      const response = await AboutYouBackend.get(`/games/truthslies/1`);
      setState(response.data)
      // Handle the response data
      console.log('Response Data:', response.data);
      // You can perform further operations with the response data here
    } catch (error) {
      // Handle errors
      console.error('Error fetching data:', error);
    }
  }
  // Call the function to fetch data
  fetchData(1);
  return <h1>{state.lie}</h1>
}
export default TruthLies;