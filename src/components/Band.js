// import React, { Component } from 'react';

// class Band extends Component {

//   render() {
//     return(
//       <div>
//         Band Component
//       </div>
//     );
//   }
// };

// export default Band;

import React from "react";

const Band = ({ band, deelete }) => {
  const handleClick = () => deelete(band.id);

  console.log(band);
  return (
    <li>
      {band.name} <button onClick={handleClick}>X</button>
    </li>
  );
};

export default Band;
