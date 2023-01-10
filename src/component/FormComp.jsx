import { useState } from "react";
import { useDispatch } from "react-redux";

import { pushData } from "../redux/StateReducer";

export default function FormComp() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    country: ""
  });
  const changeHandle = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const submitter = (e) => {
    e.preventDefault();
    dispatch(pushData(state));
    setState((prev) => ({ ...prev, name: "", email: "", country: "" }));
  };

  return (
    <>
      <form onSubmit={submitter}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          value={state.name}
          onChange={changeHandle}
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          value={state.email}
          onChange={changeHandle}
        />
        <label htmlFor="country">Country</label>
        <input
          name="country"
          type="text"
          value={state.country}
          onChange={changeHandle}
        />
        <input type="submit" />
      </form>
    </>
  );
}
