var a = [];

//SOAL 1
function soal1(n) {
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
}

soal1(9);

//SOAL 2
function soal2(n) {
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
}

soal2(9);

//SOAL 3
function soal3(n) {
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
}

soal3(9);

//SOAL 4
function soal4(n) {
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
}

soal4(9);

//SOAL 5
function soal5(n) {
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
}

soal5(9);

//SOAL 6
function soal6(n) {
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
}

soal6(9);
