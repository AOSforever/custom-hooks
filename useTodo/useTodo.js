import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initializer = () => {
    return JSON.parse( localStorage.getItem('Todo')) || []; 
}

export const useTodo = () => {
    const [state, dispatch] = useReducer( todoReducer , [], initializer );

    useEffect(() => {
      localStorage.setItem('Todo',JSON.stringify( state ))
    }, [state]);

    const handleNewTODO = ( todo ) => {
        const action = {
            type: '[TODO] add todo',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTODO = ( id ) => {
        dispatch({
            type: '[TODO] remove todo',
            payload: id
        })
    }

    const handleToggleTODO = ( id ) => {
        dispatch({
            type: '[TODO] toggle todo',
            payload: id
        })
    }

    return {
        state,
        handleNewTODO,
        handleDeleteTODO,
        handleToggleTODO,
        pendingTodosCount: state.filter( obj => !obj.done ).length,
        todosCount: state.length
    }
}