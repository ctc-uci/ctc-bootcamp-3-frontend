import { useEffect, useRef, useState } from "react";
import "./memberPage.css";
import { AboutYouBackend } from "../../utils/utils";

const fetchData = async () => {
    try {
      // Make a GET request using the AboutYouBackend instance
      const response = await AboutYouBackend.get('/members/:member_id');
  
      // Handle the response data
      console.log('Response Data:', response.data);
      // You can perform further operations with the response data here
    } catch (error) {
      // Handle errors
      console.error('Error fetching data:', error);
    }
  };
  
  // Call the function to fetch data
fetchData();

const MemberPage = ({ memberId }) => {


    return (
        <>
        {/* <div>
        <input
            type="text"
            id="messageInput"
            placeholder="Type your message..."
            onInput={handleInput}
            onKeyDown={handleKeyPress}
          />
          <button onClick={sendMessage}>&#9658;</button>
        </div> */}
        </>
    )
}

export default MemberPage;
