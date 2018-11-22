import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Select2OptionData } from 'ng2-select2';

declare var jQuery: any;

@Component({
  selector: 'basic-settings-book',
  templateUrl: './basic-settings-book.component.html',
  styleUrls: ['../../../account-tmp/account-tmp.component.scss']
})
export class BasicSettingsBookComponent {

  indexInit = {
    height: '250',
    plugins: 'code link image imagetools visualblocks visualchars advcode',
    language_url: 'assets/libs/tinymce/lang_es.js'
  }

  descInit = {
    height: '250',
    plugins: 'code link image imagetools visualblocks visualchars advcode',
    language_url: 'assets/libs/tinymce/lang_es.js'
  }

  keypointsInit = {
    height: '250',
    plugins: 'code link image imagetools visualblocks visualchars advcode',
    language_url: 'assets/libs/tinymce/lang_es.js'
  }

  //Input vars
  @Input() book: any = {};
  @Input() showEditor: any = {};

  selectOptions = [
    { value: "PUBLISHED", name: "Publicado" },
    { value: "DRAFT", name: "Borrador" },
    { value: "TRASH", name: "Papelera" }
  ]

  constructor() {}

  ngOnInit() {
    this.showEditor.index = true;
    this.showEditor.keyPoints = false;
    console.log(this.book)
  }

  ngAfterViewInit() {
    this.showEditor.description = true;
    this.showEditor.index = true;
    this.showEditor.keyPoints = false;
    console.log(this.showEditor)
    jQuery('.normal-select').formSelect();
  }

  //Load editor in basic settings Material tabs
  loadEditor(e: any) {
    switch (e.index) {
      case 0:
        this.showEditor.index = true;
        this.showEditor.keyPoints = false;
        break;

      case 1:
        this.showEditor.index = false;
        this.showEditor.keyPoints = true;
        break;

      default:
        break;
    }
  }
}