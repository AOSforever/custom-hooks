import { useState } from "react";
import PropTypes from 'prop-types';

export const useForm = ( initialForm = {} ) => {
    const [user, setUser] = useState( initialForm );

    const onInputchange = ({ target }) => {
        const { name , value } = target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const onResetForm = () => setUser( initialForm );
    
  return {
    ...user,
    user,
    onInputchange,
    onResetForm
  }
}

useForm.propTypes = {
    initialForm: PropTypes.object.isRequired,
}