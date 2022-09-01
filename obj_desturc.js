   const biodata={
        name:"ahsan",
        age:20,
        deg:"bachelors in CS",
        hobb:{
            first:"playing",
            sec:"prog"
        }
    };

let {name:myname,age:myage,deg,hobb}=biodata;
console.log(`my name is ${myname}`);
console.log(`my age is ${myage}`);
console.log(`my degree is ${deg}`);
console.log(`my hobb is ${hobb.sec}`);



//default paarameters

function add(a,b=1){
    console.log(a+b);
    
}

add(2,3);

//rest paraameters
function sum1(...inputs) {
        let total=0;
        for (let i of inputs){
            total += i;
        }
        console.log(total);
    }

    sum1(10,10,20);
