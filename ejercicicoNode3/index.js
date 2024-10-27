import chalk from "chalk";

console.log(chalk.blue('hola mundo ') + chalk.red('Como estan') );

const tareas = [
    { title: 'Tarea 1', completed: true },
    { title: 'Tarea 2', completed: false},
    { title: 'Tarea 3', completed: true},
    { title: 'Tarea 4', completed: false}
];

tareas.forEach((tarea, indice ) =>{

    if(tarea.completed == true){
        console.log(chalk.green(tarea.title, tarea.completed));
    }

    if(tarea.completed == false){
        console.log(chalk.red(tarea.title, tarea.completed));
    }
});

