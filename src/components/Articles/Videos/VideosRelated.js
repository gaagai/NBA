import React from 'react';
import style from '../articles.css';
import VideoListTemplate from '../../widgets/VideosTemplate';


const VideosRelated = (props) => {
    return (
        <div className={style.relatedWrap}>
            <h2>Related Videos</h2>
            <VideoListTemplate
                data={props.data}
                teams={props.teams}
            />
        </div>
    );
};

export default VideosRelated;