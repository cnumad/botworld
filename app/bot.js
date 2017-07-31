var builder = require('botbuilder');

module.exports = function(app) {

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

// Listen for messages from users 
app.post('/api/messages', connector.listen());

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
var bot = new builder.UniversalBot(connector, function (session) {
	var text = session.message.text.toLowerCase();
	var response = "";
	if(text == 'hello') {
		response = "Hello";
	}else if(text == 'hi') {
		response = "Hi";
	} else if(text == 'how are you?' || text == 'how are you') {
		response = "I am good, How are you?";
	} else if(text == 'good' || text == 'i am good') {
		response = "Great!, hope you are enjoying your day.";
	} else if(text == 'yeah' || text == 'ok') {
		response = "ok";
	} else {
		response = "I am still learning, i will get back to you soon with answer:-)";
	}
	
    session.send(response);
});
	
};