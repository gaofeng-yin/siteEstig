import React, { Component } from 'react';
import Link from 'next/link';
import ReactPlayer from "react-player";
import Modal from "react-responsive-modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Video extends Component {

    state = {
        open: false
      };
    
      onOpenModal = () => {
        this.setState(prevState => ({
          open: !prevState.open
        }));
      };

      onCloseModal = () => {
        this.setState(prevState => ({
          open: !prevState.open
        }));
      };

    render() {
        return (
            <React.Fragment>
                <Modal
                    open={this.state.open}
                    onClose={this.onCloseModal}
                    styles={{
                    modal: {
                        maxWidth: "unset",
                        width: "70%",
                        padding: "unset"
                    },
                    overlay: {
                        background: "rgba(0, 0, 0, 0.5)"
                    },
                    closeButton: {
                        background: "yellow"
                    }
                    }}
                    center
                >
                    <ReactPlayer
                    url="https://www.youtube.com/watch?v=4DfqI-Vd5I8"
                    width="100%"
                    height="calc(100vh - 100px)"
                    />
                </Modal>
                <section className="video-area z-index">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title-wrapper mb-45 text-center">
                                    <h5 className="section-subtitle mb-20">one minute video</h5>
                                    <h2 className="section-title mb-35">Watch video work</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="kvideo-wrapper" data-aos="zoom-in" data-aos-duration="1000">
                                    <div className="kvideo" style={{ backgroundImage:`url(${'assets/img/bg/video-bg.jpg'})`}}>
                                        <div className="kvideo-sign text-center">
                                            <a href="#!" className="play-btn" onClick={this.onOpenModal}> <i><FontAwesomeIcon icon={['fas', 'play']} /></i> </a>
                                            <h2>Bem-Vindo ao IPB</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Video;