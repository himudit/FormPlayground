import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
  firstName: string = ""
  lastName: string = ""
  gender: string = ''

  onSubmit() {
    console.log(this.firstName)
    console.log(this.lastName)
    console.log(this.gender)
  }
}
