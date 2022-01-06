const response = (req, res, code, status, message, data = {}) => {
    // create response
    let response = {
      status: status,
      message: message,
      data: data
    };
    // return response
    res.status(code).json(
      response
    );
  }
  
  module.exports = response;