import { ChangeDetectionStrategy, Component, EventEmitter, Input,  OnInit, Output } from '@angular/core';
import { IPost } from '../model/post';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListaComponent implements OnInit {

  @Input() lista: IPost[] = [];
  @Output() deletarPublicacao = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

  }

  delete(_id: string | any){
    this.deletarPublicacao.emit(_id);
  }

  formatacaoTimeDate(data: string, hora: string): string {
    const salvarDataHora = new Date(`${data} ${hora}`);
    const dataAtual = new Date();
    const segundosDecorridos = Math.floor((dataAtual.getTime() - salvarDataHora.getTime()) / 1000);

    if (segundosDecorridos < 60) {
      return `. ${segundosDecorridos} s`;
    } else {
      return `. ${salvarDataHora.toLocaleDateString()} ${salvarDataHora.toLocaleTimeString()}`;
    }
  }


}
