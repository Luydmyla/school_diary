import React from "react";
import css from "./Lessons.module.css";

// import css from "./Lessons.module.css";
import { LessonsCard } from "./LessonsCard";

export const LessonsList = ({ days }) => (
  <div className={css.Lessons_list}>
    {days.map((day) => (
      <LessonsCard title={day.name} lessons={day.lessons} key={day.name} />
    ))}
  </div>
);
