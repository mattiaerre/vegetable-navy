const express = require('express');

const app = express();
app.use(express.static('build'));

const port = 3000;
app.listen(port, () => {
  console.log(`go to: http://0.0.0.0:${port}`); // eslint-disable-line no-console
});
