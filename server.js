const express = require('express'); // 서버기능구현을 위한 core 모듈
const path = require('path'); // 경로기능제어하기 위한 모듈
const cors = require('cors'); // 다른 서버와 연동하기위한 모듈
const app = express();// 실행코드



app.use(cors()); // cors 미들웨어를 삽입합니다. 다른 도메인에서 너한테 요청오면 응답해

app.post('/', (req,res) => { // 요청패스에 대한 콜백함수를 넣어줍니다. get, post, use(스스로 만들때)
  res.send({message:'hello'});
});

app.listen(8080, ()=>{
  console.log('server is running on 8080')
})