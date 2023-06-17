import React from 'react';
import { Button } from 'react-bootstrap';

export default function Video() {
  return (
    <div id='video'>
      <h4 className="mb-4 text-muted">
        <b>RELATED VIDEOS</b>
      </h4>
      <div className="video-content row">
        <div className="col-12 col-lg-3" key={1} style={{ paddingBottom: '22px' }}>
          <div className="video-card card">
            <div className="card-body embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                style={{ border: 0 }}
                src="https://www.youtube.com/embed/FMTYqMdWXPE"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3" key={2} style={{ paddingBottom: '22px' }}>
          <div className="video-card card">
            <div className="card-body embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                style={{ border: 0 }}
                // width="560"
                // height="315"
                src="https://www.youtube.com/embed/0wMgfBAMqEM"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3" key={3} style={{ paddingBottom: '22px' }}>
          <div className="video-card card">
            <div className="card-body embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                style={{ border: 0 }}
                // width="560"
                // height="315"
                src="https://www.youtube.com/embed/snbWoHHDdCg"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3" key={4} style={{ paddingBottom: '22px' }}>
          <div className="video-card card">
            <div className="card-body embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                style={{ border: 0 }}
                // width="560"
                // height="315"
                src="https://www.youtube.com/embed/_5gjEgKLIiY"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Button
          href="https://www.youtube.com/@NovaIVFFertility"
          target="_blank"
          style={{ textDecoration: 'none', width: 'auto' }}
        >
          VIEW MORE
        </Button>
      </div>
    </div>
  );
}
