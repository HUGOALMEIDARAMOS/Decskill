import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPost } from '../model/post';

@Component({
  selector: 'app-Form_post',
  templateUrl: './Form_post.component.html',
  styleUrls: ['./Form_post.component.css']
})
export class Form_postComponent implements OnInit {

  @Output() publicacoes = new EventEmitter<IPost>;

  form!: FormGroup;
  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      _id: [0],
      texto: ['', [Validators.required, Validators.minLength(5)]],
      data: [''],
      hora: ['']
    });
  }

  ngOnInit() {

  }

  inputText: string = '';
  characterCount: number = 130;


  updateCharacterCount() {
    return this.characterCount - this.form.value.texto.length;
  }

  salvar() {
    this.form.get('data')?.setValue(this.obterDataHora().data)
    this.form.get('hora')?.setValue(this.obterDataHora().horaAtual)
    this.form.get('_id')?.setValue(this.gerarIdDinamico(10))
    console.log(this.form.value);
    this.publicacoes.emit(this.form.value);
    this.form.get('texto')?.setValue('')
  }

  gerarIdDinamico(tamanho: number): string {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomId = '';

    for (let i = 0; i < tamanho; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        randomId += caracteres[randomIndex];
    }
    return randomId;
}


  obterDataHora() {
    const currentDate = new Date();
    const ano = currentDate.getFullYear();
    const mes = currentDate.getMonth() + 1;
    const dia = currentDate.getDate();
    const hora = currentDate.getHours();
    const minuto = currentDate.getMinutes();
    const segundo = currentDate.getSeconds();
    const data = `${ano}-${mes}-${dia}`
    const horaAtual = `${hora}:${minuto}:${segundo}`
    return { data, horaAtual }
  }

}
