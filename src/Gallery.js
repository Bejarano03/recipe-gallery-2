import React, { useState } from "react";

// imageList.js
export const images = [
  {
    id: 1,
    url: "https://media3.giphy.com/media/UuB5lh1bL1Dl6svihe/giphy.webp?cid=790b7611fbqdfk9rbru1ka9rhw6l6iv4e66pwlfthdgzjk3s&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
    description: "Image 1 Description",
  },
  {
    id: 2,
    url: "https://media0.giphy.com/media/iibH5ymW6LFvSIVyUc/giphy.webp?cid=790b7611fbqdfk9rbru1ka9rhw6l6iv4e66pwlfthdgzjk3s&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
    description: "Image 2 Description",
  },
  // Add more images as needed
  {
    id: 3,
    url: "https://media4.giphy.com/media/duNowzaVje6Di3hnOu/200.webp?cid=790b7611fbqdfk9rbru1ka9rhw6l6iv4e66pwlfthdgzjk3s&ep=v1_gifs_trending&rid=200.webp&ct=g",
    description: "Image 3 Description",
  }
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  function handleReverseClick() {
    setIndex(index - 1);
  }

  let photos = images[index];

  return (
    <div>
      <div className="card">
        <button onClick={handleClick}>Next</button>
        <div>
        <img src={photos.url} alt="test" />
        </div>
        <p>{photos.description}</p>

        <button onClick={handleReverseClick}>Previous</button>
      </div>
    </div>
  );
}
