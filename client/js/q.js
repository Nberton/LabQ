
var labQApp = angular.module("labQApp",[]);

labQApp.controller("QController",function($scope) {
    $scope.check = [];
    $scope.help = [];
    
    // var time = new Date;
    
    // var student = {name:"Phile Roberts",time:time.toTimeString().substr(0,9),details:"I am a student"};
    
    // $scope.check.push(student);  
    
    $scope.helpAdd= function(sname,sdetails){
      var time = new Date;
      if(sname == ""){
        $scope.hN = "";
        $scope.hD = "";
        return false;
      }
      var student = {name:sname,time:time.toTimeString().substr(0,9),details:sdetails}
      $scope.help.push(student);
      $scope.hN = "";
      $scope.hD = "";
      console.log("set pristine");
    }
    
        
    $scope.checkAdd= function(sname,sdetails){
      var time = new Date;
      if(sname == ""){
        $scope.cN = "";
        $scope.cD = "";
        return false;
      }
      var student = {name:sname,time:time.toTimeString().substr(0,9),details:sdetails}
      $scope.check.push(student);
      $scope.cN = "";
      $scope.cD = "";
      $scope.apply();
    }
    
  
    
    
}); 

labQApp.controller("TAController",function($scope) {
    $scope.check = [];
    $scope.help = [];

    time= new Date();
    
    //check test data
    $scope.check.push({name:"Paul Firth",time:time.toTimeString().substr(0,9),details:"Checkpoint 1"});
    $scope.check.push({name:"Robin Sonja",time:time.toTimeString().substr(0,9),details:"Checkpoint 1"});
    $scope.check.push({name:"Rostislav Jeffery",time:time.toTimeString().substr(0,9),details:"Checkpoint 1"});
    $scope.check.push({name:"Marcella Zdravkov",time:time.toTimeString().substr(0,9),details:"Checkpoint 1"});
    $scope.check.push({name:"Test Name",time:time.toTimeString().substr(0,9),details:"Checkpoint 1"});
    $scope.check.push({name:"Iseult Arthur",time:time.toTimeString().substr(0,9),details:"Checkpoint 1"});
    $scope.check.push({name:"Eduárd St John",time:time.toTimeString().substr(0,9),details:"Checkpoint 2"});
    $scope.check.push({name:"Dirk Mcdonald",time:time.toTimeString().substr(0,9),details:"Checkpoint 2"});
    $scope.check.push({name:"Archelaos Brady",time:time.toTimeString().substr(0,9),details:"Checkpoint 1"});
    $scope.check.push({name:"Grandma McBadatcoding",time:time.toTimeString().substr(0,9),details:"Checkpoint 1 and 2"});
    
    //help test data    
    $scope.help.push({name:"Lykos Daviau",time:time.toTimeString().substr(0,9),details:"Why do I need semicolons?"});
    $scope.help.push({name:"Rostislav Jeffery",time:time.toTimeString().substr(0,9),details:"Homework Help"});
    $scope.help.push({name:"Grandpa McBadatcoding",time:time.toTimeString().substr(0,9),details:"I've fallen and I can't get up"});
    $scope.help.push({name:"Grandma McBadatcoding",time:time.toTimeString().substr(0,9),details:"I've fallen and I can't get up"});

    $scope.takeCheckStudent = function(index){
      var student = $scope.check[index];
      $scope.check.splice(index,1);
    }

    $scope.takeHelpStudent = function(index){
      var student = $scope.help[index];
      $scope.help.splice(index,1);
    }
    
    
}); 


  
//   var socket = io.connect();
  
//   $scope.messages = [];
//   $scope.roster = [];
//   $scope.name = '';
//   $scope.text = '';
  
//   socket.on('connect', function () {
//     $scope.setName();
//   });
  
//   socket.on('message', function (msg) {
//     $scope.messages.push(msg);
//     $scope.$apply();
//   });
  
//   socket.on('roster', function (names) {
//     $scope.roster = names;
//     $scope.$apply();
//   });
  
//   $scope.send = function send() {
//     console.log('Sending message:', $scope.text);
//     socket.emit('message', $scope.text);
//     $scope.text = '';
//   };
  
//   $scope.setName = function setName() {
//     socket.emit('identify', $scope.name);
//   };
  
  
// var phonecatApp = angular.module('phonecatApp', []);

// phonecatApp.controller('PhoneListCtrl', function ($scope) {
//   $scope.phones = [
//     {'name': 'Nexus S',
//     'snippet': 'Fast just got faster with Nexus S.'},
//     {'name': 'Motorola XOOM™ with Wi-Fi',
//     'snippet': 'The Next, Next Generation tablet.'},
//     {'name': 'MOTOROLA XOOM™',
//     'snippet': 'The Next, Next Generation tablet.'}
//   ];
// });