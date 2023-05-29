export function editTarefa(id, titulo, concluido){
    fetch('http://127.0.0.1:3001/tarefas',
    {
        method: "PUT",
        body: JSON.stringify({ "_id": id, "titulo": titulo, "concluido": concluido}),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((data) => data.json())
    .then((json) => {
        alert(json);
    });
}
