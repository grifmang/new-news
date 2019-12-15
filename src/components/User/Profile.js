import React from "react";
import { connect } from "react-redux";
import { getNYT } from "../../actions";

const Profile = (props) => {

    return (
        <div className='profile-container'>
            {/* This is where you'll change site choices. Needs to be built. */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
      data: state.data,
      isFetching: state.isFetching,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { getNYT }
  )(Profile);