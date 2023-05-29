import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteTarefa} from '../Functions/deleteTarefa'

function Tarefa({ id, titulo, concluido }) {
    const navigate = useNavigate();
    return (
        <div className="headerList">
        <div className="tarefa">
            {'Tarefa: '}<span>{titulo}</span>{'  concluido: '}
            <span>{concluido}</span>
            
        </div>
        <button onClick={() => navigate('/editar/'+id)}>Editar</button>
        <button onClick={() => deleteTarefa(titulo)}>Remover</button>
        </div>
    );
}

export default Tarefa;
