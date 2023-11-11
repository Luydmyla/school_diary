// import logo from './logo.svg';
import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Week } from "./components/Week/Week.jsx";
import { days } from "./components/Lessons/days";
import { LessonsList } from "./components/Lessons/LessonsList.jsx";
import { tasks } from "./components/Lessons/Tasks";
import Modal from "./components/Lessons/LessonsModal/Modal";
import { LessonsCard } from "./components/Lessons/LessonsCard";
import Container from "./components/Container";
import Footer from "./components/Footer/Footer";

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
  const [day, setDay] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen((state) => !state);
  // const resetSelect = () => {
  //   if (isModalOpen === false) {
  //     setDay("");
  //   }
  // };
  const onDayChange = (event) => {
    const { value } = event.currentTarget;
    console.log(value);

    if (value !== day) {
      setDay(value);
    }
    setIsModalOpen(true);
  };

  console.log(day);
  const normDays = normalizedLessons(days, tasks);
  console.log(normDays);
  function findSelectedDay() {
    const selectedDay = normDays.find((option) => option.name === day);
    // console.log(selectedDay);

    return selectedDay;
  }
  const currentDay = findSelectedDay();
  console.log(currentDay);

  return (
    <Container>
      <div className="App">
        <Header text="Розклад уроків та ДЗ" />
        <Week SelectDay={onDayChange} />
        <LessonsList days={normDays} />
        {isModalOpen && (
          <Modal onClose={toggleModal}>
            {
              <LessonsCard
                title={currentDay.name}
                lessons={currentDay.lessons}
                onClose={toggleModal}
              />
            }
          </Modal>
        )}
        <Footer />
      </div>
    </Container>
  );
};
