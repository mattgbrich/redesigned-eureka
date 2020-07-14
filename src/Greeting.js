import React, { useState, useEffect } from 'react';
const { userService } = window.SERVICES;

function Greeting () {
  const [user, setUser] = useState('');

  useEffect(() => {
    userService.subscribe(setUser);
    return () => userService.unsubscribe();
  }, []);

  return (
    <div>
      <h1>THIS IS THE GREETING COMPONENT</h1>
      <h2>GREETING NAME: { user.name }</h2>
    </div>
  );
}

export default Greeting;

