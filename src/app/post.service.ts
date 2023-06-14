import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: any[] = [
    { id: 1, 
      title: 'Nulla vitae arcu eget.', 
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas odio non velit sodales maximus.", 
      imageUrl: 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-1200x675.jpg' },
    { id: 2, 
      title: 'Sed nec suscipit neque.', 
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu justo ac nisl hendrerit aliquam sit amet sit amet enim. Maecenas at.", 
      imageUrl: 'https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/solar-orbiter-toma-imagenes-del-sol-como-nunca-antes/9437612-1-esl-MX/Solar-Orbiter-toma-imagenes-del-Sol-como-nunca-antes.jpg',
      tags: generateRandomTags(21) },
    { id: 3, title: 'Cras rutrum magna a.', descripcion: "Lorem ipsum dolor sit amet.", imageUrl: 'https://img.freepik.com/vector-premium/imagenes-predisenadas-dia-mundial-medio-ambiente-ilustracion-vectorial-ninos_491934-934.jpg' },
    { id: 4, title: 'Nulla vehicula ante sit.', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum.", imageUrl: 'https://www.lavanguardia.com/andro4all/hero/2023/04/6d8841b6-9d24-457a-95c5-0d3de1d7bf5f.png?width=768&aspect_ratio=16:9&format=nowebp' },
    { id: 5, 
      title: 'Integer iaculis lectus sit.', 
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper.", 
      imageUrl: 'https://wwwhatsnew.com/wp-content/uploads/2020/02/optimizadores.jpg',
      tags: generateRandomTags(4) },
    { id: 6, 
      title: 'Integer consectetur eu mi.', 
      descripcion: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.", 
      imageUrl: 'https://www.superprof.es/imagenes/anuncios/profesor-home-curso-intensivo-facebook-para-personas-mayores-obtenga-todo-necesita-saber.jpg',
      tags: generateRandomTags(5)
    },
    {
      id: 7,
      title: 'Pellentesque vitae laoreet metus.',
      descripcion: "Lorem ipsum dolor sit amet.",
      imageUrl: 'https://www.eluniversal.com.mx/resizer/fYnU1YHLfNbMpWO4-2q5OwfAs3M=/1100x666/filters:focal(289x238:299x248)/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/UGA2EI4JMZBPFB47RIQ2YYTSIY.jpg',
      tags: generateRandomTags(3)
    },



  ];

  getPosts(): any[] {
    return this.posts;
  }

  getPostById(id: number): any {
    return this.posts.find(post => post.id === id);
  }
}
function generateRandomTags(n_tags: number): string[] {
  const count = n_tags;
  const tags = ['Technology', 'Nature', 'Food', 'Travel', 'Fashion', 'Art', 'Sports', 'Music', 'Health', 'Books', 'Meme', 'Chill'];
  const randomTags = [];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * tags.length);
    randomTags.push(tags[randomIndex]);
  }

  return randomTags;
}

