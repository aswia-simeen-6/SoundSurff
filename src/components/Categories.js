import React from "react";
import "../styling/Categories.css";
import Header from "./Header";

function Categories() {
    return (
        <>
            <Header />
            <div className="categories">
                <h1>Categories</h1>
                <div className="category-grid">
                    <div className="category">
                        <img src={"https://cdn.pixabay.com/photo/2018/01/04/19/43/love-3061483_960_720.jpg"} alt="Romance" />
                        <h2>Romance</h2>
                    </div>
                    <div className="category">
                        <img src="https://www.thoughtco.com/thmb/bxhYiKsYjX7pDWAs7_eOhC3wI3U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/usa--new-york-state--new-york-city--crime-scene-barrier-tape-160018693-5ad2a55afa6bcc00368f0d73.jpg" alt="Crime" />
                        <h2>Crime</h2>
                    </div>
                    <div className="category">
                        <img src={"https://img.freepik.com/free-vector/red-ball-hitting-wicket-stumps-with-bat-black-abstract-splash-background-cricket-fever-concept_1302-5492.jpg?w=740&t=st=1682101827~exp=1682102427~hmac=6093796504bdde8faf38bffc9196ca8ee8dfe1991f5a2aa0b85f68d802b63976"} alt="Cricket" />
                        <h2>Cricket</h2>
                    </div>
                    <div className="category">
                        <img src={"https://thumbs.dreamstime.com/z/learn-study-inspect-mystery-pictured-as-magnifying-glass-enlarging-word-symbolizes-researching-exploring-analyzing-meaning-164571087.jpg"} alt="Mystery" />
                        <h2>Mystery</h2>
                    </div>
                    <div className="category">
                        <img src={"https://png.pngtree.com/template/20220525/ourmid/pngtree-stand-up-comedy-neon-sign-with-microphone-and-red-curtain-vector-image_1664011.jpg"} alt="Stand Up" />
                        <h2>Stand Up </h2>
                    </div>
                    <div className="category">
                        <img src={"https://img.freepik.com/free-photo/young-beautiful-girl-hiding-face-with-hands-grey-wall_176420-696.jpg?w=1060&t=st=1682345382~exp=1682345982~hmac=d3b5672f98eea2177e661d7c47002d41d07293bb26fff50d268bd2659d286f1d"} alt="Sad" />
                        <h2>Sad </h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Categories;
