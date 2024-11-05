let i = 0;
console.log("toto");

let x = 0;
let y = 2;
let string = "marc";
console.log(y+string);
console.log(x+y);

const exemple = document.getElementById("board");

function printEd(){
    console.log("ed");
}

printEd();

function print(str){
    console.log(str);
}

print("Ed");

function print(str, toto, tata){
    console.log(str + toto + tata);
}

print("Ed", "test", "test2");

console.log("test", "toto");

// "===" checks the type of data
// "const currentclss = currentplyer === j1 ? j1 : j2;" is like a one-line "if" function

@keyframes gradient {
    from {
      background-position: 0%;
    }
    to {
      background-position: 100%;
    }
  }

.rainbow {
    background: linear-gradient(
      69deg,
      #000000,
      #ff0000,
      #ffff00,
      #00ff00,
      #ff00ff,
      #00ffff,
      #ffffff,
      #0000ff,
      #00ffff,
      #ff00ff,
      #00ff00,
      #ffff00,
      #ff0000,
      #000000
    );
    animation: gradient 10s linear infinite;
    animation-direction: alternate;
    background-size: 1500% 100%;
  }
