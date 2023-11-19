import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { AboutYouBackend } from '../../utils/utils';

const MemberPage = () => {
  const [nameInformation, setNameInformation] = useState([]);

  const getNames = async () => {
    const nameData = await AboutYouBackend.get('./members');
    const memberID = 10;
    const nameInformation = await AboutYouBackend.get('./members/' + memberID);
    setNameInformation(nameInformation.data[0]);
    console.log(nameInformation);
  };

  useEffect(() => {
    getNames();
  }, []);

  return (
    <>
      <h1>Member Page</h1>
      <p>Name: {nameInformation.memberName}</p>
      <p>{nameInformation.memberYear}</p>
      <p>{nameInformation.majorsMinors}</p>
      <p>{nameInformation.project}</p>
      <p>{nameInformation.mbti}</p>
      <p>{nameInformation.birthday}</p>
      <p>{nameInformation.spiritAnimal}</p>
      <p>{nameInformation.bio}</p>
      <p>{nameInformation.funnyQuote}</p>
    </>
  );
};

export default MemberPage;
