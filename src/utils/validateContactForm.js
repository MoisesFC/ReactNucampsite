export const validateContactForm = (values) => {
    const errors = {};

    if(!values.firstName){
        errors.firstName = 'required';
    } else if(values.firstName.length < 2) {
        errors.firstName = 'Must be at least 2 characters';
    } else if(values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if(!values.lastName){
        errors.lastName = 'required';
    } else if(values.lastName.length < 2) {
        errors.lastName = 'Must be at least 2 characters';
    } else if(values.lastName.length > 15) {
        errors.lastName = 'Must be 15 characters or less';
    }

    const reg = /^\d+$/;
    if(!reg.test(values.phoneNum) || !reg.test(values.phoneNum.length<10)) {
        errors.phoneNum = 'The phone number should contain only numbers and be at least 10 digits';
    }

    if(!values.email.includes('@')) {
        errors.email = 'Email should contain an @';
    }

    return errors;
}