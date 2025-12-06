this repo is about creating user authentication mini project using React js, Node Js, Express Js and mongoDb

authentication means:
when user logs in after getting registered , this code checks if the email and passwords is written correct or not while loggin in.

authorization means:
Role based access granting, the backend checks if user is admin, or consumer or just guest then the interface will be shown as per role

we have used few npm packages for that :
1)jwt : json web token
this package generates unique token (id) for each input value (eg email) and saves in mongodb database when user registers and use this id when user logs in to validate the values

2)parserbody:
it manages http requests conviniently

3)cors:
it connects backend with frontend otherwise backend blocks the url of frontend without it