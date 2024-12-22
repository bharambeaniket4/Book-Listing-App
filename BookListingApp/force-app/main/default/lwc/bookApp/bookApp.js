import { LightningElement } from 'lwc';
const BOOK_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

export default class BookApp extends LightningElement {


    searchKey = 'Man';

    connectedCallback(){
        this.fetchBookData();
    }

    fetchBookData(){
        fetch( this.BOOK_URL + this.searchKey)
        .then( response => response.json())
        .then(data =>console.log(data))
        .catch( error => console.error('Error :'+ error))
    }


}