import React from 'react'
import {footer,footermenu,footerlogo} from '../data/data';
import FooterMenu from './FooterMenu';
import parse from 'html-react-parser';
import ListImage from './ListImage';

const Footer = (props) => {

  return (
       <div className="section-footer" id="section-footer">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <ul className="listing-horizontal my-auto">
                        <li>
                            <a href={footerlogo.href}><img src={footerlogo.src} alt={footerlogo.alt} className="logo-brand" /></a>
                        </li>
                        <li className="redirection">
                            <ul className="listing-vertical two-col">
                               {footermenu.map((link) => {
                                const {href,label } = link;
                                return (
                                  <FooterMenu href={href} label={label} />
                                );
                              })}
                            </ul>
                        </li>
                        <li className="wrapper">
                            <ul className="listing-vertical">
                                <li className="title">
                                {footer.title}
                                </li>
                                <li className="name">
                                   {footer.name}
                                </li>
                                <li>
                                   {parse(footer.position)}

                                </li>
                                {footer.icon_list.map((list) => {
                                const {href,label , icon, dir} = list;
                                return (
                                  <ListImage href={href} icon={icon} label={label} dir={dir} />
                                );
                              })}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer