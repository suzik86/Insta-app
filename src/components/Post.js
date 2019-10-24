import React, {Component} from 'react';
import User from "./User";

export default class Post extends Component {
  render() {
    return(
      <div className="post">
        <User 
          src="https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg" 
          alt="man" 
          name="Scott" 
          min />
        <img src={this.props.src}  alt={this.props.alt} ></img>
        <div className="post__name">Name</div>
        <div className="post__descr">
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
         excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
          officia deserunt mollitia animi, id est laborum et dolorum fuga.
        </div>
      </div>
    )
  }
}