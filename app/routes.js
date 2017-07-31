
module.exports = function(app) {


	app.get('/api/test', function(req, res) {
		console.log('Test successful');
		res.send('Test successful');
	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};