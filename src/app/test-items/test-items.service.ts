import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../shared/message.service';

@Injectable({
  providedIn: 'root'
})
export class TestItemsService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { };

}
