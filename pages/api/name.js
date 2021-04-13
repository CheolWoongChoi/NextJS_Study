import fs from 'fs';

export default (req, res) => {
  // const name = fs.readFileSync('./pages/api/name', 'utf-8');

  const name = [
    { id: 1, text: 'hi1' },
    { id: 2, text: 'hello1' },
		{ id: 3, text: 'hi everyone2' }
  ];

  setTimeout(() => {
    res.statusCode = 200;
    res.json({ name: name });
  }, 500);
};
