module.exports = function(app) {

	app.get('*', function(req, res) {
        res.render('pages/index');
    });


	app.post('/submit-contact', function(req, res) {

		var api_key = 'key-bd7963f2a340f72282fc9af017742949';
		var domain = 'npcs.co.uk';
		var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

		var data = {
		  from: ''+req.body.name+' <'+req.body.email+'>',
		  to: 'enquiries@npcs.co.uk',
		  subject: 'Contact Form Submission',
		  text: 'Phone: '+req.body.phone+', Message: '+req.body.msg+''
		};

		mailgun.messages().send(data, function (error, body) {
			console.log(body);
		  if(body.id) {
			  res.json({
	              success: true
	          })
		  } else {
			  res.json({
	              success: false
	          })
		  }
	  });

    });

}; // End Routes
