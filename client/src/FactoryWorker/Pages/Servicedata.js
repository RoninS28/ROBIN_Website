const KEYS ={
    employees:'employees',
    employeeId:'employeeId'
}

export const getDepartmentCollection = ()=>([
    { id: '1', title: 'Completed' },
    { id: '2', title: 'Not completed' },
   
])

export function insertEmployee(data) {
    let employees=getAllEmployees();
    data['id'] = generateEmployeeId()
    employees.push(data)
    localStorage.setItem(KEYS.employees,JSON.stringify(employees))
}

export function updateEmployee(data) {
    let employees = getAllEmployees();
    let recordIndex = employees.findIndex(x => x.id == data.id);
    employees[recordIndex] = { ...data }
    localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function generateEmployeeId() {
    if (localStorage.getItem(KEYS.employeeId) == null)
        localStorage.setItem(KEYS.employeeId, '0')
    var id = parseInt(localStorage.getItem(KEYS.employeeId))
    localStorage.setItem(KEYS.employeeId, (++id).toString())
    return id;
}

export function getAllEmployees() {
    if (localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
        let employees = JSON.parse(localStorage.getItem(KEYS.employees));    
       
        //map departmentID to department title
        let Completions = getDepartmentCollection();
        return employees.map(x => ({
            ...x,
            statusId: Completions[x.status - 1].title
        }))
    
}