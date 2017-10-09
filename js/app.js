(function(){
	var app = angular.module('store', []);
	var gems= [
      {
      	name: 'dodecahedron', price: 1000, description: 'beautiful', picture: 'img01.jpg', discounts: [10,15,20], stock: 10,
      reviews: [
        {stars: 5, comments: 'lorem', author: 'alonso'},
        {stars: 5, comments: 'lorem', author: 'alonso'},
        {stars: 5, comments: 'lorem', author: 'alonso'},
      ]
  },
      {
      	name: 'dodecahedron', price: 1000, description: 'beautiful', picture: 'img01.jpg', discounts: [10,15,20], stock: 10,
      reviews: [
        {stars: 5, comments: 'lorem', author: 'alonso'},
        {stars: 5, comments: 'lorem', author: 'alonso'},
        {stars: 5, comments: 'lorem', author: 'alonso'},
      ]
  },
      {name: 'dodecahedron', price: 1000, description: 'beautiful', picture: 'img01.jpg', discounts: [10,15,20], stock: 10,
      reviews: [
        {stars: 5, comments: 'lorem', author: 'alonso'},
        {stars: 5, comments: 'lorem', author: 'alonso'},
        {stars: 5, comments: 'lorem', author: 'alonso'},

      ]
  }
	]
	app.controller('StoreController',['$http', function($http){

		var store = this;
    var url = 'http://localhost:3001/api/product/';
    store.p={
      name: '',
      price: 0,
      description: '',
      images:'',
      stock: 0,
      discounts:'',
      stars: 0,
      comments: '',
      author: ''
    };
    store.view=true;

    $http.get(url)
    .then(function success(response){
      console.log(response);
      console.log(response.data.products);
      store.products = response.data.products;
      console.log(this.products);
      
    });

    store.addProduct = function(product){
      console.log(product);
      $http.post(url, product)
      .then(function success(response){
        console.log(response);
        },
      function err(err){
        console.log(err);
      
      });
    }


  store.deleteProduct = function(id){
    console.log(id);
    $http.delete(url + id)

    .then(function success(response){
        console.log(`El producto con el id ${id} se ha eliminado`); 
        document.location.reload();

      },
      function err(err){
        console.log(`El producto no se ha eliminado ERR: ${err}`);
      
      });


  }


   store.getUniqueProduct = function(id){
    console.log(id);
    $http.get(url + id)
    .then(function success(response){
        console.log(response);
        store.product = response.data.product; 
        
       
      

      },
      function err(err){
        console.log(`El producto no se ha encontrado ERR: ${err}`);
      
      });


  }
  }]);
})();

