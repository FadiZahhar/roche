import React from 'react'
import List from '../common/List';
import {whowearedata} from '../data/data';

const Whoweare = (props) => {
    
    return (
        <section className="banner-section" id="banner-section">
        <div className="container-fluid">
            <div className="row justify-content-end reverse">
                <div className="col-md-4">
                    <div className="text-wrapper">
                        <p className="title mb-5">
                            {whowearedata.header}
                        </p>
                        <ul className="listing-text">
                             {whowearedata.listing_text.map((list) => {
                            const { text, href,target, label } = list;
                            return (
                              <List text={text} href={href} target={target} label={label} />
                            );
                            })}
                            <li>
                                <span>{whowearedata.listing_sub_header}</span>
                                <ul className="listing-sub">
                                    
                                     {whowearedata.listing_sub.map((list) => {
                            const { text, href,target, label } = list;
                            return (
                              <List text={text} href={href} target={target} label={label} />
                            );
                            })}
                                   
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-7 nopadding">
                    <div className="image-wrapper">
                        <img src="images/dynamic/Hemophilia.png" alt="First slide" className="banner-image w-100" />
                    </div>
                </div>
            </div>
        </div>
    </section>
        );
}

export default Whoweare