export function createTarefa(titulo, concluido){
    fetch('http://127.0.0.1:3001/tarefas',
    {
        method: "POST",
        body: JSON.stringify({ "titulo": titulo, "concluido": concluido }),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((data) => data.json())
    .then((json) => {
        alert(json);
    });
}
