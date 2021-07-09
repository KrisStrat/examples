class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  fix() {
    this.state = this.state * 3 / 2;
    return this.state;
  }
  set state(value) {
    if (value < 0) {
      this._state = 0;
    }
    else if (value > 100) {
      this._state = 100;
    }
    else {
      this._state = value;
    }
  }
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "Magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount ) {
    super(name,releaseDate,pagesCount);
    this.author = author;
    this.type = "Book" ;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "Novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "Fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "Detective";
  }
}
//Task 2

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
    for (let i = 0; i < this.books.length ; i++) {
      let actualBook = this.books[i];
      let keys = Object.keys(actualBook);
      let values = Object.values(actualBook);
      if (values.indexOf(value) != -1){
        for (let k = 0; k < keys.length; k++) {
        if (keys[k] == type && values[k] == value) {
          return actualBook;
        }
        }
      }
      else {
        return null;
      }

     }
  }
  giveBookByName(bookName) {
     for (let a = 0; a < this.books.length ; a++) {
       let searchingBook = this.books[a] ;
       if (searchingBook.name === bookName) {
         this.books.splice(a,1);
         return searchingBook;
       }
     }
   }
}

//Task 3

class StudentLog {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
  getName() {
    return `${this.name} ${this.lastname}`;
  }
  addGrade(grade,subject) {
     this[subject] = [];
     let sub = this[subject];
     if (grade != 0 && grade <= 5) {
       this[subject] = sub.push(grade);
       let countOfMarks = sub.length;
       return countOfMarks ;
     }
     else {
       console.log("Введено неверное значение!попробуйте еще раз");
     }

  }
}
