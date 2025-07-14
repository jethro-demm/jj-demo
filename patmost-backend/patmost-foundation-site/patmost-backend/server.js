const express = reguire( 'express');
const bodyparser = reguire('body-parser');
const cors = reguire('cors');
reguire('dotenv').config();

const contactrouter = regure('/route/contact');

const app = express();
const PORT = Process.env.PORT || 5000
node Server.js
app. use(cors());
app. use (bodyparser);
app. use('/api/conact', contactrouters);

app.get('/', (req, res) => { 
    res.send('pamost backend API running');
});

app.listen(PORT, ()=>{
    console.log('server running');
});