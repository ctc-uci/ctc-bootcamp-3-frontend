import { useState, useEffect } from 'react'
import { Card, For, Stack } from "@chakra-ui/react"
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";


const Member = ( memberID, memberName, memberYear, project ) => {
  let navigate = useNavigate();
  const routeChange = () =>{
    let path = `/member/{memberId}`;
    navigate(path);
  }

  return (
    <>
      <Card.Root>
        <Card.Header />
        <Card.Body gap="2">
          <Card.Title mb="2">{memberName}</Card.Title>
          <Card.Description>
            {project} - {memberYear}
          </Card.Description>
        </Card.Body>
        <Card.Footer justifyContent="flex-end">
          <Button variant="outline">View</Button>
          <Button onClick={routeChange}>View</Button>
        </Card.Footer>
      </Card.Root>
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
