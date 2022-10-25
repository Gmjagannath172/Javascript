function printDesignation(x){
    if (x < 2){
        console.log("Junior Software Developer");
    } else if (x>3 && x<5){
        console.log("Senior Software Developer");
    } else if (x>6 && x<8){
        console.log("Team Lead");
    } else if (x>9 && x<12){
        console.log("Project Manager");
    } else{
        console.log("Software Architect");
    }
}

   printDesignation(7);
   printDesignation(1);
   printDesignation(11);
   printDesignation(13);