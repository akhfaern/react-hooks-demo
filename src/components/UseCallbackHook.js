import { useCallback, useState } from "react"
import CallBackChild from "./CallBackChild";

const UseCallbackHook = () => {
  const [toggle, setToggle] = useState(false);
  const [name] = useState("cem");

  const renameUser = useCallback((newName) => {
    return name + " " + newName
  }, [name]);

  return (
    <div>
      <CallBackChild renameUser={renameUser} />
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  )
}

export default UseCallbackHook
