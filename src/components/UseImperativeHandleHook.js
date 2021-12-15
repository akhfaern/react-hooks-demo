import React, { useRef } from "react";
import ImpChild from "./ImpChild";

const UseImperativeHandleHook = () => {
  const hiddenFieldRef = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          hiddenFieldRef.current.toggleShowHiddenInformation();
        }}
      >
        Show Hidden Information
      </button>
      <ImpChild ref={hiddenFieldRef} />
    </div>
  );
}

export default UseImperativeHandleHook
