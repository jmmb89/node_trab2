import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tarefa from "../components/Tarefa";
import "../index.css"


export default function IndexPage() {
    const [tarefas, setTarefas] = useState();
    const navigate = useNavigate();

    function getTarefas() {
        fetch('http://127.0.0.1:3001/tarefas',
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((data) => data.json())
            .then((json) => {
                setTarefas(json);
            });
    }
    

    return (
        <>
            <h1>Tarefas</h1>
            <button onClick={() => navigate('/criar')}>Nova Tarefa</button>
            <button onClick={getTarefas}>Listar Tarefas</button>
            <div className="headerList">
            </div>
            {tarefas &&   
            
            tarefas.map((tarefa) => {
                return <Tarefa key={tarefa._id} id={tarefa._id} titulo={tarefa.titulo} concluido={tarefa.concluido}/>
           
            })
            }
        </>
    );
}
