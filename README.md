# To use this app

Clone this repo and checkout to master branch and run npm install to install dependencies.
### `npm install`
Run nodemon to start the back-end server.
### `nodemon`

Open [http://localhost:5000](http://localhost:5000) and if you get `Cannot GET /`, back-end is running now.

If database is down, call 0431781694 and I will restart the database. Also feel free to call me if you want to discuss anything about this app.

You can use username: `GLaDOS`, password: `GLaDOS` to login.

Other test subjects: 

username: `tester`, password: `testUser1`

username: `tester2`, password: `testUser2`

username: `tester3`, password: `testUser3`


## Things to imporve
Due to time limit, I can only implement the basic functionalities. However, I can improve it much better if more time allowed.
1. Hash the password and when login, store the window seesion token so no need to login again when page refreshes.
2. Seperate the style into css file and change UI.
3. Add more features such as registering new users, editing questions etc. These should be easy based on current project structure.
4. Add unit tests.
