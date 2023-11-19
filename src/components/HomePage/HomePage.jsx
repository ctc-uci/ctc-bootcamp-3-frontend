import { AboutYouBackend } from '../../utils/utils';
import { useEffect, useState } from 'react'; //, useRef
import { Outlet, Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [data, setData] = useState([]);

  // Define your GET route function
  const fetchData = async () => {
    try {
      // Make a GET request using the AboutYouBackend instance
      const response = await AboutYouBackend.get('/members');
      // Handle the response data
      console.log('Response Data:', response.data);
      // You can perform further operations with the response data here
      setData(response.data);
    } catch (error) {
      // Handle errors
      console.error('Error fetching data:', error);
    }
  };

  // Call the function to fetch data
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data.map(item => (
        <tr key={item.id}>
          {/* {Object.values(item).map(val => (
            // eslint-disable-next-line react/jsx-key
            <td>{val}</td>
          ))} */}
          <div className={styles['homepage-container']}>
            <h4> {item.memberName} </h4>
            <Link to={`/members/${item.id}`}>Member Page</Link>
          </div>
        </tr>
      ))}
      <Outlet />
    </div>
  );
};

export default HomePage;