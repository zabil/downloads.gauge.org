exports.handler = function(event, context, callback) {

  exp = new RegExp(/([a-z\d]+)(\/*|)$/, "i");
  template = exp.exec(event.path)[0];
  // path = /([a-z\d]+)(\/*|)$/.exec(event.path)

  callback(null, {
    statusCode: 200,
    body: template
  });
};
