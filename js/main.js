var app = angular.module('TIApp',[]);

app.controller('MainController', function ($scope) {


    activate();

    function activate() {
        console.log("MainController activated")
    }
});