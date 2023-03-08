# **Simple Voting App**

A simple voting app built using React, Jenkins, and Docker that allows users to cast their votes for different options and display the results in real-time.

<!-- **Why Jenkins**

Jenkins is used in this project to automate the build, test, and deployment processes. This helps to ensure that the application is always up-to-date and free from bugs, improving the user experience. -->

**Prerequisites**

- [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed on your system
<!-- - [Visual Studio Code](https://code.visualstudio.com/) -->
- [Docker](https://www.docker.com/)

**How to Run**

1. Clone the repository to your local machine using the command: git clone https://github.com/\<repo-name\>.git
2. Navigate to the project directory in the terminal
3. Run npm install to install the required packages
4. Run npm start to start the development server
5. Open http://localhost:3000 in your browser to view the app

**Deployment with Docker**

1. Build a Docker image using the following command: docker build -t \<image-name\> .
2. Run a Docker container using the following command: docker run -p 3000:3000 \<image-name\>
3. Open http://localhost:3000 in your browser to view the app.