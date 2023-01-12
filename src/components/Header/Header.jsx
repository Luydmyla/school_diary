import css from "./Header.module.css";

export const Header = ({ text }) => {
  return <h1 className={css.title}>{text}</h1>;
};
