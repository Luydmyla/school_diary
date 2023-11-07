// import logo from './logo.svg';
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { Header } from "./components/Header/Header.jsx";
import { Week } from "./components/Week/Week.jsx";
// import { LessonsList } from "./components/Lessons/Lessons.jsx";
import { days } from "./components/Lessons/days";
import { LessonsList } from "./components/Lessons/LessonsList.jsx";
import { tasks } from "./components/Lessons/Tasks";
import Modal from "./components/Lessons/LessonsModal/Modal";
// import { LessonsCard } from "../Lessons/LessonsCard";
// import Modal from "../Lessons/LessonsModal/Modal";

import { useState } from "react";

function normalizedLessons(days, tasks) {
  return days.map((day) => {
    return {
      name: day.title,
      lessons: Object.values(day.lessons).map((name, index) => {
        return {
          name: name,
          task: tasks[day.title][index],
        };
      }),
    };
  });
}

export const App = () => {
  const [day, setDay] = useState("Понеділок");
  const onChange = (event) => {
    const { value } = event.currentTarget;
    setDay(value);
  };

  const normDays = normalizedLessons(days, tasks);
  return (
    <div className="App">
      <Header text="Розклад уроків та ДЗ" />
      <Week />
      {/* <LessonsList lessonsItems={lessonsItems} /> */}
      <LessonsList days={normDays} />
      {/* <Modal>{<LessonsCard title={} lessons={lessons} key={} />}</Modal> */}
      {<Modal />}
    </div>
  );
};
