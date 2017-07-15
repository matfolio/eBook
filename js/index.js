angular.module('eBook', [])
.controller('eBookController', function eBookController($scope) {
	this.Books = {
		list: [
		{
			name: 'Viimeinen Toivomus',
			description:'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.',
			features:'Flowing text, Original pages', 
			author: "Andrzej Sapkowski",
			pages:263,
			ISBN: 9789510416648,
			genres: 'science fiction, Fantasy',
			language: 'Finnish',
			price:'€20',
			store: 200,
			mainwarehouse: 12,
			otherwarehouse: 20,
			image:'img/toivomus.jpg',
			detail: "Viimeinen"
		},
		{
			name: 'Toivomus',
			description:'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.',
			features:'Flowing text, Original pages', 
			author: "Andrzej Sapkowski",
			pages:263,
			ISBN: 9789510416648,
			genres: 'science fiction, Fantasy',
			language: 'English',
			price:'€40',
			store: 200,
			mainwarehouse: 12,
			otherwarehouse: 20,
			image:'img/toivomus.jpg',
			detail: "toivomus"
		},
		{
			name: 'Undivided',
			description:'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.',
			features:'Flowing text, Original pages', 
			author:"Neal Shusterman",
			pages:263,
			ISBN: 9789510416648,
			genres: 'science fiction, Fantasy',
			language: 'Finnish',
			price:'€20',
			store: 200,
			mainwarehouse: 12,
			otherwarehouse: 20,
			image:'img/undivided.jpg',
			detail: "undivided"
		},
		{
			name: 'All Your Worth',
			description:'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.',
			features:'Flowing text, Original pages', 
			author:"Elizabeth Warren",
			pages:263,
			ISBN: 9789510416648,
			genres: 'science fiction, Fantasy',
			language: 'Finnish',
			price:'€20',
			store: 200,
			mainwarehouse: 122,
			otherwarehouse: 66,
			image:'img/allyourworth.jpg',
			detail:"allyourworth"
		},
		{
			name: 'Shattering',
			description:'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.',
			features:'Flowing text, Original pages', 
			author: "Kathryn Lasky",
			pages:263,
			ISBN: 9789510416648,
			genres: 'science fiction, Fantasy',
			language: 'Finnish',
			price:'€65',
			store: 55,
			mainwarehouse: 150,
			otherwarehouse: 50,
			image:'img/theshattering.jpg',
			detail: "shattering"
		},
		{
			name: 'The Shattering',
			description:'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.',
			features:'Flowing text, Original pages', 
			author: "Kathryn Lasky",
			pages:263,
			ISBN: 9789510416648,
			genres: 'science fiction, Fantasy',
			language: 'English',
			price:'€20',
			store: 450,
			mainwarehouse: 52,
			otherwarehouse: 35,
			image:'img/theshattering.jpg',
			detail: "theshattering"
		},
		{
			name: 'Data and Goliath',
			description:'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.',
			features:'Flowing text, Original pages', 
			author: "Bruce Schneier",
			pages:263,
			ISBN: 9789510416648,
			genres: 'science fiction, Fantasy',
			language: 'Finnish',
			price:'€20',
			store: 200,
			mainwarehouse: 12,
			otherwarehouse: 20,
			image:'img/dataandgoliath.jpg',
			detail: "dataandgoliath"
		},
		{
			name: 'Bootstrap in 24',
			description:'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.',
			features:'Flowing text, Original pages', 
			author: "Jennifer Kyrnin",
			pages:263,
			ISBN: 9789510416648,
			genres: 'science fiction, Fantasy',
			language: 'Finnish',
			price:'€20',
			store: 200,
			mainwarehouse: 12,
			otherwarehouse: 20,
			image:'img/bootstrap.jpg',
			detail: "bootstrap"
		},
		{
			name: 'In Too Deep',
			description:'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.',
			features:'Flowing text, Original pages',
			author: "Sherry Ficklin", 
			pages:263,
			ISBN: 9789510416648,
			genres: 'science fiction, Fantasy',
			language: 'English',
			price:'€20',
			store: 50,
			mainwarehouse: 12,
			otherwarehouse: 20,
			image:'img/intoodeep.jpg',
			detail: "intoodeep"
		},
		{
			name: 'Too Deep',
			description:'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.',
			features:'Flowing text, Original pages',
			author: "Sherry Ficklin", 
			pages:263,
			ISBN: 9789510416648,
			genres: 'science fiction, Fantasy',
			language: 'English',
			price:'€25',
			store: 100,
			mainwarehouse: 10,
			otherwarehouse: 20,
			image:'img/intoodeep.jpg',
			detail: "toodeep"
		},
		{
			name: 'HTML and CSS in 24 Hours',
			description:'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.',
			features:'Flowing text, Original pages', 
			author: "Julie C. Meloni",
			pages:263,
			ISBN: 9789510416648,
			genres: 'science fiction, Fantasy',
			language: 'Finnish',
			price:'€20',
			store: 250,
			mainwarehouse: 12,
			otherwarehouse: 20,
			image:'img/htmlandcss.jpg',
			detail:"htmlandcss"
		},
		{
			name: 'CSS in 24 Hours',
			description:'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.',
			features:'Flowing text, Original pages', 
			author: "Julie C. Meloni",
			pages:263,
			ISBN: 9789510416648,
			genres: 'science fiction, Fantasy',
			language: 'Finnish',
			price:'€50',
			store: 100,
			mainwarehouse: 12,
			otherwarehouse: 20,
			image:'img/htmlandcss.jpg',
			detail:"css"
		},
		{
			name: 'Playing with Fire',
			description:'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.',
			features:'Flowing text, Original pages',
			author: "sherry Ficklin",
			pages:263,
			ISBN: 9789510416648,
			genres: 'science fiction, Fantasy',
			language: 'Finnish',
			price:'€15',
			store: 200,
			mainwarehouse: 42,
			otherwarehouse: 42,
			image:'img/playingwithfire.jpg',
			detail: "playingwithfire"
		},
		{
			name: 'Working with Fire',
			description:'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.',
			features:'Flowing text, Original pages',
			author: "sherry Ficklin",
			pages:263,
			ISBN: 9789510416648,
			genres: 'science fiction, Fantasy',
			language: 'Finnish',
			price:'€80',
			store: 200,
			mainwarehouse: 52,
			otherwarehouse: 110,
			image:'img/playingwithfire.jpg',
			detail: "workingwithfire"
		},
		{
			name: 'Queen of Tomorrow',
			description:'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.',
			features:'Flowing text, Original pages', 
			author: "Sherry Ficklin", 
			pages:263,
			ISBN: 9789510416648,
			genres: 'science fiction, Fantasy',
			language: 'Finnish',
			price:'€12',
			store: 200,
			mainwarehouse: 30,
			otherwarehouse: 20,
			image:'img/queenoftomorrow.jpg',
			detail: "queenoftomorrow"
		},
		{
			name: 'Salvo',
			description:'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.',
			features:'Flowing text, Original pages', 
			author: "H.E Trent", 
			pages:263,
			ISBN: 9789510416648,
			genres: 'science fiction, Fantasy',
			language: 'Finnish',
			price:'€70',
			store: 200,
			mainwarehouse: 55,
			otherwarehouse: 210,
			image:'img/salvo.jpg',
			detail:"salvo"
		},
		{
			name: 'Queen of Today',
			description:'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.',
			features:'Flowing text, Original pages', 
			author: "Sherry Ficklin", 
			pages:263,
			ISBN: 9789510416648,
			genres: 'science fiction, Fantasy',
			language: 'Finnish',
			price:'€15',
			store: 200,
			mainwarehouse: 120,
			otherwarehouse: 40,
			image:'img/queenoftomorrow.jpg',
			detail: "queenoftoday"
		},
		{
			name: 'Erstwhile',
			description:'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.' +
			'Ensimmäinen Noituri-fantasiaromaani - kirja, josta The Witcher -peli sai alkunsa.',
			features:'Flowing text, Original pages', 
			author: "H.E Trent", 
			pages:263,
			ISBN: 9789510416648,
			genres: 'science fiction, Fantasy',
			language: 'Finnish',
			price:'€35',
			store: 200,
			mainwarehouse: 120,
			otherwarehouse: 10,
			image:'img/erstwhile.jpg',
			detail: "erstwhile"
		}
		]
	};
	$scope.item = "";
	this.sort= "name";
	this.count = 5;
	var listCount = this.Books.list.length;
	this.onSorted = function(){
		if(this.sort == "name"){
			this.sort = "-name";
			console.log("items unsorted ");
		}
		else{
			this.sort= "name";
			console.log("items sorted");
		}
		
	}
	this.loadMore = function(){
		
		if(this.count >= 5 && this.count <= listCount ){
			var leftOver = listCount - this.count;
			if(leftOver >= 5){
				this.count += 5;
			}
			else if(leftOver < 5){
				this.count += leftOver;
			}
			console.log("items loaded");
		}
		else if(this.count == listCount){
			this.count = listCount;
			console.log("items unloaded");
		}
		
	}
	this.loadLess = function(){
		
		if(this.count >= 5  ){
			var leftOver = this.count - 5;
			if(leftOver < 5){
				this.count -= leftOver;
			}
			else{
				this.count -=5;
			}
			
		}
		else if(this.count == 5){
			this.count = 5;
		}
		
	}
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();   
	});
	//console.log(this.item);
});
/*angular.module('eBook', []).filter('myFormat', function() {
    return function(x) {

    };
});*/

