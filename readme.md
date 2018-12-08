# developer-network
This project uses NodeJS, ExpressJS, bcryptJS, jsonwebToken, passportJS, validatorJS, ReactJS, mongoose, MongoDB.
'client' folder contains the react app, and 'server' folder contains the API 

API : 
- [x] Register
- [x] Passport authentication with JWT
- [x] Profile crud
- [x] user crud
- [x] Login
- [x] Post comment by user
- [x] comment on other users comment

React :  
- [x] Landing page
- [x] Register
- [ ] Profile crud
- [ ] user crud
- [ ] Login
- [ ] Post comment by user
- [ ] comment on other users comment


The project does not have a keys.js file in 'server/config' 
create your own database then edit and add the following code to it : 

module.exports = {
  mongoURI: "",
  secretOrKey: 'secret12'
}; 