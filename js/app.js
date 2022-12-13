// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Shoe-pedia',
	panel: {

		swipe: true,

	},
  	routes: [
		{
		path: '/productos/',
    	url: 'index.html',
    	name: 'productos',
  		},
		{
		path: '/tiendas/',
    	url: 'tiendas.html',
    	name: 'tiendas',
  		},
		{
		path: '/favoritos/',
    	url: 'favoritos.html',
    	name: 'favoritos',
  		},
        {
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
        {
		path: '/carrito/',
    	url: 'carrito.html',
    	name: 'carrito',
  		},
        {
		path: '/dir-envio/',
    	url: 'dir-envio.html',
    	name: 'dir-envio',
  		},
        {
		path: '/ajustes/',
    	url: 'ajustes.html',
    	name: 'ajustes',
  		},
        
		
	],
	dialog: {
		title: 'Shoe-pedia',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#modal-login');
		
		app.dialog.alert('¡Bienvenido, nuestra variedad de calzado está esperando por ti!');
    }
	
});



$$(document).on('click', '#btnCheckout', function (e) {
	e.preventDefault();


	app.dialog.confirm('¿Estás seguro de tu compra?', function () {

		

		//app.dialog.alert('Great!');

	
		var notification = app.notification.create({
		 icon: '<i class="material-icons">check</i>',
		 title: 'Compra hecha exitosamente',
		 titleRightText: '',
		 subtitle: '',
		 text: "Su orden a sido recibida, ¡Muchas Gracias por su compra!",
		 closeTimeout: 3000,
		});
		notification.open();
		
		
	});
	
});





