// tslint:disable:no-any
import { Component } from '@angular/core';

const provinces = [{
  value: 'zhejiang',
  label: 'Zhejiang'
}, {
  value: 'jiangsu',
  label: 'Jiangsu'
}];

const cities = {
  zhejiang: [{
    value: 'hangzhou',
    label: 'Hangzhou'
  }, {
    value: 'ningbo',
    label: 'Ningbo',
    isLeaf: true
  }],
  jiangsu: [{
    value: 'nanjing',
    label: 'Nanjing'
  }]
};

const scenicspots = {
  hangzhou: [{
    value: 'xihu',
    label: 'West Lake',
    isLeaf: true
  }],
  nanjing: [{
    value: 'zhonghuamen',
    label: 'Zhong Hua Men',
    isLeaf: true
  }]
};

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-cascader
      [(ngModel)]="values"
      [nzLoadData]="loadData"
      (ngModelChange)="onChanges($event)">
    </nz-cascader>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    .ant-cascader-picker {
      width: 300px;
    }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {

  /** ngModel value */
  public values: any[] = ['zhejiang', 'hangzhou', 'xihu'];

  public onChanges(values: any): void {
    console.log(values, this.values);
  }

  /** load data async execute by `nzLoadData` method */
  public loadData(node: any, index: number): PromiseLike<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (index < 0) { // if index less than 0 it is root node
          node.children = provinces;
        } else if (index === 0) {
          node.children = cities[node.value];
        } else {
          node.children = scenicspots[node.value];
        }
        resolve();
      }, 1000);
    });
  }

}
