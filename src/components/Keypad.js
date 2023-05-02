// Code Keypad Component Here

function Keypad() {
  function handleChange() {
    console.log("Entering password...");
  }
  return (
    <input
      onChange={handleChange}
      type="password"
      placeholder="type here"
    ></input>
  );
}

export default Keypad;
