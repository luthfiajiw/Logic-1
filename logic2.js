// SOAL 1
function soal1() {
  console.log("SOAL 1");

  let arr = []
  for (let y = 0; y < 9; y++) {
    arr[y] = []
    for (let x = 0; x < 9; x++) {
      if (x === y) {
        arr[y][x]= (x+1)*2-1
      } else {
        arr[y][x] = " "
      }
    }
  }

  console.log(arr);
  console.log("===============");
}

soal1();

// SOAL 2
const soal2 = () => {
  console.log("SOAL 2");

  let arr = []
  for (let y = 0; y < 9; y++) {
    arr[y] = []
    for (let x = 0; x < 9; x++) {
      if (x == 9-(y+1)) {
        arr[y][x] = (9-(y+1))*2
      } else {
        arr[y][x] = " "
      }
    }
  }

  console.log(arr);
  console.log("===============");
}

soal2();

// SOAL 3
const soal3 = (n) => {
  console.log("SOAL 3");

  let arr = []
  for (let y = 0; y < n; y++) {
    arr[y] = []
    for (let x = 0; x < n; x++) {
      if (x === y) {
        arr[y][x] = (x+1)*2-1
      } else if (x === 9-(y+1)) {
        arr[y][x] = (9-(y+1))*2
      } else {
        arr[y][x] = " "
      }
    }
  }

  console.log(arr);
  console.log("===============");
}

soal3(9);

// SOAL 4
const soal4 = (n) => {
  console.log("SOAL 4");

  let arr = []
  for (let y = 0; y < n; y++) {
    arr[y] = []
    for (let x = 0; x < n; x++) {
      let gnj = (x+1)*2-1
      let gnp = (n-(y+1))*2

      if (x === y) {
        arr[y][x] = gnj
      } else if (x === n-(y+1)) {
        arr[y][x] = gnp
      } else if (x === (n+1)/2-1) {
        arr[y][x] = (y+1)*2-1
      } else if (y === (n+1)/2-1) {
        arr[y][x] = x*2
      }else {
        arr[y][x] = " "
      }
    }
  }

  console.log(arr);
  console.log("===============");
}

soal4(9)

// SOAL 5
const soal5 = (n) => {
  console.log("SOAL 5");

  let arr = []
  for (let y = 0; y < n; y++) {
    arr[y] = []
    for (let x = 0; x < n; x++) {
      let gnj = (x+1)*2-1
      if (x <= y) {
        arr[y][x] = gnj
      } else {
        arr[y][x] = " "
      }
    }
  }

  console.log(arr);
  console.log("===============");
}

soal5(9);


// SOAL 6
const soal6 = (n) => {
  console.log("SOAL 6");

  let arr = []
  for (let y = 0; y < n; y++) {
    arr[y] = []
    for (let x = 0; x < n; x++) {
      let gnp = ((n-1)-y)*2
      if (x >= n-(y+1) ) {
        arr[y][x] = gnp
      } else {
        arr[y][x] = " "
      }
    }
  }

  console.log(arr);
  console.log("================");
}

soal6(10);


// SOAL 7
const soal7 = () => {
  console.log("SOAL 7");

  let arr = []
  for (let y = 0; y < 9; y++) {
    arr[y] = []
    let gnp = (8-y)*2
    for (let x = 0; x < 9; x++) {
      let gnj = (x+1)*2-1
      if (x === y) {
        arr[y][x] = gnj
      } else if (x === 9-(y+1)) {
        arr[y][x] = gnp
      } else if (x > y && x < 9-(y+1)) {
        arr[y][x] = "A"
      } else if (x < y && x > 9-(y+1)) {
        arr[y][x] = "B"
      } else {
        arr[y][x] = " "
      }
    }
  }

  console.log(arr);
  console.log(("==============="));
}

soal7()


// SOAL 8
const soal8 = () => {
  console.log("SOAL 8");

  let arr = []
  for (let y = 0; y < 9; y++) {
    arr[y] = []
    let gnp = (8-y)*2
    for (let x = 0; x < 9; x++) {
      let gnj = (x+1)*2-1
      if (x === y) {
        arr[y][x] = gnj
      } else if (x === 9-(y+1)) {
        arr[y][x] = gnp
      } else if (x <= y && x < 9-(y+1)) {
        arr[y][x] = "A"
      } else if (x >= y && x > 9-(y+1)) {
        arr[y][x] = "B"
      } else {
        arr[y][x] = " "
      }
    }
  }

  console.log(arr);
  console.log("===============");
}

soal8();

//Buat Hacktoberfest Mas
