import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Logger } from 'src/app/@core/services/logger.service';
import {
  AuthenticationService,
  LoginContext,
} from '../services/authentication.service';
import { SignupService } from '../services/signup.service';

const log = new Logger('Login');

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;
  signupForm: FormGroup;
  error: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private signupService: SignupService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
    this.createSignupForm();
  }

  createSignupForm() {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: true,
    });
  }

  authenticateUser(cred: LoginContext) {
    const login$ = this.authenticationService.login(cred);
    login$.subscribe(
      (credentials) => {
        log.debug(`${credentials.username} successfully logged in`);
        this.loginForm.reset();
        this.router.navigate(
          [this.route.snapshot.queryParams.redirect || '/'],
          { replaceUrl: true }
        );
      },
      (error) => {
        const { message } = error;
        log.debug(`Login error: ${message}`);
        this.error = message;
        this.loginForm.reset();
      }
    );
  }

  login() {
    this.authenticateUser(this.loginForm.value);
  }

  signUp() {
    this.signupService.signUp(this.signupForm.value).subscribe((resp) => {
      this.signupForm.reset();
      const cred: any = resp;
      cred.remember = false;
      this.authenticateUser(cred);
    });
  }
}
