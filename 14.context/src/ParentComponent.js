import React, { createContext, useContext, useState } from 'react'

const UserDataContext = createContext();

const ParentComponent = () => {
  const [user, setUser] = useState("Rita Adedolapo");
  const [profession, setProfession] = useState("Software Developer");

  return (
    <UserDataContext.Provider value={{ user, profession }}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserDataContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  const userData = useContext(UserDataContext);
  return (
    <>
      <h1>Component 3</h1>
      <p>{userData.user}</p>
      <p>{userData.profession}</p>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserDataContext);
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}


export default ParentComponent