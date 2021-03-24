export default (req, res) => {
  res.status(200);
	res.json({ id: req.query.id });
}
