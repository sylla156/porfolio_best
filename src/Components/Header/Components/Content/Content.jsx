import React from 'react';
import './content.scss';
import WebsiteContent from '../../../../assets/js/websiteContent';

export default function Content({}) {
    const contents = WebsiteContent().header.content

    return (
        <div className="content">
            <div className="content__title">
                <p className='content__title--title'>{contents[0]}</p>
                <p className='content__title--title'>{contents[1]}</p>
            </div>
           
        </div>
    );
}
