import { Component, OnInit } from '@angular/core';
import { IPost } from '../model/post';




@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  listaLocalstorage!: IPost[];


  constructor() { }

  ngOnInit() {
    this.resgatarPosts();
  }

  publicacoes(elemento: IPost) {
    const objeto = { _id: elemento._id, texto: elemento.texto, data: elemento.data, hora: elemento.hora };
    const objetosSalvosStr = localStorage.getItem('publicacao');
    let objetosSalvos: IPost[] = objetosSalvosStr ? JSON.parse(objetosSalvosStr) : [];
    objetosSalvos.unshift(objeto);
    localStorage.setItem('publicacao', JSON.stringify(objetosSalvos));
    this.resgatarPosts();
  }

  resgatarPosts() {
    this.listaLocalstorage = JSON.parse(localStorage.getItem('publicacao') as string);
  }

  deletarPostagem(id: string | any) {
    var r = confirm("tem certeza que deseja excluir o registro?");
    if (r == true) {
      const publicacaoJSON = localStorage.getItem("publicacao");
      let publicacaoArray = JSON.parse(publicacaoJSON as string);
      const indexParaExcluir = publicacaoArray.findIndex((item: any) => item._id === id);
      if (indexParaExcluir !== -1) {
        publicacaoArray.splice(indexParaExcluir, 1);
        const novoPublicacaoJSON = JSON.stringify(publicacaoArray);
        localStorage.setItem("publicacao", novoPublicacaoJSON);
        this.resgatarPosts();
      } else {
        console.log("Registro não encontrado.");
      }
    }
    else {
      console.log("você pressionou cancelar");
    }

  }




}
