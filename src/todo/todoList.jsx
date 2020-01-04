import React from 'react'
import IconButton from '../template/iconButton'

export default props =>{

    const renderRows =()=>{
        const list = props.list || []
        return list.map(todo => (
        <tr key={todo._id} /* chave utilizada é a mesma do mongo */>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon ='check' hide={todo.done}
                     onClick={()=> props.handleMarkAsDone(todo) /*botão para marcar o que foi feito*/}></ IconButton>

                     <IconButton style='warning' icon='undo' hide={!todo.done}
                     onClick={()=> props.handleMarkAsPending(todo) /*botão para marcar o que vou fazer*/}></IconButton>

                    <IconButton style = 'danger' icon='trash-o' hide={!todo.done}
                     onClick={() =>props.handleRemove(todo)}></IconButton>
                </td>
                
            </tr>
        ))
    }

    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
                <tbody>
                {renderRows()}
                </tbody>
        </table>
    )
}