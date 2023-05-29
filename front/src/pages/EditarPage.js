import { useRef } from "react";
import { useParams } from "react-router-dom";
import { editTarefa} from "../Functions/editTarefa";

export default function EditarPage(){
    const titulo = useRef(null);
    const concluido = useRef(null);
    const {id} = useParams();

    return(
        <>
        <h1>Tarefa id:{id}</h1>
        <span>titulo</span>
        <input type='text' ref={titulo} placeholder="Titulo"/>
        <span>concluido</span>
        <input type='text' ref={concluido} placeholder="Concluido"/>
        <button onClick={() => editTarefa(id, titulo.current.value, concluido.current.value)}>Editar</button>
        </>
    );
}
