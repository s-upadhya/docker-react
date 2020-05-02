const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.send('hi sup, how are you?')
});
app.listen(8080, () => {
console.log('listening on 8080');
});