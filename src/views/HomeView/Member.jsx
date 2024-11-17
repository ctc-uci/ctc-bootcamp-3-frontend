import { useState, useEffect } from 'react'
// import { Card, For, Stack, Button } from "@chakra-ui/react"
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";


const Member = ({ memberID, memberName, memberYear, project} ) => {
  let navigate = useNavigate();
  const routeChange = () =>{
    let path = `/member/{memberId}`;
    navigate(path);
  }

  return (
    <>
      {/* <h1>HELLO</h1> */}
      <div>
        <div></div>
        <div style={{ gap: "8px" }}>
          <h2>{memberName}</h2>
          <p>
            {project} - {memberYear}
          </p>
        </div>
        <div style={{ justifyContent: "flex-end", display: "flex" }}>
          <button>View</button>
          <button onClick={routeChange}>View</button>
        </div>
      </div>
    </>
  )
}

export default Member;


Member.propTypes = {
  memberId: PropTypes.string,
  memberName: PropTypes.string,
  memberYear: PropTypes.string,
  project: PropTypes.string
};
