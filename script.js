
var multiples = [];

var total=0;


for (i = 0 ; i < 1000 ; i = i + 1){
  if (i%5 === 0 || i%3 === 0){

    multiples.push(i);

    }
};

for (var j=0; j < multiples.length; j++) {
  total = total + multiples[j];
};



console.log(total);
