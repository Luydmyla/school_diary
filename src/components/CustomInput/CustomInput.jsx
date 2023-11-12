import css from "./CustomInput.module.css";

export const CustomInput = ({ value, onSubmit }) => {
  const handleSubmit = (event) => {
    console.log(event);
    if (event.type === "submit") {
      onSubmit();
    }
  };
  return (
    <input
      type="submit"
      value="Вибрати"
      className={css.input}
      onSubmit={handleSubmit}
    >
      {value}
    </input>
  );
};
