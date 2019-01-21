var a = [];

//SOAL 1
function soal1(n) {
  console.log('SOAL 1');
  for (let y = 1; y <= n; y++) {
    a[y] = new Array(y);
    for (let x = 1; x <= n; x++) {
      if (y == x) {
        a[y][x] = "*";
      } else {
        a[y][x] = "_";
      }
    }
  }

  console.log(a);
  console.log('=============');
}

soal1(9);

//SOAL 2
function soal2(n) {
  console.log('SOAL 2');
  for (let y = 1; y <= n; y++) {
    a[y] = new Array(y);
    for (let x = 1; x <= n; x++) {
      if (x == n-(y-1) ) {
        a[y][x] = "*";
      } else {
        a[y][x] = "_";
      }
    }
  }
  console.log(a);
  console.log('=============');
}

soal2(9);

//SOAL 3
function soal3(n) {
  console.log('SOAL 3');
  for (let y = 1; y <= n; y++) {
    a[y] = new Array(y);
    for (let x = 1; x <= n; x++) {
      if (x == y || x == n - (y-1)) {
        a[y][x] = "*";
      }else {
        a[y][x] = " ";
      }
    }
  }

  console.log(a);
  console.log('=============');
}

soal3(9);

//SOAL 4
function soal4(n) {
  console.log('SOAL 4');
  //check the n value
  if (n % 2 == 1) {
    n1 = Math.floor(n/2+1);
    for (let y = 1; y <= n; y++) {
      a[y] = new Array(y);
      for (let x = 1; x <= n; x++) {
        if (x == y || x == n - (y-1)) {
          a[y][x] = "*";
        } else if (y == n1|| x == n1) {
          a[y][x] = "*";
        } else {
          a[y][x] = " ";
        }
      }
    }
    console.log(a);
  } else {
    console.log("Angka yang anda masukan bukan angka ganjil");
  }

  console.log('=============');
}

soal4(9);

//SOAL 5
function soal5(n) {
  console.log('SOAL 5');
  for (let y = 1; y <= n; y++) {
    a[y] = new Array(y);
    for (let x = 1; x <= n; x++) {
      if (x <= y) {
        a[y][x] = "*";
      } else {
        a[y][x] = " ";
      }
    }
  }
  console.log(a);
  console.log('=============');
}

soal5(9);

//SOAL 6
function soal6(n) {
  console.log('SOAL 6');
  for (let y = 1; y <= n; y++) {
    for (let x = 1; x <= n; x++) {
      if (x >= n - (y-1)) {
        a[y][x] = "*";
      } else {
        a[y][x] = " "
      }
    }
  }
  console.log(a);
  console.log('=============');
}

soal6(9);

// SOAL 7
function soal7(n) {
  let a = []
  console.log("SOAL 7");
  for (let y = 0; y < n; y++) {
    a[y] = new Array(y)
    for (let x = 0; x < n; x++) {
      if (x >= y && x <= n-(y+1)) {
        a[y][x] = "*"
      } else if (x <= y && x >= n-(y+1)) {
        a[y][x] = "*"
      } else {
        a[y][x] = " "
      }
    }
  }
  console.log(a);

  console.log("+++++++++++++");
}

soal7(9);

// SOAL 8
function soal8() {
  console.log("SOAL 8");
  let a = []
  for (let y = 0; y < 9; y++) {
    a[y] = new Array(y)
    for (let x = 0; x < 9; x++) {
      if (x <= y && x <= 9-(y+1)) {
        a[y][x] = "*"
      } else if (x >= y && x >= 9-(y+1)) {
        a[y][x] = "*"
      } else {
        a[y][x] = " "
      }
    }
  }

  console.log(a);
  console.log('+++++++++++++++');
}

soal8()
