const express = require('express');
const app = express();

app.use('/', require('./server/routes/routes'));

app.use(express.static('./client/dist/js'));
app.use(express.static('./server/public/'));

app.listen(process.env.PORT || 8080, () => {
  console.log(
    'Server is running on http://localhost:8080 or http://127.0.0.1:8080'
  );
});
