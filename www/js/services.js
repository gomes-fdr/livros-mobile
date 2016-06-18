angular.module('app.services', [])

.factory('fireBaseData', function($firebase) {
    var ref = new Firebase("https://project-2644857297739104734.firebaseio.com/");
    return {
        ref: function() {
            return ref;
        }
    }
})

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);

