# sansuisounds

Welcome to [SansuiSounds](https://beccaburten.github.io/sansuisounds/), where you can create, and listen to, your very own digital zen garden.   

## Background & Overview  

Visitors can place different sized stones and bonzai trees into a digital sandbox to design their garden, dragging and dropping the items from a bucket at the 
bottom of the canvas. The sandbox and items will appear as a stylistic abstraction based on the ancient Japanese gardening style *Karesansui*.

Once satisfied with your design...it's time to rake! 
Press the play button at the bottom of the screen to watch as a rake pulls across the garden, drawing fine lines in the 'sand' around your designs, creating ripples around the stones or trees.

Future Feature:
Make sure you have your volume on-- these five-toothed rakes are actually creating musical staves, and your stones have become the notes! As the rake encounters these objects on its path, you can listen to the soothing chimes of your own design.

When it hits the final note, you can play it again to enjoy your work, or clear the sand and start your new sansuisound-- no two are the same!


## Functionality & MVPs

- Dropdown menu with instructions and personal site links (i.e. this github)
- Drag & Droppable items (stones of different sizes, bonzai trees)
- Drawing effects upon playing the rake
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

**Technological Challenges**
- How to integrate the Canvas line drawing animation so that it pauses on encountering a garden item, triggering a new encircling-draw around the item, and restarts
- Will the bucket of draggable items be kept in the same wider Canvas dimensions as the garden, or will there be two Canvas elements on the page(bucket, garden)? If the former, based on my grid, can the play button structure be kept inside the confines of a canvas element?

**Future Features**
- Add sound component: chiming tones generate as rake encounters an item in the sandbox, using sound library [Tone.js](https://tonejs.github.io/) & [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

