const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/todos', { useNewUrlParser: true, useUnifiedTopology: true  });

const todosSchema = new mongoose.Schema ({
    name: {
        id: Number,
        name: String   
    },
});

const Todo = mongoose.model('Todo', todosSchema);

const todo = new Todo({
    id: 6,
    name:'To sleep',
});

todo.save().then(console.log("todo saved"));




