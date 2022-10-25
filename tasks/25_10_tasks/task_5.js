class Iphone{
    Brand_name="Apple";
    Model_name="Iphone 14";
    Storage="128GB,256Gb,512GB";
    Ram="4GB";
    price=120000;
    qty= 5;
    totalAmount=0;
    printDetails(){
        console.log(this.Brand_name);
        console.log(this.Model_name);
        console.log(this.Storage);
        console.log(this.Ram);
        this.totalAmount=this.price*this.qty;
        console.log(this.totalAmount)
    }
} 
var Display = new Iphone;
Display.printDetails();