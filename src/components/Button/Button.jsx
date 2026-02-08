import cls from "./Button.module.css";

export const Button = ({ onClick, children }) => {
  return (
    <button className={cls.btn} onClick={onClick}>
      {children}
    </button>
  );
};
