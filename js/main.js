/*
function initMap(){
	var map = new google.maps.Map(document.getElementById('map'),{
		zoom: 5,
		center: { lat: -9.1191427, lng: -77.0349046},
		mapTypeControl: false,
		zoomControl: false,
		streetViewControl:false
	});

	function buscar(){
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(funcionExito,funcionError);
		}
	}

	document.getElementById('encuentrame').addEventListener('click',buscar);
	var latitud,longitud;

	var funcionExito = function(posicion){
		latitud = posicion.coords.latitude;
		longitud = posicion.coords.longitude;

		var miUbicacion = new google.maps.Marker({
			position:{lat:latitud, lng:longitud},
			animation: google.maps.Animation.DROP,
			map:map
		});
		map.setZoom(17);
		map.setCenter({lat:latitud, lng:longitud});
	}

	var funcionError = function(error){
		alert('Tenemos un problema con encuentrar tu ubicacion');
	}
}
/**/
const easyBike = {

	mapas: {
		mapaInicial: undefined,
		miUbicacion: undefined
	},

	posicionActual : {
		latitud: undefined,
		longitud: undefined
	},

	iniciarMapa : function() {
		easyBike.mapas.mapaInicial = new google.maps.Map(document.getElementById('map'),{
			zoom: 5,
			center: { lat: -9.1191427, lng: -77.0349046},
			mapTypeControl: false,
			zoomControl: false,
			streetViewControl:false
		});
		easyBike.funciones();
	},

	funciones : function(){
		document.getElementById('encuentrame').addEventListener('click',easyBike.buscar);
	},

	buscar : function(){
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(easyBike.funcionExito,easyBike.funcionError);
		}
	},

	funcionExito : function(posicion){
		easyBike.posicionActual.latitud = posicion.coords.latitude;
		easyBike.posicionActual.longitud = posicion.coords.longitude;

		easyBike.mapas.miUbicacion = new google.maps.Marker({
			position:{lat:easyBike.posicionActual.latitud, lng:easyBike.posicionActual.longitud},
			animation: google.maps.Animation.DROP,
			map:easyBike.mapas.mapaInicial
		});

		easyBike.mapas.mapaInicial.setZoom(17);
		easyBike.mapas.mapaInicial.setCenter({lat:easyBike.posicionActual.latitud, lng:easyBike.posicionActual.longitud});
	},

	funcionError : function(error){
		alert('Tenemos un problema con encuentrar tu ubicacion');
	}

};

$(document).ready(easyBike.iniciarMapa);