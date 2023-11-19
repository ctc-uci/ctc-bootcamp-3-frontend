
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { AboutYouBackend } from '../../utils/utils';

const MemberPage = () => {
  const [data, setData] = useState([]);
  const [requestedName, setRequestedName] = useState('');

  const getNames = async () => {
  const nameData = await AboutYouBackend.get('./members');
//    console.log(nameData);
//    console.log(nameData.data);
   setData(nameData.data);
  }

  useEffect(() => {
    getNames();
  }, []);

  const nameList = data.map((dataElements) => (
    <h1>{dataElements.memberName + ", "}</h1>
  ));

  const nameArr = data.map((dataElements) => dataElements.memberName)
  
  console.log(nameList);
  const filterName = nameArr.filter(names => names.includes(requestedName));
  
  return (
    <>
      <h1>Member Page</h1>
      <input value={requestedName} onChange={e => setRequestedName(e.target.value)} />
      <p>Name: {filterName}</p>
      {/* <p>Name: {nameList}</p> */}
      <p></p>
    </>
  );
}

export default MemberPage;