//Задача №1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }

    fix() {
        this.state = Math.round(this._state * 1.5);
    }

    set state(number) {
        if (number === 0) {
            this._state = 0
        } else  if (number > 100) {
            this._state = 100;
        } else {
            this._state = number;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = 'magazine';       
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);  
        this.author = author;
        this.type = 'book';       
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'novel'; 
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'fantastic'; 
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'detective'; 
    }
}

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15


// Задача №2
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let notExist = true;

        for (let i = 0; i < this.books.length; i++) {
            console.log(this.books[i]);
            console.log(this.books[i][type]);
            if (this.books[i][type] === value) {                
                return this.books[i];
            } 
        }   
        
        if (notExist) {
            return null;
        }
    }

    giveBookByName(bookName) {
        let notExist = true;

        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                let giveBook = this.books[i];
                this.books.splice(i, 1);
                return giveBook;
            } 
        }   
        
        if (notExist) {
            return null;
        }
    }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
library.addBook(new NovelBook("Руперт Уэллс", "Прыжок в пустоту", 1919, 205));

console.log(library.findBookBy('releaseDate', 1919));

console.log("Количество книг до выдачи: " + library.books.length);
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); 

const machineTime = new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138);

machineTime.state = 85;
machineTime.fix();
library.addBook(machineTime);


