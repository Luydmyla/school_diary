import css from "./CustomInput.module.css";

export const CustomInput = ({ value }) => {
  return (
    <input type="submit" value="OK" className={css.input}>
      {value}
    </input>
  );
};
