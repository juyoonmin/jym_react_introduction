const express = require('express'); // 서버기능구현을 위한 core 모듈
const path = require('path'); // 경로기능제어하기 위한 모듈
const cors = require('cors'); // 다른 서버와 연동하기위한 모듈
const app = express();// 실행코드

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/contact');
const usersRouter_2 = require('./routes/preinterview')

app.use(cors()); // cors 미들웨어를 삽입합니다. 다른 도메인에서 너한테 요청오면 응답해

app.use('/', indexRouter);
//추후 리액트 라우터랑 연동할 주소
//리액트의 연락component의 폼태그의 데이터를 비동기로 POST 전송받아 저장할 라우터
//결과여부를 리액트 정솔할 라우터
app.use('/contact', usersRouter);
app.use('/preinterview', usersRouter_2);
//주소창 localhost:8080/contact


app.listen(8080, ()=>{
  console.log('server is running on 8080')
})