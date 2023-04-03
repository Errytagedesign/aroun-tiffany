import { useState } from "react";
import pic from "../../assets/webp/Story001.webp";
import pic2 from "../../assets/webp/Story002.webp";
import pic3 from "../../assets/webp/Story003.webp";
import pic4 from "../../assets/webp/Story004.webp";
import pic5 from "../../assets/webp/Story005.webp";
import pic6 from "../../assets/webp/Story006.webp";
import pic7 from "../../assets/webp/Story007.webp";
import pic8 from "../../assets/webp/Story008.webp";
import pic9 from "../../assets/webp/Story009.webp";
import pic10 from "../../assets/webp/Story010.webp";
import pic11 from "../../assets/webp/Story011.webp";
import pic13 from "../../assets/webp/Story013.webp";
import pic14 from "../../assets/webp/Story014.webp";
import pic15 from "../../assets/webp/Story015.webp";
import pic16 from "../../assets/webp/Story016.webp";
import pic18 from "../../assets/webp/Story018.webp";
import pic20 from "../../assets/webp/Story020.webp";
import pic21 from "../../assets/webp/Story021.webp";
import pic22 from "../../assets/webp/Story022.webp";
import pic23 from "../../assets/webp/Story023.webp";
import pic24 from "../../assets/webp/Story024.webp";
import pic25 from "../../assets/webp/Story025.webp";
import pic26 from "../../assets/webp/Story026.webp";
import pic27 from "../../assets/webp/Story027.webp";
import pic28 from "../../assets/webp/Story028.webp";
import pic29 from "../../assets/webp/Story029.webp";
import pic30 from "../../assets/webp/Story030.webp";
import pic31 from "../../assets/webp/Story031.webp";
import pic32 from "../../assets/webp/Story032.webp";
import pic33 from "../../assets/webp/Story033.webp";
import pic34 from "../../assets/webp/Story034.webp";
import pic35 from "../../assets/webp/Story035.webp";
import pic36 from "../../assets/webp/Story036.webp";
import pic37 from "../../assets/webp/Story037.webp";
import pic38 from "../../assets/webp/Story038.webp";
import pic2geda from "../../assets/webp/2togetheras1.webp";
import pic2geda1 from "../../assets/webp/2togetheras2.webp";
import pic2geda2 from "../../assets/webp/2togetheras3.webp";
import pic2geda3 from "../../assets/webp/2togetheras4.webp";
import pic2geda4 from "../../assets/webp/2togetheras5.webp";
import pic2geda5 from "../../assets/webp/2togetheras6.webp";
import pic2geda6 from "../../assets/webp/2togetheras7.webp";
import pic2geda7 from "../../assets/webp/2togetheras18.webp";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery() {
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
    { id: 11, src: pic11, width: 512, height: 906 },
    { id: 12, src: pic13, width: 768, height: 1024 },
    { id: 13, src: pic2geda1, width: 4032, height: 2688 },
    { id: 39, src: pic2geda2, width: 768, height: 1024 },
    { id: 40, src: pic2geda3, width: 768, height: 1024 },
    { id: 41, src: pic2geda4, width: 768, height: 1024 },
    { id: 42, src: pic2geda5, width: 768, height: 1024 },
    { id: 43, src: pic2geda6, width: 768, height: 1024 },
    { id: 44, src: pic2geda7, width: 768, height: 1024 },
    { id: 45, src: pic2geda, width: 768, height: 1024 },
    { id: 14, src: pic14, width: 768, height: 1024 },
    { id: 15, src: pic15, width: 768, height: 1024 },
    { id: 16, src: pic16, width: 768, height: 1024 },
    { id: 18, src: pic18, width: 768, height: 1024 },
    { id: 20, src: pic20, width: 768, height: 1024 },
    { id: 21, src: pic21, width: 2049, height: 1536 },
    { id: 22, src: pic22, width: 768, height: 1024 },
    { id: 23, src: pic23, width: 768, height: 1024 },
    { id: 24, src: pic24, width: 768, height: 1024 },
    { id: 25, src: pic25, width: 2049, height: 1536 },
    { id: 26, src: pic26, width: 2049, height: 1536 },
    { id: 27, src: pic27, width: 2049, height: 1536 },
    { id: 28, src: pic28, width: 768, height: 1024 },
    { id: 29, src: pic29, width: 768, height: 1024 },
    { id: 30, src: pic30, width: 768, height: 1024 },
    { id: 31, src: pic31, width: 768, height: 1024 },
    { id: 36, src: pic36, width: 768, height: 1024 },
    { id: 32, src: pic32, width: 768, height: 1024 },
    { id: 33, src: pic33, width: 768, height: 1024 },
    { id: 34, src: pic34, width: 2049, height: 1536 },
    { id: 35, src: pic35, width: 2049, height: 1536 },
    { id: 37, src: pic37, width: 2049, height: 1536 },
    { id: 38, src: pic38, width: 2049, height: 1536 },
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
