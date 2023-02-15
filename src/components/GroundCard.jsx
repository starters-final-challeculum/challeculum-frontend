import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiBaseUrl } from '../common/constants';

function GroundCard() {
  const [ground, setGround] = useState();

  useEffect(() => {
    axios.get(`${apiBaseUrl}/ground/1`)
      .then((response) => {
        console.log(response);
        setGround(response.data);
      });
  }, []);

  // if (!ground) return null;

  return (
    <div>
      {/* <input value={title} /> */}
      <h1>{ground}</h1>

    </div>
  );
}

export default GroundCard;
