import { useRef } from "react";
import PrimaryBtn from "../assets/PrimaryBtn";

const Name = ({ updateUser, user:{name,animals} }) => {
  const inputEl = useRef(name);

  const handleNameChange = (e) => {
    e.preventDefault();
    updateUser({ name: inputEl.current.value });
  };

  return (
    <div>
      <h1>
        Hello, <span>{name ? name : "Enter your name below:"}</span>
      </h1>
      <label htmlFor="name-input">My name is: </label>
      <input id="name-input" type="text" ref={inputEl} value={name} onChange={handleNameChange} />
      <PrimaryBtn link="/animals" />
    </div>
  );
};

export default Name;