import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Accordian from "./components/Accordian";
import Search from "./components/Search";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is front end library to build reusable Ui components",
  },
  {
    title: "Why use React?",
    content: "React is favorite library among engineers",
  },
  {
    title: "How do use React?",
    content: "We use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Orange",
    value: "orange",
  },
  {
    label: "The Color Green",
    value: "green",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordian items={items}/> */}
      {/* <Search/> */}
      {/* <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      /> */}
      <Translate />
    </div>
  );
};

export default App;
