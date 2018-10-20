import React from 'react';
import VideosList from '../../widgets/VideodList';

const videosSec = () => {
    return (
        <div>
            <VideosList
                type='card'
                loadmore={true}
                start={0}
                amount={7}
            />
        </div>
    );
};

export default videosSec;