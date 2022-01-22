import React, { useEffect, useState } from 'react';
import './listItem.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ListItemLoader from '../listItemLoader/ListItemLoader';

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    let cleanupFunction = false;
    const getMovie = async () => {
      try {
        const { data } = await axios.get('/movies/find/' + item, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTA3MWRkZWFlMzMxZjJjMTNiOTBiMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Mjg2Mzc3NiwiZXhwIjoxNjQzMjk1Nzc2fQ.ql2sUh-Sjmx9-x_l4GT2K33w2WPOICDoIx36PcjivEs',
          },
        });
        if (!cleanupFunction) setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
    return () => (cleanupFunction = true);
  }, [item]);
  return (
    <>
      {movie._id ? (
        
          <div
            className="listItem"
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <img src={movie?.img} alt="" />
            {isHovered && (
              <>
                <video src={movie?.trailer} autoPlay={true} loop />
                <div className="itemInfo">
                  <div className="icons">
                  <Link to={'/watch/' + movie._id} state={movie}>
                    <PlayArrowIcon className="icon" />
                    </Link>
                    <AddIcon className="icon" />
                    <ThumbUpOutlinedIcon className="icon" />
                    <ThumbDownOutlinedIcon className="icon" />
                  </div>
                  <div className="itemInfoTop">
                    <span>{movie?.duration}</span>
                    <span className="limit">+{movie?.limit}</span>
                    <span>{movie?.year}</span>
                  </div>
                  <div className="desc">{movie?.description}</div>
                  <div className="genre">{movie?.genre}</div>
                </div>
              </>
            )}
          </div>
        
      ) : (
        <ListItemLoader />
      )}
    </>
  );
};

export default ListItem;
