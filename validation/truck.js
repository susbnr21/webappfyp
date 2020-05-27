const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateInfoInput(data){
    let errors = {};
// Convert empty fields to an empty string so we can use validator functions
    data.contact = !isEmpty(data.contact) ? data.contact : "";
    data.address_from = !isEmpty(data.address_from) ? data.address_from : "";
    data.address_to = !isEmpty(data.address_to) ? data.address_to : "";
// Contact checks
    if (Validator.isEmpty(data.contact)) {
        errors.contact = "Contact field is required";
    }
// Address checks
    if (Validator.isEmpty(data.address_from)) {
        errors.address_from = "Current address is required";
    }
    else if (Validator.isEmpty(data.address_to)) {
        errors.address_to = "Address your are shifting to is required";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };

};