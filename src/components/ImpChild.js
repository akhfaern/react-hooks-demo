import React, { useState, forwardRef, useImperativeHandle} from "react";

const ImpChild = forwardRef((props, ref) => {
  const [showHiddenInfo, setShowHiddenInfo] = useState(false);

  useImperativeHandle(ref, () => ({
    toggleShowHiddenInformation() {
      setShowHiddenInfo(!showHiddenInfo);
    },
  }));

  return (
    <div>
      <h4>{showHiddenInfo && "Hidden Information"}</h4>
    </div>
  )
});

export default ImpChild
