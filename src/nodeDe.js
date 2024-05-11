
// // node环境
// const neatCsv = require('neat-csv');

const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());
console.log("程序执行完毕");

const fs = require('fs')
const dirs = fs.readdirSync('src')
let json = []


app.use(express.json())
  
// 接口3--post-json格式
app.get('/api/getCsvList', (request, response) => {
  console.log('请求返回', request.body)
  dirs.filter(dir => /\.csv$/.test(dir)).forEach(dir => {
    const file = fs.readFileSync(`src/mobile.csv`)
      const getGBK = new TextDecoder('gbk').decode(file).split('\n')
      // 获取表头, 用于组装数据
      const headList = getGBK[0].split(',')
    console.log(headList)
    const headLen = headList.length
    const gbkLen = getGBK.length
    // 遍历文件, 注意是从 i = 1 开始, 因为不需要表头
    for (let i = 1; i < gbkLen; i++) {
        const gbkItem = getGBK[i]
        const childList = gbkItem.split(',')
        if (childList.length === 1) break // 说明该数据是空数据格式
        const obj = {}
        // 遍历表头数组
        for (let j = 0; j < headLen; j++) {
          const headItem = headList[j]
          obj[headItem] = childList[j]
        }
        json.push(obj)
      }
      // 得到不需要文件后缀的名称
    //   const getFile = fileName.split('.')[0]
    console.log(json)
    json.length = 100
    response.send({"data":json})
      // 写入文件数据
    //   fs.writeFileSync(`./src/mobile.json`, JSON.stringify(json))
    })
    
})
app.post('/api/getSelectCsv',(request,response) => {
  const query = request.body.config;
  console.log(query,json,'queyr')

  const results = json.filter(t => {
    for (let key in t) {
      if(t[key].toString().indexOf(query.toString())!=-1){
        return true
      }
    }
    
  }
  );
  console.log(results,'result')
  response.send({"data":results})
  // response.json(results.map(key => ({ key, value: data[key] })));
})
//设置跨域访问
app.all("*",function(req,res,next){
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin","*");
  //允许的header类型
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == 'options')
      res.send(200);  //让options尝试请求快速结束
  else
      next();
})


app.listen(3019,()=>{
    
   
    
})