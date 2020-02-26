import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/core/services/demo.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  itemForm : FormGroup;

  constructor(private demoService: DemoService, private router: Router, formBuilder: FormBuilder) {
    this.itemForm = formBuilder.group({
      item: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  addItem() {
    this.demoService.addItem(this.itemForm.get('item').value);
    this.router.navigateByUrl('demo');
  }

}
