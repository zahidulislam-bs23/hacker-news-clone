import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ShellComponent } from './components/shell/shell.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, ShellComponent],
  imports: [CommonModule, RouterModule],
})
export class ShellModule {}
