// let obj1 = {
//     name: 'nat',
//     sayHi() {
//         alert('Hello'//this.name)
//     },
//     sayGoodbye() {
//         alert("Goodbye")
//     }
// }

// obj1.sayHi();

//Exercise 
// ans. Error ให้ใส่ semi-colon

let user = {
  name: "John",
  go: function () { alert(this.name) }
};

(user.go)()

//Exercise
function makeUser() {
  return {
    name: "John",
  }    //function ถ้า call this เปล่าๆไม่มี obj.function ตัว this จะไม่มีค่า undefined
    ref: function () {
      return this
  };
};

let user = makeUser();

alert(user.ref().name); // What's the result?


//Exercise

let calculator = {
  read() {
    x = +prompt("Insert x number");
    y = +prompt("insert y number");
  },

  sum() {
    return x + y;
  },

  mul() {
    return x * y;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


//Exercise

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};