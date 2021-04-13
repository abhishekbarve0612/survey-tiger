import { createContext, useState } from "react";

export const LocalStore = createContext();

export const LocalStoreProvider = (props) => {
  let [data, setData] = useState([
    {
      id: 1,
      type: 1,
      options: [],
      question: "",
    },
  ]);
  const publishData = (dataObj) => {
    setData([...data, dataObj]);
  };

  return (
    <LocalStore.Provider value={[data, publishData]}>
      {props.children}
    </LocalStore.Provider>
  );
};
