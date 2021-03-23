import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor() { }
  items: MenuItem[] = [];
  ngOnInit() {
    this.items = [
      {
        label: '流水',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Bookmark',
                icon: 'pi pi-fw pi-bookmark'
              },
              {
                label: 'Video',
                icon: 'pi pi-fw pi-video'
              },

            ]
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash'
          },
          {
            separator: true
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link'
          }
        ]
      },

      {
        label: '用户',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: '新增',
            icon: 'pi pi-fw pi-user-plus',
            url: 'http://www.primefaces.org/primeng'
          },
          {
            label: '删除',
            icon: 'pi pi-fw pi-user-minus',
          },          {
            label: '修改',
            icon: 'pi pi-fw pi-user-edit',
          },
          {
            label: '查询',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print'
                  }
                ]
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List'
              }
            ]
          }
        ]
      },
      {
        label: '设置',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: '商品',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: '添加',
                icon: 'pi pi-fw pi-calendar-plus'
              },
              {
                label: '修改',
                icon: 'pi pi-fw pi-calendar-minus'
              },

            ]
          },
          {
            label: '项目',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: '添加',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          },
          {
            label: '会员等级',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          }
        ]
      },
      {
        label: '账单',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: '今日账单',
            icon: 'pi pi-fw pi-align-left'
          },
          {
            label: '本月账单',
            icon: 'pi pi-fw pi-align-right'
          },
          {
            label: '历来账单',
            icon: 'pi pi-fw pi-align-center'
          }
        ]
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
      }
    ];
  }
}
