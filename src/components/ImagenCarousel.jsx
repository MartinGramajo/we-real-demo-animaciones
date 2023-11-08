import { useState } from "react";
import { Carousel, Modal } from "react-bootstrap";
import banner1 from "../assets/img/banner1.png";
import banner2 from "../assets/img/banner2.png";
import banner3 from "../assets/img/banner3.png";
import banner4 from "../assets/img/banner4.png";

function ImageCarousel() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [banner1, banner2, banner3, banner4];

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  return (
    <div className="text-center my-4">
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="imagenes-carousel-equipo"
              src={image}
              alt={`Slide ${index}`}
              onClick={() => openModal(image)}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <Modal size="lg" centered show={showModal} onHide={closeModal}>
        <Modal.Body>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Imagen en modal"
              style={{ width: "100%", height: "auto" }}
            />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ImageCarousel;
