import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  templateUrl: 'login-page.component.html',
  styleUrls: ['login-page.component.scss'],
})
export class LoginPageComponent {
  form = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    // private accountService: AccountService,
    // private alertService: AlertService
  ) {
  }

  ngOnInit() {
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    // this.loading = true;
    // this.accountService.login(this.f.username.value, this.f.password.value)
    //   .pipe(first())
    //   .subscribe({
    //     next: () => {
    //       // get return url from query parameters or default to home page
    //       const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    //       this.router.navigateByUrl(returnUrl);
    //     },
    //     error: error => {
    //       this.alertService.error(error);
    //       this.loading = false;
    //     }
    //   });
  }
}
