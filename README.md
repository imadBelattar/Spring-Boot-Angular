# Spring Boot - Angular Project 

This project is a Spring Boot backend combined with an Angular frontend for managing interventions, assignments, and other operations related to academic scheduling.

## Overview

The project aims to provide a comprehensive system for managing various tasks related to academic scheduling, including:

- Managing interventions between Enseignants and Modules
- Creating and adding Filieres and Modules
- Updating information related to volume horaire of Modules
- User authentication and authorization with login functionality for Administrateurs and Enseignants
- Role-based access control (Admin has full access, Enseignant has limited access)

## Features

- **Administrator Dashboard**: Administrateurs have access to a dashboard where they can perform all management operations, including creating, updating, and deleting entities.
- **Enseignant Dashboard**: Enseignants have limited access and can view list of their own interventions at modules.
- **User Authentication**: Login functionality with authentication and authorization to ensure secure access to the system (using Keycloak).
- **CRUD Operations**: Support for creating, reading, updating, and deleting interventions, modules.

## Administrator Dashboard

When an administrator logs into the application, they are greeted with a comprehensive dashboard that allows them to manage all aspects of the system. Below is an example of the administrator dashboard:

![Administrator Dashboard](images/admin-dashboard.jpg)


## Class Diagram

The class diagram illustrates the structure of the entities involved in the project, including Enseignant, Module, Filiere, Administrator and Intervention.

![Class Diagram](images/Class%20diagram.png)

## Backend Setup

1. Navigate to the `Spring-Boot` folder.
2. Open the project in your preferred IDE (e.g., IntelliJ IDEA, Eclipse).
3. Run the `Application` class located at `com.masterISI` package, in order to start the Spring Boot backend.


> **Note:** If you would like to run the app without using an editor, ensure that Maven is set up on your system. You can run the backend using the command:
> 
> ```sh
> mvn spring-boot:run
> ```
> 
> from the directory where the `pom.xml` file is located.

## Database Configuration

The project comes pre-configured with database settings. Follow these steps to create the database:

1. Make sure you have MySQL installed on your system.
2. Connect to your MySQL server using your preferred MySQL client (e.g., MySQL Workbench, XAMPP).
3. Execute the following SQL script to create the database:

```sql
CREATE DATABASE gestionchargehoraire;
```


## Frontend Setup

The Angular frontend for this project is ready for setup. Follow these steps to set up and run the frontend:

1. Navigate to the `gestionHoraire-Angular` folder.
2. Open a terminal or command prompt in this directory.
3. Run `npm install` to install all required dependencies.
4. Once installation is complete, run `ng serve --open` to start the Angular server and automatically open the application in your default web browser.

//you can fit the example of the admin dashboard (the image is at images/adminDashboard.jpg) when logged in as administartor

## Contributors

- Imad BELATTAR
- Haitam CHEFIRA

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


