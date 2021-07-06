import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join = () => {
  const [name, setName] = useState('');
	const [room, setRoom] = useState('');

  return (
		<div className="joinOuterContainer">
			<div className="joinInnerContainer">
				<h1 className="heading">Passage</h1>
				<p className="caption">Join to chat with your friends.</p>
				<div className="inputContainer">
					<input placeholder="Enter username" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
				</div>
				<div className="inputContainer mt-20">
					<input placeholder="Enter room" className="joinInput" type="text" onChange={(event) => setRoom(event.target.value)} />
				</div>
				<Link onClick={event => (!name || !room) ? event.preventDefault(): null} to={`/chat?name=${name}&room=${room}`}>
					<button className="button" type="submit mt-20">Enter</button>
				</Link>
			</div>
		</div>
  )
}

export default Join;