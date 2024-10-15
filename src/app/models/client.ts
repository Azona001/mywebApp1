export class Client {
    id: number;
    clientName: string;
    company: string;
    email: string;
    contactNumber: number;

    constructor(id: number, clientName: string, company: string, email: string, contactNumber: number){
        this.id= id;
        this.clientName = clientName;
        this.company = company;
        this.email = email;
        this.contactNumber = contactNumber;
        
    }
}
