import fetch from "node-fetch";

exports.handler = function(event, context, callback) {

  const template = /([a-z\d]+)(\/*|)$/.exec(event.path)[0];

  callback(null, {
    statusCode: 301,
    headers: { "Location": `https://templates.gauge.org/${template}.zip` }
  });
};
