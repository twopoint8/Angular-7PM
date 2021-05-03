var class_one = /** @class */ (function () {
    function class_one() {
        this.sub_one = "Angular 11";
        this.sub_two = "Javascript";
        this.sub_three = "Core Java";
    }
    class_one.prototype.getSubOne = function () {
        return this.sub_one;
    };
    class_one.prototype.getSubTwo = function () {
        return this.sub_two;
    };
    class_one.prototype.getSubThree = function () {
        return this.sub_three;
    };
    return class_one;
}());
var obj = new class_one();
console.log(obj.getSubOne(), "----", obj.getSubTwo(), "----", obj.getSubThree());
