import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError} from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class ProductService{

    private productUri = 'api/products';

    constructor(private http:HttpClient){
        
    }

    public getProducts(): Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.productUri).pipe(
            tap(data=> console.log('All'+JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    public getProduct(id:number): Observable<IProduct>{
        const url = `${this.productUri}/${id}`;
        return this.http.get<IProduct>(url).pipe(
            tap(data=> console.log('All'+JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err:HttpErrorResponse){
        let errorMessage = 'An error occucred'+err.error.message;
        return throwError(errorMessage);    
    }

}