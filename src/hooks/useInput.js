import { useState, useEffect } from "react";

export function useInput(callback) {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    if (e?.target?.value) {
      setValue(e.target.value);
    }
    else if(typeof e ==='string'){
      setValue(e)
    }
    else setValue("");
  };

  useEffect(() => {
    if (typeof callback === "function") callback();
  }, [value]);

  return [value, handleInput];
}