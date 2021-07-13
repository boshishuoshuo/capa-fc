import React from 'react';

import classes from './NewsPosts.module.css';
import NewsPost from './NewsPost/NewsPost';

const newsPosts = (props) => {
    return (
        <div className={classes.NewsPosts}>
            {props.news.map(singlenews => (
                <NewsPost 
                    key={singlenews.title}
                    title={singlenews.title}
                    content={singlenews.content}/>
            ))}
        </div>
    )
}

export default newsPosts;