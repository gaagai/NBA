import React from 'react';
import Slider from  '../widgets/slider';
import NewsList from  '../widgets/NewsList';

const NewsMain = () => {
    return (
        <div>
           <Slider 
               type="featured"
                start={0}
                amount={3}
                settings={{
                    dots:false
                }}
           />
            <NewsList
                type="cardMain"
                loadmore={true}
                start={3}
                amount={5}
            />
        </div>
    );
};

export default NewsMain;