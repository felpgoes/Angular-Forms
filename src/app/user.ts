export class User {
    constructor(
       public username: string,
       public email: string,
       public phone: number,
       public role: string,
       public team: string,
       public subscribe: boolean 
    ) {}
}
