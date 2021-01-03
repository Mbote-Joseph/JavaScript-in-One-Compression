let socialMedia = [
  "youtube",
  "facebook",
  "linkedin",
  "whatsapp",
  "imo",
  "instagram",
];

for (let n of socialMedia) {
  console.log(n);
}

let symbols = {
  yt: "Youtube",
  fb: "facebook",
  lk: "linkedin",
  wa: "whatsapp",
  im: "imo",
  in: "instagram",
};
for (let m in symbols) {
  console.log(m);
}

for (let m in symbols) {
  console.log(symbols[m]);
}

for (let m in symbols) {
  console.log(`Key is ${m}  and value is${symbols[m]}`);
}
