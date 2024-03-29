const divElement = document.getElementById('div');

{
    /* Create an object using class Car */
    class Car {
        constructor(brand){
            this.brandName = brand;
        }
    }

    myCar = new Car('ford');
    //divElement.innerHTML = myCar.brandName;
}




{
    //Methods
    /* Create a method named 'present' */
    class Car{
        constructor(brand){
            this.brandName = brand;
        }

        present(x){
            return "I have a " + x + this.brandName;
        }
    }

    myCar = new Car('Range Rover');
    //divElement.innerHTML = myCar.present('new ');
}



{
    //Static Methods
    /* Create a static method and call it on the class */
    class Car{
        constructor(brand){
            this.brandName = brand;
        }

        static hello(){
            return 'Hello'
        }
    }

    myCar = new Car('Toyota');
    //divElement.innerHTML = myCar.hello();  //Returns Error
    //divElement.innerHTML = Car.hello();
}

{
    //If you want to use myCar object inside the static method, you can send it as a parameter
    class Car {
        constructor(brand){
            this.brandName = brand;
        }

        static hello(x){
            return "Hello" + x.brandName;
        }
    }

    myCar = new Car(' Lamborgini');
    //divElement.innerHTML = Car.hello(myCar);
}



{
    //Inheritance
    /* Use the 'extends' keyword to create a class inheritance */
    class Car{
        constructor(brand){
            this.brandName = brand;
        }

        present(){
            return "I love my " + this.brandName
        }
    }

    class Model extends Car{
        constructor(brand, mod){
            super(brand);
            this.model = mod;
        }

        show(){
            return this.present() + ', It is a ' + this.model;
        }
    }

    myCar = new Model('ford', 'mustang');
    //divElement.innerHTML = myCar.present();
    //divElement.innerHTML = myCar.show();
}



{
    //Getters and Setters
    /* Create a getter and setter for the 'carname ' property*/
    class Car{
        constructor(brand){
            this.brandName = brand;
        }

        get car_name(){
            return this.brandName;
        }

        set car_name(x){
            this.brandName = x;
        }
    }

    let myCar = new Car('mercedes');

    function updateCarName() {
        if (myCar.car_name === 'mercedes') {
            myCar.car_name = 'Mazda';
        } else if (myCar.car_name === 'Mazda') {
            myCar.car_name = 'Volkswagen';
        } else {
            myCar.car_name = 'mercedes';
        }

        //divElement.innerHTML = myCar.car_name;
    }

    //divElement.innerHTML = myCar.car_name;
    setInterval(updateCarName, 1000);
}