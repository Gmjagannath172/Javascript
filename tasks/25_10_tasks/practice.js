class parent{
    name= "Jagan";
    city= "Tirupati";
    AllDetails(){
        console.log(this.name);
        console.log(this.city);
    }
}    
class child extends parent{
    email="gmjagan@gmail.com";
    phone= 9999999;
    details(){
        this.AllDetails();
        console.log(this.email,this.phone);
    }
}
var b1= new child;
b1.details();