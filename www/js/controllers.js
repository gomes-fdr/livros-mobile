angular.module('app.controllers', [])
  
.controller('listaDeLivrosCtrl', function($scope, $firebaseObject) {
  
	$scope.books = [];

    var syncObject = $firebaseObject(firebase.database().ref('livros/'));
    syncObject.$bindTo($scope, "books");
})
   
.controller('autenticaOCtrl', function($scope, $firebaseAuth, $location, $state) {
    
    var user = firebase.auth().currentUser;
    
    $scope.checkSession = firebase.auth().onAuthStateChanged(function(user){
        if (user) {
            // User is signed in.
            console.log('Logado');
            console.log('user: ' + user.email);
            console.log('uid: ' + user.uid);
            $state.go("detalhesDoLivro");
            
            /*firebase.auth().signOut().then(function() {
                // Sign-out successful.
                console.log('fiz logout');
            }, function(error) {
                // An error happened.
            });*/
            
        } else {
        // No user is signed in.
            console.log('NAO Logado');
			$state.go("autenticaO");
        }
    });
    $state.go("listaDeLivros");
	//teste2@gmail.com
	//senha 1234567
    // email de teste: teste@gmail.com
    // senha de teste: 123456fg
    $scope.entrar = function(user) {
        console.log("Entrar com usuário existente");

        console.log("nome: " + user.email);
        console.log("senha: " + user.password);
        
        firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error) {
            console.log("Logando...");
			var errorCode = error.code;
            var errorMessage = error.message;
            
            console.log(error.message);
        });
		$state.go("listaDeLivros");
    }

    $scope.registrar = function(user) {
        console.log("Registrar novo usuário...");
        
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            
            console.log(error.message);
        });
    }
	
	$scope.logoff = function(user) {
		console.log('Logout');
		firebase.auth().signOut().then(function() {
                // Sign-out successful.
                console.log('Logout bem sucedido');
            }, function(error) {
                // An error happened.
            });
	
	}
})
   
.controller('detalhesDoLivroCtrl', function($scope, $firebaseAuth, $location, $state) {
    var user = firebase.auth().currentUser;
    $scope.checkSession = firebase.auth().onAuthStateChanged(function(user){
        if (user) {
            console.log('Logado lol');
            console.log('user: ' + user.email);
            console.log('uid: ' + user.uid);
        } else {
            console.log('Não logado, redirecionando');
			$state.go("autenticaO");
        }
    });

    var ref = firebase.database().ref("livros");
    ref.once("value")
        .then(function(snapshot) {
            var livra = snapshot.child("livros").val();
            console.log("Livro inteiro " + livra);

            var titulo = snapshot.child("2/title").val();
            console.log("Só o título " + titulo);

            var isbn = snapshot.child("3").child("isbn").val();
            console.log("Só o título " + isbn);
    });



    $scope.livro = {};

    
})
   
.controller('detalhesDoLivro2Ctrl', function($scope) {

})
   
.controller('negociaODoLivroCtrl', function($scope, $state) {
	console.log("Acessando negociação do livro");
	var user = firebase.auth().currentUser;
    
    $scope.checkSession = firebase.auth().onAuthStateChanged(function(user){
        if (user) {
            // User is signed in.
            console.log('Logado');
 
            console.log('user: ' + user.email);
            console.log('uid: ' + user.uid);
             
        } else {
        // No user is signed in.
            console.log('Não logado, redirecionando');
			$state.go("autenticaO");
        }
    });
})
   
.controller('meusLivrosCtrl', function($scope, $state) {
	console.log("Acessando meus livros");
	var user = firebase.auth().currentUser;
    
    $scope.checkSession = firebase.auth().onAuthStateChanged(function(user){
        if (user) {
            // User is signed in.
            console.log('Logado');
            
            
            console.log('user: ' + user.email);
            console.log('uid: ' + user.uid);
            
        } else {
        // No user is signed in.
            console.log('NAO Logado');
			$state.go("autenticaO");
        }
    });
})
   
.controller('livroCtrl', function($scope, $location, $firebaseArray, $state) {
    
$scope.foto = function(){
        console.log("Bater foto da capa...");
    }

    $scope.gravar = function(titulo, autor, isbn) {
        console.log("Gravar novo livro...");

        // var book = new Firebase(URL).child("books");


        var book = $firebaseArray(firebase);
        book.$add({title: titulo, author: autor, isbn: isbn});

        $state.go("listaDeLivros");
    }

    $scope.sair = function() {

        $state.go("listaDeLivros");

    }

})
 
