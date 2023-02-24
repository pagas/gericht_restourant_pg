import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';
import './Intro.css';
const Intro = () => {
    const vidRef = React.useRef();
    const [playVideo, setPlayVideo] = React.useState(false);
    const handleVideo = () => {
        console.log('what is vref', vidRef)
        console.log('playvideo before', playVideo)
        // setPlayVideo((prev) => !prev);
        setPlayVideo(!playVideo);
        console.log('playvideo after', playVideo)
        if (playVideo) {
            vidRef.current.pause();
        } else {
            vidRef.current.pay();
        }
    }
    return (
        <div className="app__video">
            <video src={meal} type="video/mp4" loop controls={false} muted ref={vidRef}></video>
            <div className="app__video-overlay flex__center" >
                <div className="app__video-overlay_circle flex__center"
                     onClick={handleVideo}
                >
                    {playVideo
                        ? <BsPauseFill color="#fff" fontSize={30}/>
                        : <BsFillPlayFill color="#fff" fontSize={30} />
                    }
                </div>
            </div>
        </div>
    );
}

export default Intro;
