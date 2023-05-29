import { useRef } from "react";
import { createTarefa} from '../Functions/createTarefa';

export default function CriarPage(){
    const titulo = useRef(null);
    const concluido = useRef(null);

    return(
        <>
        <h1>TAREFA</h1>
        <span>titulo</span>
        <input type='text' ref={titulo} placeholder="titulo"/>
        <span>concluido</span>
        <input type='text' ref={concluido} placeholder="concluido"/>
        <button onClick={() => createTarefa(titulo.current.value, concluido.current.value)}>Criar</button>
        </>
    );
}
