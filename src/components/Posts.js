import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
  render() {
    return (
      <div className="left">
        <Post src="https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659__340.jpg" alt="flower"/>
        <Post src="https://www.amazingclubs.com/img/flowerofthemonthclub.jpg" alt="anoter flower" />
      </div>
    )    
  }
   
}