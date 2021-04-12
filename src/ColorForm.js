import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function ColorForm({ addColor }) {
  const [inputColor, setInputColor] = useState("");
  const history = useHistory();

  function handleChange(evt) {
    setInputColor(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addColor(inputColor);
    setInputColor("");
    history.push("/colors");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div class="ColorForm">
        <label htmlFor="color">Enter your color: </label>
        <input
          onChange={handleChange}
          type="text"
          name="color"
          id="color"
          value={inputColor}
          required
        />
        <button>Submit</button>
      </div>
    </form>
  );
}

export default ColorForm;
