import React from 'react'
import {howtojoin} from '../data/data';
import List from '../common/List';

const Howtojoin = (props) => {
    return(
            <section className="join-section" id="join-section">
        <div className="wrapper">
            <div className="container-fluid nopadding">
                <div className="row">
                    <div className="col-md-6 nopadding">
                        <div className="div-image">
                            <img src={howtojoin.img_src} alt={howtojoin.img_alt} className="banner-image w-100" />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="text-wrapper mr-5 py-5">
                            <p className="title mb-5">
                                {howtojoin.title}
                            </p>
                            <ul className="listing-text">
                                <li className="mb-5">
                                   {howtojoin.intro}
                                </li>
                                <li>
                                    {howtojoin.subtitle}
                                </li>
                                <ul className="listing-sub">
                                {howtojoin.listing_sub.map((list) => {
                                      const { text } = list;
                                      return (
                                        <List text={text} />
                                      );
                                    })}
                                    
                                </ul>
                                <li className="mt-4">
                                  {howtojoin.subtitle}
                                </li>
                                <li>
                                <ul className="listing-sub">
                                     {howtojoin.subtitle_listing_sub.map((list) => {
                                      const { text,href,label } = list;
                                      return (
                                        <List text={text} href={href} label={label} />
                                      );
                                    })}
                                </ul>
                                </li>
                            </ul>
                            <button className="btn btn-primary" target="_blank"
                                onClick={(e) => window.open(`${howtojoin.button_link}`)}>
                                {howtojoin.button_label}
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
        );
}

export default Howtojoin;