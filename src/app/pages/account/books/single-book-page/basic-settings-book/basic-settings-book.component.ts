import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor() {}

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