import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/@core/services/loading.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  loader: boolean = true;
  constructor(public loadingService: LoadingService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initLoader();
  }

  initLoader() {
    this.loadingService.loading$.subscribe((resp) => {
      this.loader = resp;
    });
  }
}
