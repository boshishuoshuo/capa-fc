import React from 'react';

import classes from './NewsPost.module.css';

const newsPost = (props) => {
    return (
        <div className={classes.NewsPost}>
            <h3 className={classes.Title}>{props.title}</h3>
            <article className={classes.Content}>{props.content}</article>
        </div>
    )
}

export default newsPost;