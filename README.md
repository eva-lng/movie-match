# movie-match
Movie Match is a web-based application that provides users with movie recommendations based on a movie title they input. Results will display movie info of the movie title that was entered and a list of movie recommendations based on this title. The app includes a section with titles currently trending the TMDB site. Users are also able to click on any of the recommended or trending titles and get their movie info and further recommendations.

**Tech used:** HTML, CSS, JavaScript,  The Movie Database API

**Link to project:**

## Optimizations:
planned future optimizations include:
+ Add casting information to the displayed movie info.
+ Currently, the async functions are implemented using promise chaining with the .then() method. However, an alternative approach is to refactor the code and utilize the async/await syntax. This change would enhance code readability and maintainability.
+ Improve the layout of the trending and recommendations section. Currently, when the viewport is resized to a smaller width, the movie images wrap onto multiple lines, which can make the app appear cluttered. To enhance the overall layout, it would be beneficial to incorporate a multiple-item carousel in these sections. By implementing a one-line carousel, the movie images can be neatly organized and prevent clutter, resulting in an improved visual presentation.

## Lessons Learned:
The goal of this project was to practice utilising external APIs and async functions and how to implement them using DOM manipulation
