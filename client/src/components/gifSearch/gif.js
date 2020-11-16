import React, { useState } from 'react';
import ReactGiphySearchbox from "react-giphy-searchbox";


const Gif = ({ setMessage, setClickGif }) => {
    const [gif, setGif] = useState("");

    const selectGif = (item) => {
        console.log(item);
        setGif(item.images.original.url)
        setMessage(item.images.original.url)
        setClickGif(false)
    }

    return (
        <div className="App">
            <ReactGiphySearchbox
                apiKey="7mG2YLq7OBLyrlxpi0o64vb0mB8wHHPh"
                onSelect={item => selectGif(item)}
                masonryConfig={[
                    { columns: 2, imageWidth: 110, gutter: 5 },
                    { mq: "700px", columns: 6, imageWidth: 120, gutter: 5 }
                ]}
            />

            {/* <div>
                <img width="500px" src={gif} />
            </div> */}

        </div>
    );
}

export default Gif;