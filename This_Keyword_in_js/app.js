let obj = {
    name: "AnugrahaGomja",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.name},welcome to website`);
    }
}
obj.welcomeMessage()
obj.name = "HariBahadur"
obj.welcomeMessage()