/**
 * . visit: console.firebase.google.com
 * 2. Create project (skip google analytics)
 * 3. Register app (create config)
 * 4. install firebase: npm install firebase
 * 5. add config file to your project
 * 6. DANGER: Do not publish or make firebase config to public by pushing those to github;
 * 7. Go to Docs > Build > Authentication > Web > Get Started
 * 8. export app from the firebase.config.js file: export default app
 * 9. Login.jsx: import getAuth from firebase/auth
 * 10. create const auth = getAuth (app)
 * 11. Import googleAuthProvider and create a new provider
 * 12. Use signInWithPopUp and pass auth and provider
 * 13. activate sign-in method (google, facebook, github, etc)
 * 14. [vite]: change 127.0.0.1 to localhost
 * 
 * ---------------
 * MORE AUTH PROVIDER
 * ---------------
 * 
 * 1. Active the  auth provider (create app, provide redirect url, client id, clint secret)
 * */ 