## Developed By

Name: Md. Zahidul Islam.
Email: engg.zahidulislam@gmail.com
Mobile: +880167063300
LinkedIn: https://www.linkedin.com/in/engg-zahidul-islam

# HackerNews

This project is Hacker News website clone.

## Project Structure

    App
    |---- @core (Module)
    |        |--- http (HTTP Interceptors)
    |        |--- services (Core services)
    |
    |---- @shared (Module)
    |        |--- components (Shared Components)
    |        |--- interfaces (Shared Interfaces)
    |
    |---- shell (Project UI Layout Module)
    |        |--- components (Layout components)
    |        |--- services (Shell Layout Route Service)
    |
    |---- modules (Feature Modules)
    |        |--- Auth (Auth Module for Login & SignUp)
    |        |       |--- components
    |        |       |--- services
    |        |--- Home (Home Module for Home Page)
    |        |       |--- components
    |        |       |--- services
    |        |--- Ask (Ask Module for Ask Page)
    |        |       |--- components
    |        |       |--- services
    |        |--- Job (Job Module for Job Page)
    |        |       |--- components
    |        |       |--- services
    |        |--- Show (Show Module for Show Page)
    |        |       |--- components
    |        |       |--- services
    |        |--- Submit (Submit Module for Create new Story or Ask)
    |        |       |--- components
    |        |       |--- services

## Running Project

Step 1: Go to the project directory and run `npm install`
Step 2: To run to the project on you local machine run `ng serve -o` after running this command, project will build
and automatically default browser will navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
