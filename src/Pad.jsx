import React from 'react';
import kick from './kick.wav'
import tom from './presets/Tom.wav'
import tom2 from './presets/Tom2.wav'
import redo from './presets/redo.wav'
import redo2 from './presets/redo2.wav'
import fng from './presets/fng.wav'
import hh from './presets/HiHat.wav'
import cabasa from './presets/CABASA.wav'
import sy from './presets/HIGHQ_C.wav'




const Pad = () => {

    window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    });



    return ( 
        <>

        <div className="keys">
            <div data-key="65" className="key">
                <kbd>A</kbd>
                <span className="sound">kick</span>
            </div>
            <div data-key="65" className="key">
                <kbd>S</kbd>
                <span className="sound">snare</span>
            </div>
            <div data-key="65" className="key">
                <kbd>D</kbd>
                <span className="sound">tom</span>
            </div>
            <div data-key="65" className="key">
                <kbd>F</kbd>
                <span className="sound">hi-hat</span>
            </div>
            <div data-key="65" className="key">
                <kbd>G</kbd>
                <span className="sound">cabasa</span>
            </div>
            <div data-key="65" className="key">
                <kbd>H</kbd>
                <span className="sound">ride</span>
            </div>
            <div data-key="65" className="key">
                <kbd>J</kbd>
                <span className="sound">kick</span>
            </div>
            <div data-key="65" className="key">
                <kbd>K</kbd>
                <span className="sound">kick</span>
            </div>
            <div data-key="65" className="key">
                <kbd>L</kbd>
                <span className="sound">kick</span>
            </div>

        </div>

    <audio data-key="65" src={kick}></audio>    
    <audio data-key="83" src={redo}></audio>    
    <audio data-key="68" src={hh}></audio>    
    <audio data-key="70" src={tom2}></audio>    
    <audio data-key="71" src={fng}></audio>    
    <audio data-key="72" src={tom}></audio>    
    <audio data-key="74" src={cabasa}></audio>    


    </>

     );
}
 
export default Pad;
