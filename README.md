# sansuisounds

Welcome to **SansuiSounds**, where you can create, and listen to, your very own digital zen garden.   

## Background & Overview  

Visitors can place different sized stones and bonzai trees into a digital sandbox to design their garden, dragging and dropping the items from a bucket at the 
bottom of the canvas. The sandbox and items will appear as a stylistic abstraction based on the ancient Japanese gardening style *Karesansui*.

Once satisfied with your design...it's time to rake! 
Press the play button at the bottom of the screen to watch as a rake pulls across the garden, drawing fine lines in the 'sand' around your designs, creating ripples around the stones or trees.

Make sure you have your volume on-- these five-toothed rakes are actually creating musical staves, and your stones have become the notes! As the rake encounters these objects on its path, you can listen to the soothing chimes of your own design.

When it hits the final note, you can play it again to enjoy your work, or clear the sand and start your new sansuisound-- no two are the same!


## Functionality & MVPs

- Dropdown menu with instructions and personal site links (i.e. this github)
- Drag & Droppable items (stones of different sizes, bonzai trees)
- Play button at bottom of page for both ambiance music and to trigger rake
- Drawing effects & Sound effects upon playing the rake, larger items or clusters of items generate deeper chimes, smaller items higher chimes
- Clear sandbox ability

## Wireframes
### Grid layout
![wireframe-1](https://github.com/beccaburten/sansuisounds/blob/master/src/images/wireframes/Wireframe%201.jpg)

### Highlighted stone, dragged and dropped into garden
![wireframe-2](https://github.com/beccaburten/sansuisounds/blob/master/src/images/wireframes/Wireframe%202.jpg)


### Rake pulled across top row, hits objects and generates ripple-effect circles and chime sound 
![wireframe-3](https://github.com/beccaburten/sansuisounds/blob/master/src/images/wireframes/Wireframe%203.jpg)


## Expected Technologies
1. Javascript
2. Canvas API
3. Sound library, currently considering:
- [SoundJS](https://createjs.com/soundjs) -- for controlling sound, imported from elsewhere
- [Howler.js](https://github.com/goldfire/howler.js#documentation) -- for controlling sound, imported from elsewhere
- [Tone.js](https://tonejs.github.io/) -- sound options may be too synth-y, and not calming
- [P5.js](https://p5js.org/examples/sound-load-and-play-sound.html)
4. [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
**Technological Challenges**
- How to integrate the Canvas line drawing animation so that it pauses on encountering a garden item, triggering a new encircling-draw around the item, and restarts
- How to trigger a chime sound event upon the encircling of the items, and alter tone of sound based on object size
- Will the bucket of draggable items be kept in the same wider Canvas dimensions as the garden, or will there be two Canvas elements on the page(bucket, garden)? If the former, based on my grid, can the play button structure be kept inside the confines of a canvas element?

## Timeline
### Day 1: 
Build grid layout and style, generate canvas element and incorporate all garden items (decide whether to design from scratch using bezier, or include as pngs).

### Day 2:
Create drag & drop functionality for garden items: prevent items from being dropped outside of garden canvas or on top of one another, and maintain garden items within bucket at bottom of screen for item duplicability.  

### Day 3:
Generate 5-toothed rake-drag upon play button click, drawing 5 synchronous lines from left to right within the canvas. Upon reaching the end of the canvas, rake should begin again at the left spaced evenly below the last pull until the bottom of the canvas is reached. Code collision detection: within a calculated pixel radius of garden item, rake should draw a 5-toothed ripple-effect circular pattern around items, then continue with straight lines.

### Day 4:
Research and implement musical capability: garden items will trigger musical tones upon collision detection. Tone will be determined by the following criteria:
- duration: length of time taken to draw ripple effect around item (i.e. more items, larger items will sound for longer)
- pitch: each garden item will be associated with a pitch, with largest items generating the deepest pitch (if groups of items are together, default to leftmost item that triggered collision event)
