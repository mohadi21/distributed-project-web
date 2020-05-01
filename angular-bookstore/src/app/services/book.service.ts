import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../common/book';
import { map } from 'rxjs/operators';
import { BookCategory } from '../common/book-category.component';

@Injectable({
  providedIn: 'root'
})



export class BookService {

  private baseUrl = "http://localhost:8086/api/v1/books" ;
  private categoryUrl = "http://localhost:8086/api/v1/book-category";
  constructor(private httpClient : HttpClient) { }

    getBooks(theCategoryId : number) : Observable<Book[]>{
      const searchUrl = `${this.baseUrl}/search/categoryid?id=${theCategoryId}`;
      return this.getBooksList(searchUrl);
    }

  private getBooksList(searchUrl: string): Observable<Book[]> {
    return this.httpClient.get<GetResponseBooks>(searchUrl).pipe(map(response => response._embedded.books));
  }

    getBookCategories() :Observable<BookCategory[]> {
      return this.httpClient.get<GetResponseBooksCategory>(this.categoryUrl).pipe(
        map(response => response._embedded.bookCateogry)); 
 
    }


    searchBooks(keyword : string) : Observable<Book[]>{
      const searchUrl = `${this.baseUrl}/search/searchbykeyword?name=${keyword}`;
      return this.getBooksList(searchUrl);
    }

    get(bookId : number) :  Observable<Book> {
      const bookDetailUrl = `${this.baseUrl}/${bookId}`;
      return this.httpClient.get<Book>(bookDetailUrl);
    }

  }

  interface GetResponseBooks{
    _embedded : {
      books : Book[] ;
    }
  }
interface GetResponseBooksCategory{
  _embedded : {
    bookCateogry : BookCategory[] ;
  }
}