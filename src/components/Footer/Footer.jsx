// import { MainContainer } from "../Container/Container.styled";
import css from "./Footer.module.css";
export default function Footer({ children }) {
  return <footer className={css.footer}> ГАРНОГО ДНЯ! </footer>;
  //   return <footer className={css.footer}>{children}</footer>;
}
