import React from "react";
import { connect } from "react-redux";
import { getNYT } from "../../actions";

const Profile = (props) => {
    console.log(props.data);

    return (
        <div className='profile-container'>
            {/* This is where you'll change site choices. */}
            <button onClick={props.getNYT}>Click me</button>
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