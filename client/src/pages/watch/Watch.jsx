import React, { useEffect, useState } from 'react';
import './watch.scss';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Link, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

const Watch = () => {
  const { id } = useParams();
  const { state } = useLocation()


  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlinedIcon /> Home
        </div>
      </Link>
      <video className="video" autoPlay progress="true" controls src={state.video} />
    </div>
  );
};

export default Watch;
