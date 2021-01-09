Vue.component('todo', {
    props: {
        // value est le props qui va recevoir la liste de tâche 
        value: {
            type: Array, // type attendu
            default(){
                return []; // par défaut value est initialisée par un tableau vide
            }
        }
    },
    data(){
        return {
            todos: this.value,
            newTask: ""
        }
    },
    methods: {
        addTodo(){
            this.todos.push({task: this.newTask, done: false});
            this.newTask = "";
        },
        deleteTodo(todo){
            this.todos = this.todos.filter((i) => i !== todo);
        }
    },
    template: '#todo'
});

// Instance de vue
var app = new Vue({
    el: '#app',
    data: {
        newTask: "",
        todos: [{
            id: 1,
            task: 'Apprendre JS',
            done: false
        }]
    },
});