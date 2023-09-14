const names = [
  'Aarron',
  'Alex',
  'Steve',
  'Ben',
  'Caroline',
  'dave',
  'Eva',
  'Emmy',
  'Sarah',
  'Sophie',
  'Ze',
  'Zeek',
  'Zen',
];

const possibleThoughts = [
  'How to disagree with someone',
  'iPhone review',
  'how-to video',
  'video essay on the history of video games',
  'How to make money on the App Store',
  'How does one go viral',
  'Movie trailer',
  'Hello world',
  'Another possible solution to the algorithm',
  'Apology video',
  'Submission for startup pitch',
];

const possibleReactions = [
  'I disagree!',
  'I tried your algorithm, here were the results',
  'This was awesome',
  'Thank you for the great content',
  'Please check out my video response',
  'Like and subscribe to my channel please',
  'Reply: The side effects of in app purchases on digital marketplaces',
  'What a joke',
  'This is not what i expected',
  'I appreciate the well thought our and skillfully worded response',
  'You sir are incorrect',
];

//generate reactions
const generateReaction = () => {
  const randomNum = Math.floor(Math.random() * 10) - 1;
  let arrReactions = [];
  for (let i = 0; i < randomNum; i++) {

    const indexReaction = Math.floor(Math.random() * possibleReactions.length);
    const indexUser = Math.floor(Math.random() * names.length)

    arrReactions.push({
      reactionBody: possibleReactions[indexReaction],
      username: names[indexUser]
    })

  }
  return arrReactions;
}





module.exports = { names, possibleThoughts, possibleReactions, generateReaction }