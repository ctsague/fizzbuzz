function fizzbuzz (){

	for (i=1; i<=100; i=i+1){
		console.log(i);

		if ((i%3==0) && (i%5==0)) {
			console.log(i + 'is fizzbuzz')
		}

		else if (i%3==0){
			console.log(i +'is fizz');
		}
		 
		else if (i%5==0) {
			console.log(i + 'is buzz');
		}

	}
}

fizzbuzz();
