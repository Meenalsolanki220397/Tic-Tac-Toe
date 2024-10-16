import { useState } from "react";

const Square = ({ value }) => {
  const [value1, setValue] = useState(null);

  // using useState hook for maintiang local memoryss
  const handleClick = () => {
    setValue("X");
  };
  return (
    <button className="square" onClick={handleClick}>
      {value1}
    </button>
  );
};

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
