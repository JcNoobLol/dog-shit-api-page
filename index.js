let express = require("express");let app = express(); app.listen(3000); console.log('up')
let rss = require("rss-parser");
let superagent = require("superagent");
let prorss = new rss()
let {GoogleGenerativeAI} = require("@google/generative-ai")
app.use(express.json());
let path = require("path")
app.get("/",(req,res) => {
 res.send(`<head>
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>JcBlak</title>
 <link rel="stylesheet" href="https://files.jcmainclr.xyz/scripts/loader.css">
 </head>
 <script src="https://files.jcmainclr.xyz/scripts/loader.js" defer></script>
 <body>
 <br><BR> <br> 
 <section class="card">
   <img src="https://files.jcmainclr.xyz/uploads/main.png" >
   <p>Hello uh this site is just a development or making some test stuff yeah</p>
   <a href="/api">Api</a> 
   <a href='https://github.com/JcNoobLol/dog-shit-api-page/tree/main/wp-content/2024'>File List</a>
 </section>
 </body>
 <style>
 
 body {
 font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
 font-size: 30px;
 background-color: #111;
 color: #333;
 }
 section {
 color: #FFF;
 border: 3px solid #fff;
 padding: 20px;
 text-align: center;
 }
 .hidden{
 opacity: 0;
 transition: all 1s;
 filter: blur(10px);
 transform: translateY(-100%);
 }
 .show{
 opacity: 1;
 filter: blur(0);
 transform: translateY(0);
 }
 a{
 color: #fff;
 cursor: pointer;
 text-decoration: none;
 transition: ease-in 0.3s;
 }
 a:hover{color: cornflowerblue;}
 </style>`)
})
app.get("/api/v1/yt_latestpost",async(req,res) => {
    try{
    let id = req.query.id;
    let data = await prorss.parseURL(`https://www.youtube.com/feeds/videos.xml?channel_id=${id}&gl=RU`).catch(console.error)
      res.json({id: data.items[0].id})
    }catch(e){
        res.status(404).json({msg: 'not found'})
        console.error(e)
   

    }
})
  app.get("/loptop-specs",(req,res) => {

    res.send(`
    <head>
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Loptop specs 💀</title>
       <script src="https://kit.fontawesome.com/1dba893193.js" crossorigin="anonymous"></script>
   </head>
   
   <body>
       <section class="hidden">
          <h1>My Loptop specs:  </h1>
          <h1>Main</h1>
          <img src="https://jc-blakman-rel.oki2.repl.co/wp-content/2023/all_files/IMG20231008093710.jpg" width="400">
          <p> <i class="fa-solid fa-laptop fa-fade"></i>System Model: Aspire A514-53</p>
          <p><i class="fa-solid fa-microchip fa-fade"></i> CPU: Intel(R) Core(Tm) i3-100G1 CPU @ 1.20GHz,1190 Mhz,2Core(s)</p>
           <p><i class="fa-solid fa-memory fa-fade"></i></i> RAM: 4GB (Upgrading 8gb Soon <img src='https://jc-blakman-rel.oki2.repl.co/wp-content/2023/all_files/ok.png' width="20">)</p>
           <p><i class="fa-solid fa-hard-drive"></i> Storage: 1TB HHD  128 SSD</p>
           <p><i class="fa-solid fa-tv fa-flip"></i> Screen: 60HZ</p>
       </section>
       <section class="hidden">
           <h1>real hard drive shot</h1>
           <img src="https://jc-blakman-rel.oki2.repl.co/wp-content/2023/all_files/IMG20231011100628.jpg" width="500">
           </section>
   </body>
   <script>
       let oberv = new IntersectionObserver((entires) => {
           entires.forEach((entry) => {
               if(entry.isIntersecting){
                   entry.target.classList.add('show');
               }else{
                   entry.target.classList.remove('show')
               }
           })
       })
       let hidden = document.querySelectorAll('.hidden')
       hidden.forEach((el) =>  oberv.observe(el))
   </script>
   <style>
   body{
       background-color: #131316;
       color: #fff;
       font-family: 'Roboto',sans-serif;
       padding: 0;
       margin: 0;
   }
   section{
       display: grid;
       place-items: center;
       align-items: center;
       min-height: 100vh;
   }
   .hidden{
       opacity: 0;
      transition: all 5s;
      filter: blur(5px);
      transform:  translateY(-100%)
   }
   .show{
       opacity: 1;
       filter: blur(0);
       transform: translateY(0);
   }
   </style>
   
    `)
   })
app.get('/api',(req,res) => {
    res.json({msg: 'api page has been temporary down '})
})
app.get("/api/v2/gapi",async(req,res) => {
    let MODEL = 'gemini-pro';
let api_key = 'AIzaSyB92vVZnIFe1DHEH0WoBi0vSEpH4b75huY'
let g_ch = '1210584579430158376';
let ai= new GoogleGenerativeAI(api_key);
let model  = ai.getGenerativeModel({model: MODEL});
   let c = req.query.c
  try{
  //the cooking stuff 🔥
   let  respones  =  await model.generateContentStream(c)
 res.json ({res: ((await respones.response).text())})
  }catch(e){
    console.log(e)
  }
})
app.get("*",(req,res) => {
    res.send(`
<head>
<title>404 nut fund 💀</title>
<meta property="og:image" content="https://files.jcmainclr.xyz/uploads/gamers.gif"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://files.jcmainclr.xyz/scripts/loader.css">

</head>
<div class='hiddenv2'>
<h1>404 page not found ${req.url}<br><br></h1>
</div>
<div class="hiddenv2">

<h1>blake-kyle</h1>  <br>
<img src='https://files.jcmainclr.xyz/uploads/wat.PNG' width='400'><br>
<p>redirect on home page in 3 seconds if doent work <a href='/'>home page </a> </p>

<script>
window.setTimeout(function(){


window.location.href = "/";

}, 5000);
</script>
<h1>sorry im listening to <img src='https://spotify-github-profile.vercel.app/api/view.svg?uid=odul82kwgnci0steg1h0nftsz&cover_image=true&theme=novatorem&show_offline=true&background_color=520000&bar_color=53b14f&bar_color_cover=true' width='400'> -dev</h1>
</div>
<style>
body{
background:#111;
color:#FFF;
font-family: 'Roboto',sans-serif;
}
a{
font-size: 20px;
}
p{
font-size: 20px;
}
</style>

<script src="https://files.jcmainclr.xyz/scripts/loader.js"></script>
    `,404)
})
