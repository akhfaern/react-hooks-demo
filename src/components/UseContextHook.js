import { useState } from "react"
import { AppContext } from "./AppContext"
import Profile from "./Profile";

const UseContextHook = () => {
  const [username, setUsername] = useState("");
  return (
    <AppContext.Provider value={{ username }}>
      <button onClick={() => { setUsername("murat cem ")}}>Set Username</button>
      <Profile />
    </AppContext.Provider>
  )
}

export default UseContextHook
