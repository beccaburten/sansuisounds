# sansuisounds

Welcome to **SansuiSounds**, where you can create, and listen to, your very own digital zen garden.   

## Background & Overview  

Visitors can place different sized stones and bonzai trees into a digital sandbox to design their garden, dragging and dropping the items from a bucket at the 
bottom of the screen. The sandbox and items will appear as a stylistic abstraction based on the ancient Japanese gardening style *Karesansui*.

Once satisfied with your design...it's time to rake! 
Press the play button at the bottom of the screen to watch as a five-toothed rake is pulled across the sandbox, creating fine lines in the 'sand' around your designs.
Upon encountering a stone or tree, the rake will instead draw a circle around the object, and continue on. 

Make sure you have your volume on-- these five-lined rakes are actually creating musical staves, and your stones have become the notes! You can listen to the 
soothing chimes of your own design as you watch your garden transform in the sand. 

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
2. Canvas
3. [Tone.js](https://tonejs.github.io/)
4. [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
5. [P5js](https://p5js.org/examples/sound-load-and-play-sound.html)
6. **Technological Challenges**
- How to integrate the Canvas line drawing animation so that it pauses on encountering a garden item, triggering a new encircling-draw around the item, and restarts
- How to trigger a chime sound event upon the encircling of the items, and alter tone of sound based on object size
- Will the bucket of draggable items be kept in the same wider Canvas dimensions as the garden, or will there be two Canvas elements on the page(bucket, garden)? If the former, based on my grid, can the play button structure be kept inside the confines of a canvas element?

## Timeline
### Day one: 
Build grid layout, style, and generate canvas drag & droppable functionality.

### Day two:
Generate play-buttons for rake-drag and ambiance music. Rake-drag button should pull in clean lines left to right, and create circle patterns around items.

### Day three:
Research and implement musical capability, so items in the garden generate unique sounds upon interaction with the rake.

