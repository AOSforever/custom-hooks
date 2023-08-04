import { useEffect, useState } from "react"

export const useFetch = ( url ) => {
    
    const [state, setState] = useState({
        data: null,
        loading: true,
        hasError: null
    });
    
    const getFetch = async () => {
        try {            
            const res = await fetch(url);
            const data = await res.json();
            
            setState({
                data,
                loading: false,
                hasError: null
            })
        } catch (error) {
            setState({
                ...state,
                hasError: error,
            })
        }
    }
    
    useEffect(()=>{
        getFetch();
    },[url])

    return {
        data     : state.data,
        loading  : state.loading,
        hasError : state.hasError,
    }
}