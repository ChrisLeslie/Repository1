const customers = require('../data/customers.json');

module.exports = async function (context, req) {
    context.res = {
        headers: {
          'Content-Type': 'application/json'    
        },
        body: customers
    };
}
