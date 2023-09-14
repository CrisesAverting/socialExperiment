const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { names, possibleReactions, possibleThoughts, generateReaction } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  let users = names.map(name => ({ username: name, email: `${name.toLowerCase()}@gmail.com`, thoughts: [] }));
  await User.collection.insertMany(users);
  users = await User.find({});
  for (let i = 0; i < possibleThoughts.length; i++) {
    const index = Math.floor(Math.random() * users.length);
    const randomUser = users[index];
    const thought = new Thought({
      thoughtText: possibleThoughts[i],
      username: randomUser.username,
      userId: randomUser._id,
      reactions: generateReaction()
    });
    await thought.save();
    randomUser.thoughts.push(thought._id);
    await randomUser.save();
  }
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
