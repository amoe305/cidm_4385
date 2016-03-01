var myModule = angular.module('Assignment3', ["ngStorage"]);

myModule.controller("QuizController", ["$scope", "$http", "$localStorage",

    function($scope, $http, $localStorage)
    {
        $http.get("index.json").then(function(response)
        {
            qz.myQuestions = response.data.questions;
        }
        );
        
        qz.rightSave = function()
        {
            $localStorage.goodScore = qz.studentsArray.correct;
        };
        
        qz.wrongSave = function()
        {
          $localStorage.badScore = qz.studentsArray.incorrect;  
        };
        
        var qz = this;
        
        qz.studentsArray = 
        [
            {name: "Angel Morales", correct: 0, incorrect: 0},
            {name: "Tory Brown", correct: 0, incorrect: 0},
            {name: "Javon Stanford", correct: 0, incorrect: 0},
            {name: "Brian Bembridge", correct: 0, incorrect: 0},
            {name: "Ryan Money", correct: 0, incorrect: 0}
        ];

        qz.getStudent = function()
        {
            qz.randomStudent = qz.studentsArray[Math.floor(Math.random() * qz.studentsArray.length)];
            qz.selectedStudent = qz.studentsArray[qz.randomStudent];
        };
        
        qz.getQuestion = function()
        {
            qz.randomQuestion = qz.myQuestions[Math.floor(Math.random() * qz.questionArray.length)];
            qz.selectedQuestion = qz.myQuestions[qz.randomQuestion];   
        };
        
        qz.correctAnswer = function()
        {
            qz.studentsArray.correct++;
            qz.rightSave();
        };
        
        qz.wrongAnswer = function()
        {
            qz.studentsArray.incorrect++;
            qz.wrongSave();
        };
        
    }
]
);