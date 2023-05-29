export function deleteTarefa(titulo){
    fetch('http://127.0.0.1:3001/tarefas',
        {
            method: "DELETE",
            body: JSON.stringify({ "titulo": titulo}),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((data) => data.json())
        .then((json) => {
            alert(json);
        });
}
