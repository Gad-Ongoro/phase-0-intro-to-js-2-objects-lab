// Write your solution in this file!
let employee = {
    name: "Gad",
    streetAddress : "00100",
} ;

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return ({...employee, [key]: value });
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return (employee);
}

function deleteFromEmployeeByKey(employee, key) {
    let employee_2 = { ...employee};
    delete employee_2[key];
    return (employee_2);
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}