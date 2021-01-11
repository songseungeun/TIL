import React from 'react';
import {connect} from 'react-redux';
import {wrapper} from '../store/store';
import axios from 'axios';
import Link from 'next/link';

export const getServerSideProps = wrapper.getServerSideProps(
    async(context) => {

      console.log(context.query)
     
    }
);

// Page itself is not connected to Redux Store, it has to render Provider to allow child components to connect to Redux Store
const MovieDetail = ({movie}) => (
    <div>
      {/* <h2>{movie.title}</h2> */}
  </div>
);

// you can also use Redux `useSelector` and other hooks instead of `connect()`
export default connect(state => state)(MovieDetail);