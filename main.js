//Создать основной объект book. В этом объекте должны быть описаны дефолтные состовляющие каждой книги.
//Создать новые книги с их свойствами.
//Реализовать два варианта:
//a) Использовать метод в объекте book, который будет возвращать все данные о книге.
//b) Использовать функцию, которая будет возвращать все данные о книге.
//В каждом варианте (метод и функция) вывести данные о книге используя call, aplly, bind

function Book(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.datas = function(){
        console.log (this.name+', '+this.author+', '+this.year);
    }
}

var the_financier = new Book('The Financier', 'Dreiser', 1912);
var mockingbird = new Book ('To Kill a Mockingbird', 'Harper Lee', 1960);
var rebecca = new Book ('Rebecca', 'Daphne du Maurier', 1938);

the_financier.datas();
mockingbird.datas();
rebecca.datas();

function books() {
    alert (this.name+', '+this.author+', '+this.year);
}

books.call(the_financier);
books.apply(mockingbird);

function f() {
alert(this);
alert (this.name+', '+this.author+', '+this.year);
}
var g = f.bind(rebecca);
g(rebecca);

