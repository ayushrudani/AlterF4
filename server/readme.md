
#  APIs

### MongoURL 
```
mongodb+srv://pareshchaudhary330:P%40resh%232005ClusterParesh@paresh.5cm8a.mongodb.net/Former_Assistance_DB
```

### Run backend
``` 
npm start
```

### GIMINI API
``` 
POST  https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDuq-ZCT9oPgUwMSBqYDfp8JBqeTQPExv4
```
```
Body = {"contents":[{"parts":[{"text":"hamster kombat mining"}]}]}
```

#### Register user
``` 
 POST   http://localhost:5447/api/user/register
```
```json
{
   "name" : "abc",
   "email" : "abc@gmail.com",
   "phone" : "1234577",
   "password" : "123",
   "state" : "Gujarat",
   "city" : "Dhanera",
   "acre" : 12,
   "water_level" : "Low"
}
``` 

#### Log in user
``` 
 POST  http://localhost:5447/api/user/login
 ```
```json
{
  "phone" : "1234577",
   "password" : "123"
}
``` 

#### Forget passoword
``` 
 POST http://localhost:5447/api/user/forgetPassword
 ```
```json
{
  "email" : "text@gmail.com",
}
``` 

#### Send OTP
```
POST http://localhost:5447/api/user/sendOTP
```
```json
{
     "phone" : "123456789"
  }
```