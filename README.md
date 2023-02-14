# React Voting App

A real-time voting app built with React, Jenkins, and Docker that allows users to cast votes for different options. Deployable as a containerized application.

## Why Jenkins

Jenkins is used in this project to automate the build, test, and deployment processes. This helps to ensure that the application is always up-to-date and free from bugs, improving the user experience.

## Prerequisites

RNode.js and npm installed on your system
Visual Studio Code
Docker

## How to run

Clone the repository to your local machine
Navigate to the project directory in the terminal
Run npm install to install the required packages
Run npm start to start the development server
Open http://localhost:3000 in your browser to view the app

## Deployment with Docker

Build a Docker image using the following command: docker build -t <image-name> .
Run a Docker container using the following command: docker run -p 3000:3000 <image-name>
Open http://localhost:3000 in your browser to view the app.