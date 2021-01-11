import React from 'react';
import {connect} from 'react-redux';
import {wrapper} from '../store/store';
import axios from 'axios';
import Link from 'next/link';

export const getServerSideProps = wrapper.getServerSideProps(
    async(context) => {

      console.log(context.query)
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=524ca0978e2631f5498901d67435dcdc`,
      );

      // console.log(response.data)
      const data = JSON.parse(JSON.stringify(response.data))
      // console.log(data)
      // const data = await response.json();
      // console.log(data.data.results);

        console.log('2. Page.getServerSideProps uses the store to dispatch things');
        // store.dispatch({type: 'TICK', payload: data.results});
        context.store.dispatch({type: 'GET_MOVIES', payload: data.results});
    }
);

// Page itself is not connected to Redux Store, it has to render Provider to allow child components to connect to Redux Store
const Page = ({movie}) => (
    <div>{movie.map(item => (
    <div key={item.id}>
      <Link href={`/movie/${item.id}`}>
        <a>
          {item.original_title}
        </a>
      </Link>
    </div>
  ))}
  </div>
);

// you can also use Redux `useSelector` and other hooks instead of `connect()`
export default connect(state => state)(Page);