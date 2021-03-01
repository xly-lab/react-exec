import React, { useEffect, useState } from "react";

export default function UesUesState() {
  // eslint-disable-next-line
  const [ob, setOb] = useState(() => {
    return { a: 1, B: 3 };
  });
  console.log(ob);
  useEffect(() => {
    setOb(() => {
      return { a: 2, B: 1 };
    });
  }, []);

  //@ts-ignore
  return (
    <div>
      <h1>hello Hook</h1>
    </div>
  );
}
