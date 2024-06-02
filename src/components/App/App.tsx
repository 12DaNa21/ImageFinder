import { useEffect, useState } from "react";
import { fetchImages, ImageResult } from "../../photo-api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import NotFoundError from "../NotFoundError/NotFoundError";

const App: React.FC = () => {
  const [imgs, setImgs] = useState<ImageResult[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [notFoundError, setNotFoundError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const [imgUrl, setImgsUrl] = useState<string>(""); // Consider using array if multiple images
  const [likes, setLikes] = useState<number | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (!query) {
      return;
    }

    const getImages = async () => {
      try {
        setError(false);
        setLoading(true);
        setNotFoundError(false);

        const newImgs = await fetchImages(page, query);

        if (newImgs.length === 0) {
          setNotFoundError(true);
        }

        setImgs((prevImages) => [...prevImages, ...newImgs]);
      } catch (error) {
        setError(true);
        setErrorMessage("Error fetching images. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    getImages();
  }, [query, page]);

  const handleSubmit = (query: string) => {
    setQuery(query);
    setPage(1);
    setImgs([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = (url: string, like: number, nameUser: string) => {
    setImgsUrl(url);
    setLikes(like);
    setUserName(nameUser);
    toggle();
  };

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {imgs.length > 0 && <ImageGallery onImgClick={openModal} items={imgs} />}
      {notFoundError && <NotFoundError />}
      {error && <ErrorMessage message={errorMessage} />}
      {loading && <Loader />}
      {imgs.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore} />}
      {modal && (
        <ImageModal
          image={imgUrl}
          imgModal={modal}
          onModalClose={toggle}
          imgLikes={likes}
          user={userName}
        />
      )}
    </div>
  );
}

export default App;