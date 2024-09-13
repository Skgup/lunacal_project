// import React, { useState } from "react";

// const Gallery = () => {
//   const [images, setImages] = useState([]);

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files); // Convert FileList to array
//     const newImages = [];

//     files.forEach((file) => {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         newImages.push({
//           file: file,
//           preview: reader.result, // This is the base64 image preview
//         });

//         // Ensure that state is updated only after all images are read
//         if (newImages.length === files.length) {
//           setImages((prevImages) => [...prevImages, ...newImages]);
//         }
//       };
//       reader.readAsDataURL(file);
//     });
//   };

//   const handleUploadClick = () => {
//     // Handle upload logic here (e.g., sending images to backend)
//     images.forEach((img) => {
//       console.log("Image uploaded:", img.file);
//     });
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2>Upload Images</h2>

//       <input
//         type="file"
//         accept="image/*"
//         multiple
//         onChange={handleImageChange}
//       />
//       <br />
//       <br />
//       <button
//         onClick={handleUploadClick}
//         disabled={images.length === 0}
//         style={{
//           padding: "10px 20px",
//           cursor: images.length ? "pointer" : "not-allowed",
//         }}
//       >
//         Upload Images
//       </button>

//       <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
//         {images.map((img, index) => (
//           <div key={index} style={{ margin: "10px" }}>
//             <img
//               src={img.preview}
//               alt={`Selected ${index}`}
//               style={{ width: "150px", height: "150px", objectFit: "cover" }}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;




import React, { useState } from "react";

function Gallery() {
  const [images, setImages] = useState([]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleAddImage = async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        setImages([...images, { src: event.target.result }]);
      };

      reader.readAsDataURL(file);
    };
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg w-[100%] h-[100%]">
      <div className="flex justify-between items-center mb-4">
      <div className="flex justify-center items-center   border border-gray-00 rounded-[50%] w-[30px] h-[30px]  ">
          <span className="text-gray-400 text-xl m-auto ">?</span>
        </div> 
        <h2 className="text-white text-xl bg-black h-10 px-14 flex justify-center items-center font-bold rounded-xl ml-[-100px]">Gallery</h2>
        <div className="flex space-x-2">
          <button
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full shadow-cyan-500/50"
            onClick={handleAddImage}
          >
            + Add Image
          </button>
          <button
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full"
            onClick={handlePrevImage}
            disabled={images.length === 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleNextImage}
            disabled={images.length === 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {images.length > 0 &&
          images.map((image, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden"
            >
              <img
                src={image.src}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Gallery;