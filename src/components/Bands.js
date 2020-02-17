import React from "react";
import Band from "./Band";

const Bands = ({ bands, deelete }) => {
  console.log(bands);
  return (
    <div>
      {bands.map(band => (
        <Band key={band.id} band={band} deelete={deelete} />
      ))}
    </div>
  );
};

export default Bands;
