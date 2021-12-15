import { useEffect } from "react"

const CallBackChild = ({renameUser}) => {
  useEffect(() => {
    console.log("function called")
  }, [renameUser]);

  return (
    <div>
      {renameUser("yalın")}
    </div>
  )
}

export default CallBackChild
