import React, { useEffect, useState } from 'react';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import Navbar from '../../components/navbar/Navbar';
import './home.scss';
import axios from 'axios';

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const { data } = await axios.get(
          `lists${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`, {
            headers: {
              token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTA3MWRkZWFlMzMxZjJjMTNiOTBiMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Mjg2Mzc3NiwiZXhwIjoxNjQzMjk1Nzc2fQ.ql2sUh-Sjmx9-x_l4GT2K33w2WPOICDoIx36PcjivEs'
            }
          }
        );
        setLists(data);
      } catch (error) {}
    };

    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list, i) => (
        <List list={list} key={i} />
      ))}
      
    </div>
  );
};

export default Home;
