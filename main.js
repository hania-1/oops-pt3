//oops
var mycar = {
    brand: "dalaa",
    model: 2022,
    color: " black"
};
console.log(mycar);
var Mycar = /** @class */ (function () {
    function Mycar() {
        this.brand1 = "Dalaa";
        this.model1 = 2022;
        this.color1 = "white";
    }
    return Mycar;
}());
var Car = new Mycar;
console.log(Car);
//display details
var myclass = {
    stdname: "hania",
    rollno: 8,
    displayDetails: function () {
        return "stdname ".concat(myclass.stdname, ", rollno ").concat(myclass.rollno);
    }
};
console.log(myclass.displayDetails());
