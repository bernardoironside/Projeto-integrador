import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotoesComponent } from './botoes/botoes.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BotoesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projetointegrador';
}
