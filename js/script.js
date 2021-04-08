function initVue() {
    new Vue({
        el: '#vue',
        data:{
            todoList: ['Compra il pane', 'Porta fuori la spazzatura', 'Lezioni Boolean', 'Fai workout corpo libero']
        },
        methods:{
            prova: function () {
                console.log('OOOOOOO');
            }
        }
    });
}

function init() {
    initVue();
}

document.addEventListener('DOMContentLoaded', init);