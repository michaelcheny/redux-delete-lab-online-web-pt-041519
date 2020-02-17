import React, { Component } from "react";
import BandInput from "./BandInput";
import Bands from "./Bands";

import { connect } from "react-redux";

class BandsContainer extends Component {
  render() {
    // console.log(this.props);
    const { addBand, deelete, bands } = this.props;
    return (
      <div>
        <BandInput addBand={addBand} />
        <Bands bands={bands} deelete={deelete} />
      </div>
    );
  }
}

const mapStateToProps = ({ bands }) => ({ bands });

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", payload: name }),
  deelete: id => dispatch({ type: "DELETE_BAND", payload: id })
});

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
