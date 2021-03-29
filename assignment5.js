var Kiosk={
    set getFruits(fruit){
        this.fruit=this.fruit+fruit;
    }
    fruit:("Apple","Banana","tomato")
}
Kiosk.getFruits="mango";
console.log(Kiosk.fruit);
