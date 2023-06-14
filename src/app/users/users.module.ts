import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { UserService } from '../user.service';


@NgModule({
  declarations: [
    UserDetailsComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UserListComponent },
      { path: ':id', component: UserDetailsComponent }
    ])
  ],
  providers: [UserService]
})
export class UsersModule { }
