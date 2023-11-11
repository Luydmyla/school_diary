import css from "./Button.module.css";
export default function Button({ text, onClose }) {
  const handleClick = (event) => {
    console.log(event);
    if (event.type === "click") {
      onClose();
    }
  };

  return (
    <button type="button" className={css.button} onClick={handleClick}>
      {text}
    </button>
  );
  //   return <footer className={css.footer}>{children}</footer>;
}
