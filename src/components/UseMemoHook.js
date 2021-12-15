import axios from "axios";
import { useEffect, useState, useMemo } from "react";

const UseMemoHook = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  useEffect(() => {
    console.log(toggle)
  }, [toggle]);

  const findBizEmails = (users) => {
    if (!users) return null;
    console.log("function called");
    return users.filter((d) => d.email.indexOf(".biz") === d.email.length-4);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getBizEmails = useMemo(() => findBizEmails(data), [data]);

  return (
    <div className="App">
      <div> {getBizEmails?.map((user, index) => <h3 key={index}>{user.email}</h3>)} </div>

      <button onClick={() => { setToggle(!toggle); }}>Change State</button>
    </div>
  );

};

export default UseMemoHook