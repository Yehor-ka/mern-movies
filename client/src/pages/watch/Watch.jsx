import React from 'react';
import './watch.scss';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlinedIcon /> Home
      </div>
      <video
        className="video"
        autoPlay
        progress='true'
        controls
        src="https://youtu.be/gG8U7oPAXeE"
      />
    </div>
  );
};

export default Watch;
