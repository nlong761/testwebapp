// "use strict";

var bind = function() {
    if (!('bind' in Function.prototype)) {
        var fn = this;
        var context = arguments[0];
        var args = Array.prototype.slice.call(arguments, 1);
        return function() {
            return fn.apply(context, args.concat([].slide.call(arguments)));
        };
    }
};

var Module = (function(){
    var privateProperty = '';
    function privateM(args) {

    }
    return {
        publicProperty: '',
        publicMethod: function(args) {},
        privilegeMethod: function(args) {
            return privateM(args);
        }
    };
})();

(function(window){
    var foo, bar;
    function privateF() {

    }
    window.Module = {
        public: function() {
            console.log("Public");
        }
    };
})(this);
// this.Module.public();


var f = {
    foo: () => this,
    // foo: function() {return this;}
};
console.log(f === f.foo());