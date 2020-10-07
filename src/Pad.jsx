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

   

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
if(e.propertyName !== 'transform') return;
this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);


    return ( 
        <>

        <div class="keys">
            <div data-key="65" class="key">
                <kbd>A</kbd>
                <span class="sound">kick</span>
            </div>
            <div data-key="83" class="key">
                <kbd>S</kbd>
                <span class="sound">snare</span>
            </div>
            <div data-key="68" class="key">
                <kbd>D</kbd>
                <span class="sound">tom</span>
            </div>
            <div data-key="70" class="key">
                <kbd>F</kbd>
                <span class="sound">hi-hat</span>
            </div>
            <div data-key="71" class="key">
                <kbd>G</kbd>
                <span class="sound">cabasa</span>
            </div>
            <div data-key="72" class="key">
                <kbd>H</kbd>
                <span class="sound">ride</span>
            </div>
            <div data-key="74" class="key">
                <kbd>J</kbd>
                <span class="sound">kick</span>
            </div>
            <div data-key="75" class="key">
                <kbd>K</kbd>
                <span class="sound">kick</span>
            </div>
            <div data-key="76" class="key">
                <kbd>L</kbd>
                <span class="sound">kick</span>
            </div>

        </div>

    <audio data-key="65" src={kick}></audio>    
    <audio data-key="83" src={redo}></audio>    
    <audio data-key="68" src={hh}></audio>    
    <audio data-key="70" src={tom2}></audio>    
    <audio data-key="71" src={fng}></audio>    
    <audio data-key="72" src={tom}></audio>    
    <audio data-key="74" src={cabasa}></audio>    
    <audio data-key="75" src={sy}></audio>  
    <audio data-key="76" src={redo2}></audio>  


    </>

     );
}
 
export default Pad;
