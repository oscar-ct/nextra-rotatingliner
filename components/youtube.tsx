import React from "react";
import styles from "../components/youtube.module.css"

const YoutubeEmbed = ({ embedId }) => (
    <div className={styles.videoResponsive}>
        <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>


);

export default YoutubeEmbed