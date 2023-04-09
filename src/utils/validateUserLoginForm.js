export const validateUserLoginForm  = (values) => {
    const errors = {};

    if(!values.username){
        errors.username = 'required';
    }
    if(!values.password){
        errors.password = 'required';
    }
    if(values.username.length < 6) {
        errors.username = 'Must be at least 6 charachters long';
    }
    if(values.username.length > 15) {
        errors.username = 'Must be at most 15 characters';
    }
    if(values.password.length < 8){
        errors.password = 'password must be at least 8 characters long';
    }

    return errors;
}