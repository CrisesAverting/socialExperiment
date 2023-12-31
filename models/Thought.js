const mongoose = require('mongoose');
const Reaction = require('./Reaction')

const thoughtSchema = new mongoose.Schema({

  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280
  },
  username: {
    type: String,
    required: true,

  },
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User"
  },
  reactions: [Reaction],
  createdAt: {
    type: Date,
    default: () => Date.now(),
    get: (createdAt) => {
      return `${createdAt.toDateString()} at ${createdAt.toLocaleTimeString()}`
    }
  },
},
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length
})

const Thought = mongoose.model('Thought', thoughtSchema)

module.exports = Thought;