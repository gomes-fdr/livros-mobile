angular.module('app.controllers', [])
  
.controller('listaDeLivrosCtrl', function($scope, $firebaseObject) {
    $scope.books = [];

    var syncObject = $firebaseObject(firebase.database().ref('livros/'));
    syncObject.$bindTo($scope, "books");
})
   
.controller('autenticaOCtrl', function($scope, $firebaseAuth, $location) {
    
    var user = firebase.auth().currentUser;
    
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            console.log('Logado');
            
            
            console.log('user: ' + user.email);
            console.log('uid: ' + user.uid);
            
            firebase.auth().signOut().then(function() {
                // Sign-out successful.
                console.log('fiz logout');
            }, function(error) {
                // An error happened.
            });
            
        } else {
        // No user is signed in.
            console.log('NAO Logado');
        }
    });

    // email de teste: teste@gmail.com
    // senha de teste: 123456fg
    $scope.entrar = function(user) {
        console.log("Entrar com usuário existente");

        console.log("nome: " + user.email);
        console.log("senha: " + user.password);
        
        firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            
            console.log(error.message);
        });

        
    }

    $scope.registrar = function(user) {
        console.log("Registrar novo usuário...");
        
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            
            console.log(error.message);
        });
    }
})
   
.controller('detalhesDoLivroCtrl', function($scope) {

})
   
.controller('detalhesDoLivro2Ctrl', function($scope) {

})
   
.controller('negociaODoLivroCtrl', function($scope) {

})
   
.controller('meusLivrosCtrl', function($scope) {

})
   
.controller('livroCtrl', function($scope, $location, $firebaseArray) {
    $scope.foto = function(){
        console.log("Bater foto da capa...");
    }

    $scope.gravar = function(titulo, autor, isbn) {
        console.log("Gravar novo livro...");

        // var book = new Firebase(URL).child("books");


        var book = $firebaseArray(fb);
        book.$add({title: titulo, author: autor, isbn: isbn});

        $location.path("/page2");
    }

    $scope.sair = function() {

        $location.path("/page2");

    }

})
 
