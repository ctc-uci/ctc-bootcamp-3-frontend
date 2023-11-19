import React, { useEffect, useState } from "react";
import { AboutYouBackend } from  "../../utils/utils";
import { useParams } from "react-router-dom";

const Member = () => {
  const [responseData, setResponseData] = useState(null);
  const [name, setName] = useState(null);
  const { member_id } = useParams();

  const fetchData = async () => {
    try {
      const response = await AboutYouBackend.get(`/members/${member_id}`);

      console.log('Response Data:', response.data);

      setResponseData(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if(responseData != null)
      setName(responseData[0].memberName);
  }, [responseData]);


  return (
    <> {responseData != null &&
      <div className="profile-container">
      {
        <>
          <div className="profile-header">
            <img src={responseData[0].imageLink} alt="Profile" />
            <h2>Name: {name}</h2>
            <p>Email: {responseData[0].email}</p>
          </div>
          <div className="profile-details">
            <p>Member ID: {responseData[0].id}</p>
            <p>Year: {responseData[0].memberYear}</p>
            <p>Majors/Minors: {responseData[0].majorsMinors}</p>
            <p>Project: {responseData[0].project}</p>
            <p>MBTI: {responseData[0].mbti}</p>
            <p>Birthday: {responseData[0].birthday}</p>
            <p>Spirit Animal: {responseData[0].spiritAnimal}</p>
            {responseData[0].bio && <p>Bio: {responseData[0].bio}</p>}
            {responseData[0].funnyQuote && <p>Funny Quote: {responseData[0].funnyQuote}</p>}
          </div>
        </>
      }
    </div>
    }
    </>
  );
};

export default Member;
