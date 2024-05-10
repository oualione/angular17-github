import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersListComponent } from './members-list/members-list.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MembersListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MembersListComponent
  ]
})
export class GithubMembersModule { }
