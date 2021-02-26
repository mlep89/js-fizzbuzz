// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.



//Creo un ciclo for per stampare un elenco da 1 a 100
for (var i = 1; i < 101; i++) {
    //Introduco la condizione per individuare i multipli di 3 e 5
    if (i % 3 == 0 && i % 5 == 0) {
        //Stampo ogni valore multiplo di 3 e 5 con la parola FizzBuzz
        console.log("FizzBuzz");
    }
    //Introduco la condizione per individuare i multipli di 3
    else if (i % 3 == 0) {
        //Stampo ogni valore multiplo di 3 con la parola Fizz;
        console.log("Fizz");
    }
    //Introduco la condizione per individuare i multipli di 5
    else if (i % 5 == 0) {
        //Stampo ogni valore multiplo di 5 con la parola Buzz
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
