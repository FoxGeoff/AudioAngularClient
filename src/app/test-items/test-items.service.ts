import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestItemsService {

  constructor(private http: HttpClient){};

  /*
  constructor(
    private http: HttpClient,
    private messageService: MessageService ) { }
  */
}
