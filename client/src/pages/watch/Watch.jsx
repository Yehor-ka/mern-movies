import React, { useEffect, useState } from 'react';
import './watch.scss';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Watch = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    let cleanupFunction = false;
    const getMovie = async () => {
      try {
        const { data } = await axios.get('/movies/find/61e18d30388a4de051e7b97d', {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTA3MWRkZWFlMzMxZjJjMTNiOTBiMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjE3MjgwMSwiZXhwIjoxNjQyNjA0ODAxfQ.vq_Yy5-jV4OvRQdXK47XSdP8zJUgybwGohkc7kYFzuU',
          },
        });
        if (!cleanupFunction) setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
    return () => (cleanupFunction = true);
  }, [id]);

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlinedIcon /> Home
        </div>
      </Link>
      <video className="video" autoPlay progress="true" controls src={''} />
    </div>
  );
};

export default Watch;
