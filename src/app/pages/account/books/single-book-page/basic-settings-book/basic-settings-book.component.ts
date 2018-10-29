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

  //Editor options
  showEditor = { description: true, index: true, keyPoints: false };
  editorInit = {
    height: '250',
    plugins: 'code link image imagetools visualblocks visualchars advcode',
    language_url: 'assets/libs/tinymce/lang_es.js'
  }

  //Input vars
  @Input() book: any[];

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
    this.showEditor.index = true;
  }

  ngAfterViewInit() {
    this.showEditor.index = true;
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