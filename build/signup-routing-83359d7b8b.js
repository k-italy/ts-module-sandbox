var directives;
(function (directives) {
    var common;
    (function (common) {
        function generalDirective() {
            console.log('generalDirective');
        }
        common.generalDirective = generalDirective;
    })(common = directives.common || (directives.common = {}));
})(directives || (directives = {}));

var directives;
(function (directives) {
    var common;
    (function (common) {
        function runDirectives() {
            console.log('init directives!');
        }
        common.runDirectives = runDirectives;
    })(common = directives.common || (directives.common = {}));
})(directives || (directives = {}));

var controllers;
(function (controllers) {
    var signup;
    (function (signup) {
        var SignupController = (function () {
            function SignupController(someNum) {
                this.someNum = someNum;
            }
            SignupController.prototype.printSomeNum = function () {
                console.log(this.someNum);
            };
            return SignupController;
        })();
        signup.SignupController = SignupController;
    })(signup = controllers.signup || (controllers.signup = {}));
})(controllers || (controllers = {}));

var routing;
(function (routing) {
    var signup;
    (function (signup) {
        var ctrl = controllers.signup;
        function run() {
            var signupCtrl = new ctrl.SignupController(121);
            signupCtrl.printSomeNum();
        }
        signup.run = run;
    })(signup = routing.signup || (routing.signup = {}));
})(routing || (routing = {}));
routing.signup.run();

//# sourceMappingURL=signup-routing-83359d7b8b.js.map