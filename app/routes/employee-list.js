import Route from '@ember/routing/route';

export default class EmployeeListRoute extends Route {
    /*async model(){
        return {
            employeeImageSrc: "/images/1.jpg",
            employeeImageLable: "Employee 1 image",
            name: "Employee 1",
            department: "IT",
            email: "emp1@company.com.au"
        };
    }*/

    async model(){
        let response = await fetch('/api/employees.json');
        let parsed = await response.json();
        return parsed.data;
    }
}
