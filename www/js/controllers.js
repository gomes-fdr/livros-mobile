angular.module('app.controllers', [])

.controller('loginCtrl', function($scope, fireBaseData) {
    $scope.showLoginForm = false; //Checking if user is logged in
    $scope.user = fireBaseData.ref().getAuth();
    if (!$scope.user) {
        $scope.showLoginForm = true;
    }
    //Login method
    $scope.login = function (em, pwd) {
        fireBaseData.ref().signInWithEmailAndPassword({
            email    : em,
            password : pwd
        },function(error, authData) {
            if (error === null) {
                console.log("User ID: " + authData.uid +
                            ", Provider: " + authData.provider);
                $scope.user = fireBaseData.ref().getAuth();
                $scope.showLoginForm = false;
                $scope.$apply();
            } else {
                console.log("Error authenticating user:", error);
            }
        });
    };

    // Logout method
    $scope.logout = function () {
        fireBaseData.ref().unauth();
        $scope.showLoginForm = true;
    };
	})
  
.controller('listaDeLivrosCtrl', function($scope, $firebaseObject) {
   	$scope.books = [];

	var syncObject = $firebaseObject(fb.child("/"));
    syncObject.$bindTo($scope, "books");
	
})
   
.controller('autenticaOCtrl', function($scope, $firebaseAuth, $location) {

	$scope.entrar = function(username, password) {
		console.log("Entrar com usuário existente");

		var fbAuth = $firebaseAuth(fb);

		console.log("nome: " + username);
		console.log("senha: " + password);

		fbAuth.$authWithPassword({
            email: username,
            password: password
        }).then(function(authData) {
            $location.path("/page5");
        }).catch(function(error) {
            console.error("ERROR: " + error);

            // Depois q autenticar estiver funcionando, retirar isso daqui!
            // ainda não temos uma versão do angularfire para firebase sdk v3, por isso não funciona.
            $location.path("/page5");
        });
	}

	$scope.registrar = function(username, password) {
		console.log("Registrar novo usuário...");

		var fbAuth = $firebaseAuth(fb);

		console.log("nome: " + username);
		console.log("senha: " + password);

		fbAuth.$authWithPassword({
            email: username,
            password: password
        }).then(function(authData) {
            $location.path("/page5");
        }).catch(function(error) {
            console.error("ERROR: " + error);

            // Depois q autenticar estiver funcionando, retirar isso daqui!
            $location.path("/page5");
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
 
