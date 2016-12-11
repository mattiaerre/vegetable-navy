const express = require('express');

const app = express();
app.use(express.static('build'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`navigate to: http://127.0.0.1:${port}`); // eslint-disable-line no-console
});
