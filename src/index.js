const express = require('express');

const main = async () => {
  const app = express();
  const port = 8000;
  app.get('/', (req, res) => res.json({ home: true }));
  app.get('/health', (req, res) => res.json({ ok: true }));

  app.listen(port, () => {
    console.log(`> App listening on port: ${port}`);
  });
};

if (process.env.NODE_ENV !== 'test') {
  main();
}
