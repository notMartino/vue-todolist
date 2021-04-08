function initVue() {
    new Vue({
        el: '#vue',
        data:{
            todoList: ['Compra il pane', 'Porta fuori la spazzatura', 'Lezioni Boolean', 'Fai workout corpo libero'],
            newTodo: ''
        },
        methods:{
            addNewTodo: function () {
                if(this.newTodo[0] != ' ' && this.newTodo.length > 0){
                    this.todoList.push(this.newTodo);
                    this.newTodo = '';
                }
            },
            removeTodo: function (index) {
                this.todoList.splice(index, 1);
            }
        }
    });
}

function init() {
    initVue();
}

document.addEventListener('DOMContentLoaded', init);