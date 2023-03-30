import { useState } from "react";
import pic from "../../assets/aroun-tiffany.jpeg";
import pic2 from "../../assets/aroun-tiffany1.jpeg";
import pic3 from "../../assets/aroun-tiffany2.jpeg";
import pic4 from "../../assets/aroun-tiffany3.jpeg";
import pic5 from "../../assets/aroun-tiffany4.jpeg";
import pic6 from "../../assets/aroun-tiffany6.jpeg";
import pic7 from "../../assets/aroun-tiffany7.jpeg";
import pic8 from "../../assets/aroun-tiffany8.jpeg";
import pic9 from "../../assets/aroun-tiffany9.jpeg";
import pic10 from "../../assets/aroun-tiffany10.jpeg";
import pic11 from "../../assets/aroun-tiffany11.jpeg";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery() {
  const fife = 20 * 0.5;
  console.log(fife);
  const images = [
    {
      id: 1,
      src: pic,
      width: 768,
      height: 1024,
    },
    { id: 2, src: pic2, width: 768, height: 1024 },
    { id: 3, src: pic3, width: 768, height: 1024 },
    { id: 4, src: pic4, width: 768, height: 1024 },
    { id: 5, src: pic5, width: 768, height: 1024 },
    { id: 6, src: pic6, width: 768, height: 1024 },
    { id: 7, src: pic7, width: 768, height: 1024 },
    { id: 8, src: pic8, width: 576, height: 1024 },
    { id: 9, src: pic9, width: 768, height: 1024 },
    { id: 10, src: pic10, width: 512, height: 906 },
    { id: 11, src: pic11, width: 768, height: 1024 },
  ];

  const photos = images.map((photo) => ({
    src: photo.src,
    width: photo.width,
    height: photo.height,
  }));

  const [index, setIndex] = useState(-1);
  //   const [open, setOpen] = useState(false);

  return (
    <section className="gallery">
      <PhotoAlbum
        layout="rows"
        photos={photos}
        onClick={({ index }) => {
          setIndex(index);
          //   setOpen(true);
        }}
      />
      <Lightbox
        // isOpen={open}
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // currentIndex={currentImageIndex}
      />
    </section>
  );
}
