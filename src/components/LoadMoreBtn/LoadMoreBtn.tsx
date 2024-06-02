import css from "./LoadMoreBtn.module.css";
import { BsChevronDoubleDown } from "react-icons/bs";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={css.container}>
      <button className={css.btn} onClick={onClick} type="button">
        <BsChevronDoubleDown size="18" />
        Load more
      </button>
    </div>
  );
}
export default LoadMoreBtn;