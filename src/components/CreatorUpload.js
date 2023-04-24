import React, { useState } from "react";
import "../styling/CreatorDashBoard.css";
import Header from "./Header";

function Creator() {
    const [podcastTitle, setPodcastTitle] = useState("");
    const [podcastGenre, setPodcastGenre] = useState("");
    const [podcastKeywords, setPodcastKeywords] = useState("");
    const [podcastThumbnail, setPodcastThumbnail] = useState(null);
    const [podcastFile, setPodcastFile] = useState(null);

    const handleTitleChange = (e) => {
        setPodcastTitle(e.target.value);
    };

    const handleGenreChange = (e) => {
        setPodcastGenre(e.target.value);
    };

    const handleKeywordsChange = (e) => {
        setPodcastKeywords(e.target.value);
    };

    const handleThumbnailChange = (e) => {
        setPodcastThumbnail(e.target.files[0]);
    };

    const handlePodcastFileChange = (e) => {
        setPodcastFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // code to submit form data to backend
    };

    return (
        <>
            <Header />
            <div className="creator-container">
                <form className="creator-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="podcastTitle">Podcast Title:</label>
                        <input
                            type="text"
                            id="podcastTitle"
                            value={podcastTitle}
                            onChange={handleTitleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="podcastGenre">Podcast Genre:</label>
                        <input
                            type="text"
                            id="podcastGenre"
                            value={podcastGenre}
                            onChange={handleGenreChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="podcastKeywords">Podcast Keywords:</label>
                        <input
                            type="text"
                            id="podcastKeywords"
                            value={podcastKeywords}
                            onChange={handleKeywordsChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="podcastThumbnail">Podcast Thumbnail:</label>
                        <input
                            type="file"
                            id="podcastThumbnail"
                            accept="image/*"
                            onChange={handleThumbnailChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="podcastFile">Podcast File:</label>
                        <input
                            type="file"
                            id="podcastFile"
                            accept="audio/*,video/*"
                            onChange={handlePodcastFileChange}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Creator;
