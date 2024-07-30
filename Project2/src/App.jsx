import { useState } from "react";

function App() {
  const [color, setColor] = useState("yellow");

  return (
    <div
      className="w-full h-screen flex justify-center "
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-6">
        <div className="w-full duration-75 flex gap-x-2 ">
          <button
            className="rounded-full px-6 py-2 outline-none shadow-lg text-white font-bold"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="rounded-full px-6 py-2 outline-none shadow-lg text-white font-bold"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="rounded-full px-6 py-2 outline-none shadow-lg text-white font-bold"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            BLue
          </button>
          <button
            className="rounded-full px-6 py-2 outline-none shadow-lg text-white font-bold"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className="rounded-full px-6 py-2 outline-none shadow-lg text-white font-bold"
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
          <button
            className="rounded-full px-6 py-2 outline-none shadow-lg text-white font-bold"
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
