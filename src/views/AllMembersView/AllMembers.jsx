import { useEffect, useState } from "react";
import { AboutYouBackend } from "../../utils/utils";
import IndividualMemberCard from "../../components/AllMembers/IndividualMemberCard";
// import styles from "./AllMembers.module.css";



const AllMembers = () => {
    const [members, setMembers] = useState(null);

    useEffect(()=>{
        const getMembers = async () => {
            try{
                const { data } = await AboutYouBackend.get(`/members/`);
                console.log('data', data);
                setMembers(data)
            } catch(e){
                console.log(e);
            }
        }
        getMembers();
        console.log(members)

    });


    console.log(members)
    const mapMembers = () => {
        let membersInfo = [];
        console.log("here")
        // console.log(members)
        for (let i = 0; i < members.length; i++) {
            let member = members.at(i);
            membersInfo.push(<IndividualMemberCard memberLink={"/members/" + i} name={member.memberName} team={member.project} />);
        }
        return membersInfo;
    }




  return (
  <div className="main">
   <h1>All Members: </h1> 
   {/* <div className="members"> */}
    {members != null && mapMembers()}
    {/* </div> */}
  </div>)
}

export default AllMembers;
