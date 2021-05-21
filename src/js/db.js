'use strict';

class DB {
  constructor() {
    // Record all books ISBN number
    this.isbndata = new Set();
    // Record the ISBN number of books sold
    this.isbnsolddata = new Set();
    // Count how many coupons are used
    this.isbncouponcnt = 0;
  }

  sell(_input){ // If successful in selling, return true
    if(this.isbndata.has(_input)){
      if(this.isbnsolddata.has(_input)){ // Error of `It's already sold`
        return false;
      }else{ // Success!
        this.isbnsolddata.add(_input);
        return true;
      }
    }else{ // Error of `not found in isbndata`
      return false;
    }
  }

  addCoupon(_input){ // add couponcnt
    this.isbncouponcnt += _input;
  }

  dump() { // Dump DB datas
    console.log(this.isbndata);
    console.log(this.isbnsolddata);
    console.log(this.isbncouponcnt);
  }
}

var db = new DB();