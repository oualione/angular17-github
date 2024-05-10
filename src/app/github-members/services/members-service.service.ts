import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../models/user';
import { UserSearch } from '../models/user-search';

@Injectable({
  providedIn: 'root'
})
export class MembersServiceService {

url = "https://api.github.com/users";

  constructor(private http:HttpClient) { 

  }

  listOfUsers() : Observable<User[]>{
    return this.http.get<User[]>(this.url).pipe(map((users) => users.map((user)=> {
      return {
        login: user.login,
        avatar_url: user.avatar_url
      }
    })));
  }

  deleteUser(){
    return this.http.delete(this.url);
  }

  searchUser(searchTerm : string) : Observable<UserSearch>{
    return this.http.get<UserSearch>(`https://api.github.com/search/users?q=${searchTerm}`);
  }
}
