import React from 'react';

const Member = ({ name, year, mbti, birthday, bio }) => {
  return (
    <>
      <h1>{name}</h1>
      <h1>{year}</h1>
      <h1>{mbti}</h1>
      <h1>{birthday}</h1>
      <p>{bio}</p>
    </>
  );
};

export default Member;
