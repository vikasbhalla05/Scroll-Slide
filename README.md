# Creating the intuition

1. Select all the images
2. create function to check slide every time a person scroll
3. Add event listener on the scroll event for the window and check slide
4. pass in the check slide function in the debouce function to control the event triggering 
5. In the checkslide function loop in all the slides and do math when the image is half shown
6. When the image should slid in at - ```window.slideY + window.innerHeight + sliderImage.height/2```
7. Get the images bottom : ```slideImage.offsetTop + sliderImage.height```
8. is the image half shown : ```slideInAt > sliderImage.offsetTop```
9. if the image not scrolled Past : ```window.scrollY < imageBottom```
10. Add the classList Active to the sliderImage


### learnings : Playing with window's dimention properties and mapping our content on the whole page