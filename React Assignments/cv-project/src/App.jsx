import React from "react";
import Form from "./Form";

function App() {
    const [text, setText] = React.useState("")

  return (
    <>
    <form onSubmit=''>
    <p>{text} characters remaining...</p>
    <input
      onChange={e => setText(e.target.value)}
      value={text}
      placeholder="enter a comment"
    />
    <Form text={text} />
  </form>
    </>
  );
}
export default App;