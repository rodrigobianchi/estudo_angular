import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuario';
import { UsuarioService } from 'src/app/usuario.service';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./../usuario.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  constructor(private suarioService: UsuarioService) { }

  ngOnInit() {

  }

  public salvar() {
    this.suarioService.salvar(this.usuario).subscribe(
      response => {
        alert("salvou");
      },
      error => {
        alert("erro");
      }
    )
  }

}
