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
import { days } from "./components/Lessons/lessons";
import { LessonsList } from "./components/Lessons/LessonsList.jsx";

function normalizedLessons(days) {
  return days.map((day) => {
    return {
      name: day.title,
      lessons: Object.values(day.lessons).map((name) => {
        return {
          name: name,
          tasks: "",
        };
      }),
    };
  });
}

export const App = () => {
  const normDays = normalizedLessons(days);
  return (
    <div className="App">
      <Header text="Розклад уроків та ДЗ" />
      <Week />
      {/* <LessonsList lessonsItems={lessonsItems} /> */}
      <LessonsList days={normDays} />
    </div>
  );
};
