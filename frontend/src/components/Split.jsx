import moment from 'moment';
import { useNavigate } from 'react-router-dom'; 
import '../App.css';
import { useCallback } from 'react';
import Button from './Button';

function Split() {

  // split list format
  const splitList = [
    {
      splitId: 1,
      ownerEmail: 'sheshank@yopmail.com',
      ownerUserName: 'Sheshank Chandra',
      members: ['Murali', 'Rahul'], 
      totalEggs: 30,
      createdTime: moment('2024-12-19T20:09:14.576Z').format('DD MMM YYYY'),
      modifiedTime: moment('2024-12-21T20:09:14.576Z').format('DD MMM YYYY'),
    },
    {
      splitId: 2,
      ownerEmail: 'neeraj@yopmail.com',
      ownerUserName: 'Neeraj',
      members: ['Murali', 'Niranjan'], 
      totalEggs: 10,
      createdTime: moment('2024-12-18T20:09:14.576Z').format('DD MMM YYYY'),
      modifiedTime: moment('2024-12-22T20:09:14.576Z').format('DD MMM YYYY'),
    },
    {
      splitId: 3,
      ownerEmail: 'sheshank@yopmail.com',
      ownerUserName: 'Sheshank Chandra',
      members: ['Murali', 'Neeraj'], 
      totalEggs: 15,
      createdTime: moment('2024-12-10T20:09:14.576Z').format('DD MMM YYYY'),
      modifiedTime: moment('2024-12-16T20:09:14.576Z').format('DD MMM YYYY'),
    },
  ];

  const navigate = useNavigate();
  const handleClick = (split) => {
    navigate(`/split/${split.splitId}`, { state: { split } });  // Navigate to the SplitDetail page and pass the splitId
  };

  const handleLogout = useCallback(() => {
    //need to add code to delete cookie
    navigate('/');
  }, [navigate]);

  const handleProfile = useCallback(() => {
    navigate('/profile');
  }, [navigate]);

  return (
    <div className="split-main-div">
      <h3 className='split-title'>Hello <span className='home-spn'>user</span>! Checkout split details here.</h3>
      {
        splitList.map((split) => (
          <div className="split-div" key = {split.splitId} onClick={() => handleClick(split)}>
            <span className='split-user'>{split.ownerUserName}</span>
            <span className='split-dtl'>added</span>
            <span className='split-cnt'>{split.totalEggs}</span>
            <span className='split-dtl'> eggs to split on: {split.createdTime}</span>
          </div>
        ))
      }
      <div className="grid-div">
        <Button name = 'Profile' clickFunc={handleProfile}/>
        <Button name = 'Logout' clickFunc={handleLogout}/>
      </div>
    </div>
  )
}
export default Split