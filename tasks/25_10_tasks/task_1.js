class Mobile {
    Brand_Name;
    Model_Name;
    Ram;
    Storage_space;
    Color;

}   
class Iphone extends Mobile {
   print(){
     this.Brand_Name = "Apple";
     this.Model_Name = "Iphone 14 pro";
     this.Ram = "4GB";
     this.Storage_space = "128GB,256GB,512GB";
     this.Color = "Purple,Midnight,Starlight,Blue,Red";
       console.log(this.Brand_Name);
       console.log(this.Model_Name);
       console.log(this.Ram);
       console.log(this.Storage_space);
       console.log(this.Color);
    }
}
var P1 = new Iphone();
P1.print();