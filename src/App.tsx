import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataAction } from './redux/actions/actions';
import { AppDispatch, RootState } from './redux/store';
import List from './List/List';

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const posts = useSelector((state: RootState) => state.data.posts || []);

  useEffect(()=>{
    dispatch(fetchDataAction())
  },[dispatch]) 
  
  return (
    <div className="App">
      <List list={posts} />
    </div>
  );
}

export default App;
