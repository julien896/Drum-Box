import React from 'react';

const Pad = () => {

    window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!audio) return;
    audio.play()
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

    <audio data-key="65" src="presets/kick.wav"></audio>    
    <audio data-key="83" src="presets/redo.wav"></audio>    
    <audio data-key="68" src="presets/Tom.wav"></audio>    
    <audio data-key="70" src="presets/HiHat.wav"></audio>    
    <audio data-key="71" src="presets/fng.wav"></audio>    
    <audio data-key="72" src="presets/kick.wav"></audio>    
    <audio data-key="74" src="presets/kick.wav"></audio>    

    </>

     );
}
 
export default Pad;
