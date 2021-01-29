import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [ConfirmationService]
})
export class UsuarioComponent implements OnInit {

  public usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.listarUsuario()
  }

  public listarUsuario() {
    this.usuarioService.listarUsuario().subscribe(
      response =>
        this.usuarios = response
      , error => {
        alert("erro ao carregar");
      }
    );
  }

  public deletar(id: string) {
    this.confirmationService.confirm({
      message: 'vai excluir mesmo?',
      accept: () => {
        this.usuarioService.deletar(id).subscribe(
          success => {
            this.listarUsuario()
          }
        )
      }
    });
  }
}
