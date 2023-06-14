import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  user: any;

  constructor(private route: ActivatedRoute, private userServicio: UserService) {}

  ngOnInit() {
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    this.user = this.userServicio.getUserById(userId);
  }
}
