import "./App.css";
import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      title: "Accordion Item 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vel impedit ipsum, reiciendis exercitationem excepturi cupiditate ab. Magni voluptate corporis ab voluptatibus quia natus porro mollitia, voluptatem culpa similique est.",
    },
    {
      title: "Accordion Item 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vel impedit ipsum, reiciendis exercitationem excepturi cupiditate ab.",
    },
    {
      title: "Accordion Item 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vel impedit ipsum, reiciendis exercitationem excepturi cupiditate ab.",
    },
  ];

  return (
  
      <div className="main">
        <h1>Accordion </h1>
        <Accordion items={items} />
      </div>
  
  );
}

export default App;
