import React from 'react';
import User from './User';

export default function Users() {
  return(
    <div className="right">
      <User 
          src="https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg" 
          alt="man" 
          name="Scott" 
          />
      <div className="users__block">
        <User 
          src="https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg" 
          alt="man" 
          name="Scott" 
        min/>
        <User 
          src="https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg" 
          alt="man" 
          name="Scott" 
        min />
        <User 
          src="https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg" 
          alt="man" 
          name="Scott" 
        min />
          <User 
          src="https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg" 
          alt="man" 
          name="Scott" 
        min />
      </div>

    </div>
  )
}