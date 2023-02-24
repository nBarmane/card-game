import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hand } from '../utils/models';

@Injectable({
  providedIn: 'root'
})
export class CardGameService {

  constructor(private http: HttpClient) { }

  getHand(numberOfCards: number): Observable<Hand> {
    return this.http.get<Hand>(`http://localhost:8080/card-game/api/get-hand?numberOfCards=${numberOfCards}`);
  }
}
