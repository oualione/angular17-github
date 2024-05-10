import { Component } from '@angular/core';
import { MembersServiceService } from '../services/members-service.service';
import { User } from '../models/user';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent {

  users : User[] = []; 
  searchField : string = '';

  constructor (private memberService : MembersServiceService){

  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllMemebers()
  }

  getAllMemebers(){
    return this.memberService.listOfUsers().subscribe((res) => 
    {
      this.users = res;
      console.log(res);
    }
    
    
    )
  }


  SearchUserbyName() {
    if (this.searchField) {
      this.memberService.searchUser(this.searchField).subscribe((res) => this.users = res.items);
    } else {
      this.getAllMemebers();
    }
  }

}
