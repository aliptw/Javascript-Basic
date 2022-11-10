
const isiNilai = prompt('ISI NILAI ANDA');

if else
if ( isiNilai >= 8 & isiNilai == 10) {
    alert('SELAMAT ANDA LULUS');
} else if ( isiNilai >= 6 & isiNilai < 8) {
    alert('MAMPUS GA NAIK KELAS YAHAHA');
} else {
    alert('GANIAT SEKOLAH ANYING');
}

switch case
switch (isiNilai){
    case '10' :
    case '9' :
    case '8' :
        alert('SELAMAT ANDA LULUS');
        break;
    case '7' :
    case '6' :
        alert('MAMPUS GA NAIK KELAS YAHAHA');
        break;
    default:
        alert('GANIAT SEKOLAH ANYING');
}

//IN OPERATOR
const mhs = {
    nama: 'nadia azzahra',
    kelas: '12',
    jurusan: 'informatika'
};

const mhs1 =[10, 10, 19, 20]

const result = 4 in mhs1;
console.log(result)


//TERNARY OPERATOR
const value = 9;
const result = value ==10 ? 'benar' : 'salah';

console.log(`hasil dari nomer ${value} adalah ${result}`)


//NULLISH CONCEALING OPERATOR
let param;
let result =(param ?? '1') * 10

console.log(result)


//OPTIONAL CHAINING
let person ={

}
alert(person?.address?.country)

//TRUTHY FALSY
let data = undefined
if(data){
    alert('TRUE');
}else{
    alert('FALSE')
}

//LOGIKA DI NON BOOLEAN
console.info('TRUE' || '');
console.info(null || 'NULL');
console.info('unde' || undefined);
console.info('nol' || 0);
console.info(0 || false);
console.info('true' || '0');


//FOR LOOPING
for(i =1; i <=10; i++){
    console.log(`ini pengulangan ke ${i}`)
}


//WHILE LOOPING
let i = 1;
while(true){
    console.info(`ini pengulangan ke ${i}`);
    i++;
    
    if( i > 100){
        break;
    }
}

//DO WHILE LOOP
let i = 1;
do{
    console.log(`pengulangan ke ${i}`)
    i++
}
while (i <=10);
    
    
BREAK, CONTINUE, LABEL
for(let i = 1; i <= 10; i++){
    if( i % 2 === 0){
        continue;
    }
    console.log(`bilangan ganjil dari angka 1 - 10 adalah ${i}`)
}
loopi:
for (let i = 1; i < 10; i++){
        loopj:
        for(let j = 1; j < 100; j++){
            if  ( j > 20 ){
                continue loopi;
            }
            console.log(`${i} dan ${j}`)
        }
    }
    
    //FOR IN DAN FOR OF
    const nama = {
    firstName : 'Alif',
    lastName : 'Thowaf'
}
for(const property in nama){
    console.log(`PROPERTY ${property} adalah ${nama[property]}`)
}

const number = ['kurniawan', 'kartika', 'sari']

for(index in number){
    console.log(`${index} = ${number[index]}`)
}

const number = ['kurniawan', 'kartika', 'sari']
const nama = 'indonesia merdeka tahun 1945'

for(huruf of nama){
    console.log(`${huruf}`)
}
for(index of number){
    console.log(`${index}`)
}


//WITH STATEMENT
const nama = {
    firstName : 'Alif',
    lastName : 'Thowaf'
}

console.log(nama.firstName)
console.log(nama.lastName)

with(nama) {
    console.log(firstName)
    console.log(lastName)
}

//FUNCTION
const fungsi = sebutNama isi => alert(`halo nama`){
    
    console.info(fungsi)
}

function jumlahAngka(angka1, angka2) {

    const hasil = angka1 + angka2;
    return hasil;
    
}

const jumlah = jumlahAngka(1, 2);
console.log(jumlah)


//OPTIONAL PARAMETER, DEFAULT PARAMETER, 
function namaLengkap(firstName, middleName, lastName = 'TIDAK ADA',) {
    const hello = console.log(`Halo ${firstName} ${middleName} ${lastName}`);
    return hello;
}
namaLengkap('alif', 'indo', 'merdeka', 123, 189181, 901891, 981719)


//REST PARAMETER, FUNCTION SBG VARIABLE
function namaLengkap(firstName,...lainnya) {
    let total = 0;
    for(item of lainnya){
        total += item
    } 
    const hasil = console.log(`hasil dari ${firstName} adalah ${total}`)
    return hasil;
}

const totalNama = namaLengkap;

totalNama('alif', 5, 5, 5, 5)
namaLengkap('alif', 5, 5, 5, 5)


//anonymous function
const say = function(nama){
    console.log(`hello ${nama} kamu sangat madefaker `)
}

say('niko')


//METHOD FUNCTION, INNER FUNCTION, FUNCTION DIDALAM FUNCTION, SEKALIAN TENTANG SCOPE

function outerF(nama){
    //FUNCTION OUTERF BESERTA PARAMETER MERUPAKAN GLOBAL SCOPE
    //PARAMETER nama BISA DIAKSES OLEH FUNCTION INNERF KARENA nama MERUPAKAN GLOBAL SCOPE
    //TIDAK BISA MENGAKSES PARAMETER INNERF KARENA INNERF LOCAL SCOPE
    console.info(`halo ${nama} ini adalah function outer`);
    
    function innerF(name){
        //LOCAL SCOPE INNERF
        //BISA MENGAKSES PARAMETER DAN FUNCTION OUTERF KARENA MERUPAKAN GLOBAL SCOPE
        console.info(`halo ${name} ini adalah function inner`);
    }
    innerF('alif');
    
}

outerF('niko');

//global scope
let counter = 4;

//global scope
function glob1(){
    //local scope glob1
    counter++;
}

//global scope
function glob2(){
    //local scope glob2
    counter--
}

glob1()
console.log(counter)

glob2()
console.log(counter)

//global scope
let counter = 1;

//global scope
function glob1(){
    //local scope glob1
    let angka = counter++;
    
    //global scope
    function glob2(tambah){
        //local scope glob2
        // const hasil = (`${counter} + ${tambah}`)
        return angka + tambah;
        
    }
    glob2(9)
}

glob1();
console.log(counter)




//  RECURSIVE FUNCTION / FUNCTION MEMANGGIL FUNCTION DIRINYA SENDIRI

//FACTORIAL MENGGUNAKAN LOOPING
function factorial(value){
    let result = 1;
    for (let i = 1; i <= value; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(9))


//FACTORIAL MENGGUNAKAN RECURSIVE
function recursive(value){
    if (value === 1){
        return 1;
    }else {
        return value * recursive(value - 1);
    }
}

console.info(recursive(9));

function pangkat(nilai){
    if(nilai === 1){
        return 1;
    }else{
        return nilai + pangkat(nilai - 1)
    }
}


console.info(pangkat(7))


//FUNCTION GENERATOR
function* gabungNama(){
    yield 'alif';
    yield 'adalah';
    yield 'THOWAF';
}

const names = gabungNama();
for (const name of names) {
    console.log(name);
}


function* buatGenap(value){
    for (let i = 1; i <= value; i++) {
        if (i % 2 === 0) {
            yield i;
        }    
    }
}

const genap = buatGenap(100);
for (const angka of genap) {
    console.log(angka);
}


//ARROW FUNCTION
const arrow = (nama)=>{
    console.log(`Halo ${nama}`)
}

arrow('alif')


const arrow2 = nama => console.log(`Halo ${nama}`)

arrow2('alif')

// const arrow3 = (angka1, angka2) => {
//     return angka1 + angka2;
// }
const arrow3 = (angka1, angka2) => angka1 + angka2;

console.info(arrow3(8, 9))


//ARROW FUNCTION DI PARAMETER FUNCTION LAIN

function giveMeName(fungsi){
    fungsi('niko');
}

giveMeName(name => console.info(`Hallo ${name}`));
// giveMeName(value = name => console.info(`Hallo ${name}`));
// giveMeName('alif');

//CLOSURES
function nama(val){
    
    const lastName = 'thowaf';

    function add(params) {
        console.info(lastName);
        return val + params;
    }

    return add;
}
const tambah = nama(2);//2 MERUPAKAN VAL
console.log(tambah(10))//10 MERUPAKAN PARAMS


//FUNCTION DIDALAM OBJECT, OBJECT METHOD


const sayHello = function (nama) {
    alert(`Haloo ${nama}`);
};

const namaLengkap = {
    nama: 'alif',
    sayHello: sayHello

}

const namaLengkap = {
    nama: 'alif',
    sayHello: function (nama) {
        alert(`Haloo ${nama}`);
    }   
}

namaLengkap.sayHello('budi')



//KATA KUNCI THIS
function mhs(nama, jurusan, kelas) {
    this.nama = nama,
    this.jurusan = jurusan,
    this.kelas = kelas

    console.log(`Halo nama saya ${nama} jurusan ${jurusan} kelas ${kelas}`)
}

mhs('alif', 'informatika', '20')


//ARROW FUNCTION DI OBJECT
// const namaLengkap = {
//     nama: 'alif',
//     sayHello: nama => {
//         alert(`Haloo ${nama}`);
//     }   
// }
const namaLengkap = {
    nama: 'alif',
    sayHello: nama => alert(`Haloo ${nama}`)
}

namaLengkap.sayHello('budi')




//GETTER DAN SETTER

const alamat = {
    jalan:'Jalan Imam Sujono',
    RT: 'RT:01',
    RW: 'RW:04',
    Kelurahan: 'Mulyorejo,',
    Kecamatan: 'Sukun,',
    Kota: 'Malang,',
    Provinsi: 'Jawa Timur',
    get alamatLengkap(){
        return `${this.jalan} ${this.RT} ${this.RW} ${this.Kelurahan} ${this.Kecamatan} ${this.Kota} ${this.Provinsi}`
    },

    get rukun(){
        return `${this.RT} ${this.RW}`
    },

    set rukun (value){
        const array = value.split(' ');
        this.RT = array[0];
        this.RW = array[1];
    }
}

alamat.rukun = 'RT:2 RT:06'
console.log(alamat.alamatLengkap)




//DESTRUCTURING ARRAY DAN DESTRUCTURING OBJECT

//-------------------------ARRAY-------------------------------
const array = ['alif', 'thowaf', 'lahir', 'di', 'malang', 'jawa timur', 59709, 095698, 5987, 95687, 569085]

const [firstName, lastName, , , kota, provinsi,...lainya] = array;

console.table(firstName)
console.table(lastName)
console.table(kota)
console.table(provinsi)
console.table(lainya)


//-------------------------OBJECT-------------------------------


const object = {
    jalan:'Jalan Imam Sujono',
    RT: 'RT:01',
    RW: 'RW:04',
    Kelurahan: 'Mulyorejo,',
    Kecamatan: 'Sukun,',
    Kota: 'Malang,',
    Provinsi: 'Jawa Timur',
}

const {jalan, RT, RW, Kelurahan,...lainnya} = object;

console.table(jalan);
console.table(RT);
console.table(RW);
console.table(Kelurahan);
console.table(lainnya);

//-------------------------NESTED OBJECT-------------------------------

const nestObject = {
    jalans:'Jalan Imam Sujono',
    RT1: 'RT:01',
    RW2: 'RW:04',
    alamatLengkap: {
        Kelurahans: 'Mulyorejo,',
        Kecamatans: 'Sukun,',
        Kotas: 'Malang,',
        Provinsis: 'Jawa Timur',
    },
    niko: 'hugauhgs',
    alif: 'oijqfioj'
}

const {jalans, RT1, RW2, alamatLengkap:{Kelurahans, Kecamatans, Kotas, Provinsis},...lainnyas} = nestObject;

console.table(jalans);
console.table(RT1);
console.table(RW2);
console.table(Kelurahans);
console.table(Kecamatans);
console.table(Kotas);
console.table(Provinsis);
console.table(lainnyas);

//-------------------------FUNCTION PARAMETER OBJECT-------------------------------

function displayPerson({first, mid, last}){
    console.info(first)
    console.info(mid)
    console.info(last)
}

const person = {
    first: 'alif',
    mid: 'thowaf',
    last: 'keren'
}

displayPerson(person)

//-------------------------FUNCTION PARAMETER ARRAY-------------------------------

function gabung(arr) {
    return arr[0] + arr[1];
}

console.log(gabung([2, 3]));


function gabung([arr1, arr2]) {
    return arr1 + arr2;
}

console.log(gabung([2, 3]));

//-------------------------DEFAULT VALUE ARRAY DAN OBJECT-------------------------------



const array = ['eko', 'naufal'];
const[first, mid, last = 'sPD'] = array;


console.log(first)
console.log(mid)
console.log(last)


const object = {
    nama: 'alif',
    kelas: 10,
}
const {nama, kelas, alamat = 'siswa tidak mengisi alamat'} = object

console.log(nama)
console.log(kelas)
console.log(alamat)

//-------------------------NAMA OPTIONAL-------------------------------

const objects = {
    namas: 'alif',
    kelass: 10,
}
const { namas: names ,
        kelass: clases ,
        alamats:adrress = 'siswa tidak mengisi alamat'} = objects

console.log(names)
console.log(clases)
console.log(adrress)




































