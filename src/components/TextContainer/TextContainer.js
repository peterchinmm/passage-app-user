import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Passage Realtime Chat Application</h1>
    </div>
    {
      users ? (
        <div>
          <h2 className="activeInfo">People currently in room:</h2>
          <div className="activeContainer">
            <h4>
              {users.map(({name}) => (
                <div key={name} className="activeItem">
                  {name}
                  <img src={onlineIcon} alt="online"/>
                </div>
              ))}
            </h4>
          </div>
        </div>
      ) : null
    }
  </div>
)

export default TextContainer;