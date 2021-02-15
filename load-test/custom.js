const faker = require('faker');

module.exports.getChatData = (userContext, events, done) => {
  userContext.vars.name = faker.name.findName();
  userContext.vars.greeting = `Hello! I'm from ${faker.address.city()} and my id is ${faker.random.number()}`;
  userContext.vars.goodbye = `Goodbye, I will be back on ${faker.date.weekday()}`;
  done();
};
