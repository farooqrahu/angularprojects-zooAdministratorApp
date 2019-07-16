import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'register',
  templateUrl:'./register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})

export class RegisterComponent implements OnInit {
  public title: String;
  public user: User;
  public successMessage: String;
  public errorMessage: String;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ){
    this.title = 'Register';
    this.user = new User('','','','','','ROLE_USER','');
  }

  ngOnInit(){
    console.log('register.component cargado !!')
 
  }
  onSubmit(){
    this._userService.register(this.user).subscribe(

        response => {
          if(response.user._id){
          this.successMessage = 'Te registraste con el usuario '+this.user.email;
          document.getElementsByName('name')[0].classList.remove('.ng-touched');
          setTimeout(() => this.successMessage = '', 3000);
          }else{
            this.errorMessage = 'Error en el registro';
            console.log(document.getElementsByName('name'));
            setTimeout(() => this.errorMessage = '', 3000);
          }
          this.user = new User('','','','','','ROLE_USER','');
        },
        error => {
          console.log(<any>error)
        }
    );
  }
}