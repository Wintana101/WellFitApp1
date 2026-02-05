**System Overview**



Well-Fit App 1 is a cross-platform fitness tracking application designed using React Native and Firebase. The app follows the Model–View–Controller (MVC) architectural pattern to ensure separation of concerns and maintainability.



**Architecture**



View Layer: UI screens (Home, Workout, Progress, Profile, Login, Signup)



Controller Layer: Authentication logic and app business logic



Data Layer: Firebase Authentication and Firestore



**Authentication**



Firebase Authentication is used to securely manage user login and registration. Passwords are encrypted and transmitted securely via HTTPS.



**Data Handling**



User profile information is stored in Firebase Authentication



Steps, water intake, and workouts are handled locally for MVP scope



Workout recommendations are dynamically generated per user per day



**Security**



Secure authentication via Firebase



HTTPS enforced



No sensitive data stored locally



 

