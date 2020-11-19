import React, { useState } from 'react';
import ReactGiphySearchbox from "react-giphy-searchbox";
import lib from 'react-scroll-to-bottom';

import './gifSearch.css';


const Gif = ({ setMessage, setClickGif, setClickStickers, library }) => {
    const [gif, setGif] = useState("");
    const [stickers, setStickers] = useState("");

    const selectMedia = (item) => {
        console.log(item);
        if (library === 'stickers') {
            setStickers(item.images.original.url)
            setMessage(item.images.original.url)
            setClickStickers(false);
        }
        else {
            setGif(item.images.original.url)
            setMessage(item.images.original.url)
            setClickGif(false)

        }
    }
    let placeholder = library === "stickers" ? "Search for Stickers" : "Search for GIFs";
    return (
        <div className="App">
            <ReactGiphySearchbox
                apiKey="7mG2YLq7OBLyrlxpi0o64vb0mB8wHHPh"
                onSelect={item => selectMedia(item)}
                library={library}
                searchPlaceholder={placeholder}
                masonryConfig={[
                    { columns: 3, imageWidth: 110, gutter: 5 },
                    { mq: "700px", columns: 6, imageWidth: 120, gutter: 5 }
                ]}
            />

        </div>
    );
}

export default Gif;