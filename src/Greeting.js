import React, { useState, useEffect } from 'react';
const { userService } = window.SERVICES;

function Greeting () {
  const [user, setUser] = useState(userService.state);

  useEffect(() => {
    userService.subscribe(setUser);
    return () => userService.unsubscribe(setUser);
  }, []);

  return (
    <div>
      <h1>THIS IS THE GREETING COMPONENT</h1>
      <h2>GREETING NAME: { user.name }</h2>
    </div>
  );
}

export default Greeting;

