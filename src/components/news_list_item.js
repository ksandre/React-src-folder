import React from 'react';

const NewsItem = (props) => {
    return (
        <div key={props.item.id}>
            <h3>{props.item.title}</h3>
            <span>
                {props.item.feed}
            </span>
        </div>
    )
}

export default NewsItem;