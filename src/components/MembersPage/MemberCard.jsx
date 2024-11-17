import { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MemberCard.css';
import pfp1 from './pfp.jpg';
import pfp2 from './pfp2.jpg';
import pfp3 from './pfp3.jpeg';
import pfp4 from './pfp4.jpg';
import pfp5 from './pfp5.jpg';

const MemberCard = ({ data } ) => {
  // console.log(data);
//   id
// :
// 21
// memberName
// :
// "Matthew "
// memberYear
// :
// "3rd"
// project
// :
// "CCH"

  const [ID, setID] = useState(0);
  const [name, setName] = useState('');
  const [year, setYear] = useState(0);
  const [project, setProject] = useState('');
  const [image, setImage] = useState(0);
  const images = [pfp1, pfp2, pfp3, pfp4, pfp5];
  // const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setID(data.id);
      setName(data.memberName);
      setYear(data.memberYear);
      setProject(data.project);
      setImage(images[data.img]);
    }
  }, [])

  return (
    <>

      <div className="member-card">
        <img  src={image} alt="hi" />
        <h1>Name: {name}</h1>
        <h1>Year: {year}</h1>
        <p>Project: {project}</p>
        <Link to={`/member/${ID}`}>Link</Link>
        {/* <button onClick={() => navigate(`/empty`)}>Page</button> */}
      </div>
    </>
  )
}

MemberCard.propTypes = {
  data: PropTypes.bool.isRequired,
};

export default MemberCard;
