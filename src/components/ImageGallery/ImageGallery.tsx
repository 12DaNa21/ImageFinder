import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

interface ImageGalleryProps {
  items: { id: string; url: string }[]; 
  onImgClick: (url: string) => void; 
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImgClick }) => {
  return (
    <div>
      <ul className={css.list}>
        {items.map((item) => (
          <li className={css.item} key={item.id}>
            <ImageCard onImgClick={onImgClick} item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ImageGallery;