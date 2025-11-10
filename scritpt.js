function append(){
    
    const newTask = document.createElement("div");
    newTask.id = "newTasks";
    newTask.className = "newTasks"

    const done = document.createElement("button");
    done.id = "done";
    done.className = "done"
    done.textContent = "✔️"

    let value = document.getElementById("val").value;
    newTask.textContent = value;

    const task = document.getElementById("task");
    task.appendChild(newTask);

    newTask.appendChild(done)

    done.onclick = () => newTask.remove();

    document.getElementById("val").value = "";

}

function Priority(){
   
    const impTask = document.createElement("div");
    impTask.id = "impTask";
    impTask.className = "impTask"

    const impDone = document.createElement("button");
    impDone.id = "impDone";
    impDone.className = "impDone"
    impDone.textContent = "✔️"

    let value = document.getElementById("val").value;
    impTask.textContent = value;

    const task = document.getElementById("task");
    task.prepend(impTask);

    impTask.appendChild(impDone)

    impDone.onclick = () => impTask.remove();

    document.getElementById("val").value = "";
    
}