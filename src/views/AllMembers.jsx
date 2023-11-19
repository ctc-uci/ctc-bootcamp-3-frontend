import axios from 'axios';
import Member from '../components/AllMembers/Member';
import { useEffect, useState } from 'react';
import { Flex, Heading, Spacer } from '@chakra-ui/react';
import { AboutYouBackend } from '../utils/utils';

const AllMembers = () => {
  const [Membersdata, setMembersdata] = useState([]);
  useEffect(() => {
    async function getMembers() {
      try {
        const response = await AboutYouBackend.get('/members');
        console.log(response.data);
        setMembersdata(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getMembers();
  }, []);

  console.log(Membersdata);

  const data = Membersdata?.map(member => (
    <Member
      key={member.id}
      name={member.memberName}
      memberYear={member.memberYear}
      project={member.project}
    />
  ));

  return (
    <>
      <Heading as="h1" size="xl" textAlign="center" m={5}>
        All Members
      </Heading>
      <Flex width={'100vw'} flexWrap={'wrap'}>
        {data}
      </Flex>
    </>
  );
};

export default AllMembers;
