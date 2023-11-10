import css from "./CustomInput.module.css";

export const CustomInput = ({ value }) => {
  return (
    <input type="submit" value="Вибрати" className={css.input}>
      {value}
    </input>
  );
};
