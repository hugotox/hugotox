angular.module('resumeApp', []).
    config(function ($httpProvider) {

        // Cross Origin Resource Sharing config
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });

angular.module('resumeApp').
    controller('AppController', function ($scope, $http) {
        $scope.data = {};

        $http({method: 'GET', url: 'data.json'})
            .success(function (response) {
                $scope.data = response;
                // items in the first column: half or half+1
                var firstColItemCount = Math.ceil($scope.data.skills.length / 2);
                $scope.data.skills1 = $scope.data.skills.slice(0, firstColItemCount);
                $scope.data.skills2 = $scope.data.skills.slice(firstColItemCount);
            });

        var now = new Date();

        $scope.getYears = function (initial) {
            return now.getFullYear() - initial + 1;
        };


    });
