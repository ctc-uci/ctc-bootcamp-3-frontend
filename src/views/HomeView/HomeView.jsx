import React, { useEffect, useState } from 'react';
import Member from './Member';

// import NavBar from './NavBar';

const HomeView = () => {
    const [members, setMembers] = useState([]);

    const getMembers = async () => {
        const response = await fetch("http://localhost:3001/members");
        const data = await response.json();
        console.log("data:", data);
        return Array.from(data);
    }

    useEffect(() => {
        const fetchMembers = async () => {
            const data = await getMembers();
            setMembers(data);
        };

        fetchMembers();
    }, []);


    return (
        <div>
            <h1>Home</h1>
            <div>
                {members.length && members.map(member => {
                  return <Member id={member.id} memberName={member.memberName} memberYear={member.memberYear} project={member.project} />
                })}
            </div>
        </div>
    )
}

export default HomeView;



// member component
// GET /members
// GET /members/:id <--
// use .map() on the member array from GET
