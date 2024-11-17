import {useEffect, useState } from 'react';
// import axios from 'axios';
import { AboutYouBackend } from '../../utils/utils.jsx';
import MemberCard from './MemberCard.jsx';
// import { Table } from "@chakra-ui/react"
import './MembersPage.css';

const MembersPage=  () => {
    let [membersData, setMembersData] = useState([])
    let [tableData, setTableData] = useState([]);
    //let images = ['pfp.jpg', 'pfp2.jpg', 'pfp3.jpg', 'pfp4.jpg', 'pfp5.jpg']

    useEffect(() => {
      const getData = async () => {
      try {
        const temp = await AboutYouBackend.get('/members');
        setMembersData(temp.data);
      } catch {
        console.log('Error');
      }

    }

    getData();

    }, []);

    // console.log(membersData.length);
    console.log(membersData);

    useEffect(() => {
        let t = [];
        let curr = [];

        let i = 0;
        for (; i < membersData.length; i++ ) {
          // console.log(curr);
          membersData[i].img = i % 5;
          if (i % 5 == 0) {
            if (curr.length > 0) {
              t.push([...curr]);
              curr = [membersData[i]]
            } else {
              curr = [membersData[i]]
            }
          } else {
            curr.push(membersData[i]);
          }

        }

        while (i % 5 != 0) {
          t.push(null);
          i += 1
        }


        setTableData(t);
    }, [membersData])

    console.log(tableData);

    return (
      <div className='bg'>
      <h1>Members Page</h1>
        <table className='kai'>
        {tableData.map((item) => (
          <tr key={item.id}>
            <td>
              <MemberCard data={item[0]} />
              </td>
              <td>
              <MemberCard data={item[1]} />
              </td>
              <td>
              <MemberCard data={item[2]} />
              </td>
              <td>
              <MemberCard data={item[3]} />
              </td>
              <td>
              <MemberCard data={item[4]} />
            </td>
          </tr>
        ))
          }
        </table>
      </div>
    );
}

export default MembersPage;
