// tslint:disable:no-any
import { Component } from '@angular/core';

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
      isLeaf: true
    }]
  }, {
    value: 'ningbo',
    label: 'Ningbo',
    isLeaf: true
  }]
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
      isLeaf: true
    }]
  }]
}];

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-modal [(nzVisible)]="isVisible" nzTitle="Please select" (nzOnCancel)="handleCancel($event)" (nzOnOk)="handleOk($event)">
      <nz-cascader
        [nzOptions]="nzOptions"
        [(ngModel)]="values"
        (ngModelChange)="onChanges($event)">
      </nz-cascader>
    </nz-modal>

    <button nz-button (click)="open()">Open Dialog</button>
    `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    .ant-cascader-picker {
      width: 300px;
    }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  /** init data */
  public nzOptions = options;

  /** ngModel value */
  public values: any[] = null;

  public isVisible = false;

  public onChanges(values: any): void {
    console.log(values, this.values);
  }

  public open(): void {
    this.isVisible = true;
  }

  handleOk($event: MouseEvent): void {
    console.log('Button ok clicked!', this.values, $event);
    this.isVisible = false;
  }

  handleCancel($event: MouseEvent): void {
    console.log('Button cancel clicked!', $event);
    this.isVisible = false;
  }

}
