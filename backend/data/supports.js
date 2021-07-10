const supports = [
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    ticket_no: '12323',
    problem_description : 'Hello this is a problem',
    status: 'Open', 
    priority: 'Medium',
    category: 'Web Development',
    created_by: 'Support Team'
  },
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    ticket_no: '12324',
    problem_description : 'Hello this is a problem 2',
    status: 'Open', 
    priority: 'High',
    category: 'SEO',
    created_by: 'Support Team'
  }

]

export default supports