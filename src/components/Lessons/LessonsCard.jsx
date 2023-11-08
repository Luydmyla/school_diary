import React from "react";
import css from "./Lessons.module.css";

// import css from "./Lessons.module.css";

export const LessonsCard = ({ title, lessons }) => (
  <table className={css.table}>
    <tbody>
      <tr>
        <td>
          <h2 className={css.Lessons_title}> {title}</h2>
        </td>
      </tr>
      {lessons.map((lesson, index) => (
        <tr key={index}>
          <td>
            <span className={css.info_table_name}> {lesson.name}</span>
          </td>
          <td>
            <span className={css.info_table_task}>{lesson.task}</span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
