# movie-match
Movie Match is a web-based application that provides users with movie recommendations based on a movie title they input. Results will display movie info of the movie title that was entered and a list of movie recommendations based on this title. The app includes a section with titles currently trending on the TMDB site. Users are also able to click on any of the recommended or trending titles and get their movie info and further recommendations.

![Screenshot 2023-07-05 at 10 32 24](https://github.com/eva-lng/movie-match/assets/109422347/72d5f61d-3a01-4827-bea0-85328b49dc26)

**Tech used:** HTML, CSS, JavaScript, The Movie Database API

**Link to project:** https://moviematchapp.netlify.app

## Optimizations:
Planned future optimizations could include:
+ Add casting information to the displayed movie info.
+ Currently, the async functions are implemented using promise chaining with the .then() method. An alternative approach would be to refactor the code and utilize the async/await syntax. This change would enhance code readability and maintainability.
+ Improve the layout of the trending and recommendations section. Currently, when the viewport is resized to a smaller width, the movie images wrap onto multiple lines, which can make the app appear cluttered. To enhance the overall layout, it would be beneficial to incorporate a multiple-item carousel in these sections. By implementing a one-line carousel, the movie images can be neatly organized and prevent clutter, resulting in an improved visual presentation.

## Lessons Learned:
The goal of this project was to practice utilising external APIs and async functions and implementing them using DOM manipulation.
