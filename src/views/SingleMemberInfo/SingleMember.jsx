import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams
import './SingleMember.css';


function SingleMember() {
  // Use useParams to get the memberId from the route parameters
  const { memberId } = useParams();
  const [singleMember, setSingleMember] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('memberId', memberId);
        const response = await axios.get(`http://localhost:3001/members/${memberId}`);
        console.log('response', response.data);
        const firstMem = response.data[0];
        setSingleMember(firstMem);
      } catch (error) {
        console.error('Error fetching member information:', error.message);
      }
    };

    fetchData();
  }, [memberId]);

  return (
    <div>
      <h1>Member Information</h1>
      {singleMember ? (
        <div>
          <p>ID: {singleMember.id}</p>
          <p>Name: {singleMember.memberName}</p>
          <p>Year: {singleMember.memberYear}</p>
          <p>Major: {singleMember.majorsMinors}</p>
          <p>Project: {singleMember.project}</p>
          <p>MBTI: {singleMember.mbti}</p>
          <p>Birthday: {singleMember.birthday}</p>
          <p>Spirit Animal: {singleMember.spiritAnimal}</p>
          <p>Bio: {singleMember.bio}</p>
          <p>Funny Quote: {singleMember.funnyQuote}</p>
          <p>Image Link: {singleMember.imageLink}</p>
          {/* Renders*/}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SingleMember;
