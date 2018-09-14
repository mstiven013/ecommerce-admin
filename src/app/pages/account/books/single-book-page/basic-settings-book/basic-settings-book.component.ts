import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Select2OptionData } from 'ng2-select2';

@Component({
  selector: 'basic-settings-book',
  templateUrl: './basic-settings-book.component.html',
  styleUrls: ['../../../account-tmp/account-tmp.component.scss']
})
export class BasicSettingsBookComponent {

  //Editor options
  showEditor = { description: true, index: false, keyPoints: false };
  editorInit = { 
    plugins: 'code link image imagetools visualblocks visualchars advcode',
    language_url: 'assets/libs/tinymce/lang_es.js'
  }

  charactsData: Array<Select2OptionData> = [
    {
      id: 'basic1',
      text: 'Basic 1'
    },
    {
      id: 'basic2',
      disabled: true,
      text: 'Basic 2'
    },
    {
      id: 'basic3',
      text: 'Basic 3'
    },
    {
      id: 'basic4',
      text: 'Basic 4'
    }
  ];

  constructor() {}

  ngOnInit() {
    this.showEditor.description = true;
  }

  ngAfterViewInit() {
    this.showEditor.description = true;
  }

  //Load editor in basic settings Material tabs
  loadEditor(e: any) {
    switch (e.index) {
      case 0:
        this.showEditor.description = true;
        this.showEditor.index = false;
        this.showEditor.keyPoints = false;
        break;

      case 1:
        this.showEditor.description = false;
        this.showEditor.index = true;
        this.showEditor.keyPoints = false;
        break;

      case 2:
        this.showEditor.description = false;
        this.showEditor.index = false;
        this.showEditor.keyPoints = true;
        break;

      default:
        break;
    }
  }
}