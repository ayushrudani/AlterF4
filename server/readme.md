
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
   "water_level" : "Low",
   
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

#### getUserByToken
```
POST http://localhost:5447/api/user/getUserByToken
```
```json
{
  "token" : "zYiiNJ1uRfdb"
}
```

#### cerate POST
```
POST http://localhost:5447/api/post/createPost
```
```json
{
      "problem" : "dewewxwefuiwxfuif",
      "userId" : "QbV40v57D4Ky" ,
      "imageURL" : "abc.png"
  }
```

#### addComment in  POST
```
POST http://localhost:5447/api/post/addComment
```
```json
{
      "userId"  : "QbV40v57D4Ky",
      "postId" : "66b704c63589f10c8cbc2c97" ,
      "commentMsg" : " very good"
  }
```

#### addCommentByLike in  POST
```
POST http://localhost:5447/api/post/addLikeInComment
```
```json
{
      "userId"  : "QbV40v57D4Ky",
      "commentId" : "66b705c37c6dbfb0895ebba7" 
      }
```

#### getAllCrops 
```
GET http://localhost:5447/api/crop/getAllCorp/2

2 is page number
```

#### getCropsById 
```
GET http://localhost:5447/api/crop/getCropById/:cropId
```


