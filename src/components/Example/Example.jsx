import React, { useRef } from "react";


function Example() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // .current wskazuje na zamontowany element formularza
    inputEl.current.focus();
  };
  return (
    <>
    <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>
        Ustaw skupienie na kontrolce formularza
      </button>
    </>
  );
}


export default Example;
