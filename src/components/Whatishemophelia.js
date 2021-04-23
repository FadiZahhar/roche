import React, {useState} from 'react'
import Card from '../common/Card';
import Modal from '../common/Modal';
import {infosection,cards} from '../data/data';


const Whatishemophelia = (props) => {
    
    const handleCard = (src,alt,date,title,content) => {
setModal({
    src:src,
    alt:alt,
    date:date,
    title:title,
    content:content
})
}
    const modalData = {
        src:"",
        alt:"",
        date:"",
        title:"",
        content:"",
    };
    const [modal,setModal] = useState(modalData);
    return (
        <section className="info-section" id="info-section">
        <div className="wrapper">
            <div className="background-blue"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="title">
                          {infosection.title}
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="more text-left">
                            <a href={infosection.moreinfo_href} className="more text-left">
                            {infosection.moreinfo_label}
                 
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <div className="subtitle">
                            {infosection.subtitle}
                        </div>
                        <div className="detailed-text">
                            {infosection.details_text}
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="subtitle">
                          {infosection.subtitle2}
                        </div>
                        <div className="detailed-text">
                           {infosection.details_text2}
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="more-s my-4">
                            <a href={infosection.moreinfo_href} className="more-s">
                            {infosection.moreinfo_label}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row" id="moreInfo">
                    <div className="col-12">
                        <div className="subtitle my-4">
                            {infosection.section_title}
                        </div>
                    </div>
                </div>
                <div className="row">
                
                {cards.map((card) => {
                                const { src,alt,date, title, content } = card;
                                return (
                                  <Card src={src} alt={alt} title={title} date={date} click={(e)=> handleCard(src,alt,date,title,content)}/>
                                );
                              })}
                    

                
                </div>
            </div>
        </div>



        <ul className="modal-listing-wrapper">
 
 
            <Modal src={modal.src} alt={modal.alt} date={modal.date} title={modal.title} content={modal.content} />

           
        </ul>
    </section>
        )
}

export default Whatishemophelia;

