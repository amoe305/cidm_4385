var myModule = angular.module('weatherApp', []);

myModule.controller("WeatherController", ["$scope",

    function($scope)
    {
        var wc = this;
        
        wc.cities = 
        [
            {name:"Honolulu", temperature:0, lat:0, lon:0, url_name:"Honolulu"},
            {name:"Amarillo", temperature:0, lat:0, lon:0, url_name:"Amarillo"},
            {name:"New York", temperature:0, lat:0, lon:0, url_name:"New_York"}
        ];
        
        wc.selected_city = wc.cities[0]
    }

]
);

