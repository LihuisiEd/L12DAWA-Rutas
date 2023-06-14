import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: any[] = [
    { id: 1, name: 'Pablo Escobar', email: 'pablo@example.com', phone: '123456789', imageUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' },
    { id: 2, name: 'Maria Becerra', email: 'maria@example.com', phone: '987654321', imageUrl: 'https://viapais.com.ar/resizer/j5KLNkmzbBaNz7hrn4rIWHE5sfA=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/Y4VBW2KW65CERAXB6KCMFFFRHE.jpg' },
    { id: 3, name: 'Jorge Luna', email: 'jorge@example.com', phone: '987654321', imageUrl: 'https://marcoantonioregil.com/wp-content/uploads/2021/09/Yokoi-Kenji.jpeg' },
    
  ];

  getUsers(): any[] {
    return this.users;
  }

  getUserById(id: number): any {
    return this.users.find(post => post.id === id);
  }

}
