import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { UsuarioCadastroComponent } from './cadastro/usuario-cadastro.component';
import { UsuarioRoutingModule } from './usuario.routing.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [UsuarioComponent, UsuarioCadastroComponent],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    UsuarioRoutingModule,
    FormsModule,
    ConfirmDialogModule
  ]
})
export class UsuarioModule { }
