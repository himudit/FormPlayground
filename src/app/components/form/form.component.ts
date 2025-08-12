import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  technologiesList = ['JS', 'Java', 'Angular', 'React', 'Vue'];
  semestors = [1, 2, 3, 4, 5, 6, 7, 8];
  selectedSemester: number | null = null;

  constructor(private fb: FormBuilder) { }

  formData = this.fb.group({
    first_name: ["", [Validators.required]],
    last_name: [""],
    email: ["", [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    age: [null],
    gender: [''],
    technology: this.fb.array([], Validators.required),
    semester: ['', Validators.required]
  })

  onCheckboxChange(e: Event) {
    const checkbox = e.target as HTMLInputElement;
    const selectedSkillsArray = this.formData.get('technology') as FormArray;

    if (checkbox.checked) {
      selectedSkillsArray.push(new FormControl(checkbox.value));
    } else {
      const index = selectedSkillsArray.controls.findIndex(x => x.value === checkbox.value);
      selectedSkillsArray.removeAt(index);
    }
  }

  onSubmit(): void {
    if (this.formData.invalid) {
      console.log("Form is invalid");
      return;
    }
    console.log(this.formData.value);
  }

}

