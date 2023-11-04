import React from "react";

// import css from "./Lessons.module.css";

export const LessonsCard = ({ title, lessons }) => (
  <table>
    <tbody>
      <tr>
        <td>
          <h2> {title}</h2>
        </td>
      </tr>
      {lessons.map((lesson, index) => (
        <tr key={index}>
          <td>
            <span className="info-table-name"> {lesson.name}</span>
          </td>
          <td>
            <span className="info-table-task">{lesson.tasks}</span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
