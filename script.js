//ex1

function multiplierPar10NFois(num, n) {
    var s=num*10;
    while(n>0){
        console.log(s);
        n--;
    }
   
}
multiplierPar10NFois(3, 3); 
multiplierPar10NFois(5, 2);


//ex2

function compterCaractèreÀIndex(string1, index, string2) {
   var s=0;
   var s1=string1.charAt(index);




   while(s<=string2.length){
    while(string2.charAt(s)===s1)
    s++;
        
    }return s;
}
compterCaractèreÀIndex("hello", 2, "lol");          
compterCaractèreÀIndex("world", 3, "Hello World"); 


//ex3

function inverserChaine(chaine) {
    compteur=chaine.length;
    chaine2="";
   while(compteur>=0){
    chaine2=chaine2+chaine.charAt(compteur);
    compteur--;

   }return chaine2;
}
inverserChaine("hello"); 
inverserChaine("world"); 


//ex4

function obtenirIndiceDe(chaine, caractere) {
    compteur=0;
    var nombre=0;
    while(compteur<=chaine.length){
        if(caractere===chaine.charAt(compteur)){
            return compteur;

        }
        compteur++;

    }
}

obtenirIndiceDe("I am a hacker", "a");
obtenirIndiceDe("hello", "h");         


//ex5

function sommePairs(nombre1, nombre2) {
   var compteur=nombre1;
   var s=0;
   while(nombre1<nombre2){
    if(compteur%2===0){
        s=s+compteur;

    }compteur++;
   }return s
}

sommePairs(3, 9); 
sommePairs(1, 6);













