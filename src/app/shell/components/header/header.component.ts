import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/modules/auth/services/authentication.service';
import {
  Credentials,
  CredentialsService,
} from 'src/app/modules/auth/services/credentials.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  credentials: Credentials;
  constructor(
    private credentialsService: CredentialsService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.credentials = this.credentialsService.credentials;
  }

  logOut() {
    this.authenticationService.logout().subscribe((resp) => {
      this.credentials = this.credentialsService.credentials;
    });
  }
}
