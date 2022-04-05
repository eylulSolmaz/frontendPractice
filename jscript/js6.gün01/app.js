/* let aday = [
  {
    isim: "Ali T",
    yas: 14,
  },
  {
    isim: "Ayse K",
    yas: 30,
  },
  {
    isim: "Tarık G",
    yas: 16,
  },
  {
    isim: "Elif S",
    yas: 22,
  },
];

let ortalama = aday.reduce((toplam, item) => {
  return toplam + item.yas;
}, 0);
console.log((ortalama / aday.length).toFixed(2)); */

//örnek
/* let dizim = [24, 456, 788, 56, 124, 38, 324, 490];
const yeniDizi = dizim
  .filter((m) => m > 70)
  .map((m) => m / 2)
  .forEach((m) => console.log(m));

const soru = dizim
  .filter((n) => n < 70)
  .map((n) => (n * 1.2).toFixed(2))
  .forEach((n) => console.log(n));
 */

/* let cumle = "Bugün hava güzeldi";
/* for (let i in cumle) {
   console.log(i);
  console.log(cumle[i]);
   console.log(`${i} =${cumle[i]}`);
} */
/* for (harf of cumle) {
  console.log(harf);
} */

let dizi = ["çanta", "kalem", "silgi", "defter", "cüzdan"];
/* for (let i in dizi) {
  //console.log(i);
  console.log(i, dizi[i]);
} */

for (i of dizi) {
  console.log(i);
}
