export default class UserModel{
    constructor(id,name,email,password)
    {
        this.id=id;
        this.name=name;
        this.email=email;
        this.password=password;
    }

    static add(name,email,password){
        const newUsers=new UserModel(
            users.length+1,
            name,
            email,
            password
        );
        users.push(newUsers);
    }
    static isValid(email,password){
        const result=users.find((u)=>u.email==email && u.password==password);
        return result;
    }
}
var users=[];