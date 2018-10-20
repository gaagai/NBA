import React from 'react';
// Components    
import NewsSlider from '../widgets/slider';
import NewsList from '../widgets/NewsList';
import VideosList from '../widgets/VideodList';


const Home = () => {
    return (
        <div>
            <NewsSlider
                type="featured"
                start={0}
                amount={3}
                settings={{
                    dots:false
                }}
            />
            <NewsList
                type="card"
                loadmore={true}
                start={3}
                amount={3}
            />
            <VideosList
                type='card'
                title={true}
                loadmore={true}
                start={0}
                amount={3}

            />
        </div>
    );
};

export default Home;