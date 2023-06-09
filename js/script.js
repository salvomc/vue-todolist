const { createApp } = Vue;

createApp({
        data(){
            return{
                    title:'Vue ToDoList',
                    newTask: '',
                    tasks:
                    [
                        {
                            text: 'Lavare la macchina',
                            done: false,
                        },
                        {
                            text: 'Fare \'esercizio Boolean',
                            done: true,
                        },
                        {
                            text: 'Preparare il borsone per calcetto',
                            done: true,
                        },
                        {
                            text: 'Cucinare la cena',
                            done: false,
                        },
                    ]
                  }
              },

    methods:{
        
        changeTask(index)
        {
            this.tasks[index].done = !this.tasks[index].done;
        },
        
        deleteTask(index)
        {
            this.tasks.splice(index,1);
        },
        
        addTask()
        {
            let obj = 
            {
                text: this.newTask,
                done: false
            }
            this.tasks.push(obj);
            this.newTask = '';
        }

    },

}).mount('#app')