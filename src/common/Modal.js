import React from 'react'
import parse from 'html-react-parser';

const Modal = (props) => {
    return (
        <li className="modal fade" id="box1" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="inside-wrapper modal-wrapper">
                    <div className="container">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content rounded-0">
                                <div className="modal-body">
                                    <div className="container-fluid">
                                        <div className="row py-5">
                                            <div className="col-md-4">
                                                <div className="image-wrapper">
                                                    <img src={props.src} className="image-detailed" />
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <p className="date my-3">{props.date}</p>
                                                <div className="title">
                                                   {props.title}
                                                </div>
                                                <div className="detailed-text">
                                                   {parse(props.content)}
                                                </div>
                                            </div>
                                            <div className="button-wrapper">
                                                <a href="javascript:;" data-toggle="modal" data-target="#box1"><img src="images/static/cross.svg" className="close" /></a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
}
export default Modal;
