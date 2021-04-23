import React from 'react'


const Card = (props) => {

    return (
         <div className="col-md-4 nopadding" >
                        <div className="card-wrapper">
                            <div className="card card-box">
                                <div className="image-wrapper">
                                    <img className="card-img rounded-0" src={props.src}
                                        alt={props.alt} />
                                </div>
                                <div className="card-body">
                                    <div className="body-wrapper shadow">
                                        <p className="date mb-3">{props.date}</p>
                                        <a href="javascript:;" data-toggle="modal" data-target="#box1" onClick={props.click}>
                                            <p className="text-wrapper">
                                                {props.title}
                                            </p>
                                            <img className="icon-wrapper" src="images/static/open-arrow.svg" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        )
}

export default Card;

