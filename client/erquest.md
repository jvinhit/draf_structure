1. Build a React Component called Countdown that takes a date from user and
displays a countdown to that date.

- Input: User enter or select the date (required | valid date)
- Output: 
+ A countdown result with formated ".. days .. months .. years ..hours .. minutes ..seconds "
+ Alert a message after countdown completed

2. Build a React Component called ImageGallery that takes images from user and
displays a gallery slider.

- Input: User enter images (not only <img /> but also other elements like <div />, <p />...)
as the children of Component. Example:

<ImageGallery
infinite={false}
autoplay={true}
autoplaySpeed={1000}
>
<img src="1.jpg" alt="1" />
<img src="2.jpg" alt="2" />
<div className="third">
<img src="3.png" alt="3" />
</div>
<p>1234</p>
</ImageGallery>

- Output: A gallery slider with: 
+ Next, prev arrows
+ Dots navigation
+ Can infinite loop
+ Can autoplay with specific speed (milliseconds)

IMPORTANT NOTE: Don't use any libraries except for React

Firstly: Create Account/login github & share link live code at codesandbox - https://codesandbox.io/