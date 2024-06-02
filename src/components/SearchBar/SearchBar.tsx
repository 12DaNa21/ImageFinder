import css from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const onSubmitBar = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = (form.elements.namedItem("topic") as HTMLInputElement).value;
    if (data.trim() === "") {
      toast.error("Please, enter your request!");
      return;
    }
    onSubmit(data.trim());
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={onSubmitBar}>
        <div className={css.inputContainer}>
          <input
            className={css.input}
            type="text"
            name="topic"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit">
            <IoIosSearch className={css.icon} size={15} />
          </button>
        </div>
        <Toaster />
      </form>
    </header>
  );
}

export default SearchBar;