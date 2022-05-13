import { useId, useState } from "react";

export const UseIdSource = () => {
  const id = useId();
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <br />
      <div id={id}>
        count: {count} | ID: "{id}"
      </div>
    </>
  );
};
