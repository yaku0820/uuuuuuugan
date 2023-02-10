
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const {getStudents,getStudentId} = require('./data');
const {bcrypt} = require('bcrypt');

passport.use(new LocalStrategy(
 async function(username, password, done) {
  let users = await getStudents()
  let user =users.find((user)=>{
    return (user.username==username && bcrypt.compareSync(password,user.password))
  })
  if (!user) { return done(null, false); }
  return done(null, user);
  }
));


passport.serializeUser(function(user,done){
  return done(null,user.id)
});
passport.deserializeUser(async function(id,done){
  try {
    let user =getStudentId(id);
     return done(null,false)
  } catch (error) {
    console.log(error)
    return done(null,error)
  }
})
console.log("hello")
