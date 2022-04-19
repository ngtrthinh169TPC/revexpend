<!-- @format -->

# revexpend

React Native learning

This is the final project of CS50M-2020 course.

This is a simple revenue - expenditure managing tool. REALLY SIMPLE.

# CS50M-2020

As the final project and as the requirements of the project, this mini project has:

- used Redux.
- one network call (simple "fake" authentication one).
- 1 tab navigators.
- 3 stack navigators (inside the tabs).
- larger in scope than the Todo app.

- small side task: I made my own interfaces, as the teacher asked.

# Structure

- First tab is the authentication - network call thing. It implements a page that shows token, and a login page. Only thing it can do is log in as username="username" and password="password" using the simple api made by Teacher Jordan Hayashi.

- Third tab and fourth tab are revenues and expenditures. It implements much like Todo app, but improve and change a little bit to suit the needs. It supports a modal to add new revenues and new expenditures.

- Second tab is just a screen to show your "balance" by taking your total revenue minus your total expenditure. It's there to make use of redux.

- Almost every data of this app is stored in redux-persist.
