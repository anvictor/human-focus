import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {ApiRequestItem} from "../api-request-item";
import {TodoElement} from "../todo-element";
import {HttpService} from "../api-service";

let elementData: TodoElement[] = [
  {OrgLog: 'https://e-label.org.uk/Images/logo-square.png' ,TaskTitle: 'The task has been postponed', filter: '', TaskStatus: 'To Do', DueDate: 'Thu 2 May 2019 02:20 PM', SubmittedDate: ''},
  {OrgLog: 'https://e-label.org.uk/Images/logo-square.png', TaskTitle: 'e-Folder (utcV)', filter: '', TaskStatus: 'To Do', DueDate: 'Wed 8 May 2019 04:09 AM', SubmittedDate: ''},

];

/**
 * @title Table with filtering
 */
@Component({
  selector: 'dataTable',
  styleUrls: ['table.css'],
  templateUrl: 'table.html',
  providers: [HttpService]
})
export class Table implements OnInit {
  displayedColumns: string[] = ['action', 'imgLogo', 'title', 'status', 'dueDate', 'submissionDate'];
  dataSource = new MatTableDataSource(elementData);
  apiRequestItem = {
    itemGroup: "e-Label",
    taskStatus: "To Do",
    dbForUserInfo: "HF_CBTbyB_V2SQL",
    itemType: "",
    TabSelected: "MyToDo",
    requestStatus: "Myself",
    userID: 258628,
    organID: 8031,
    archive: false
  };
  items = [];
  receivedItem: ApiRequestItem;
  done: boolean = false;
  constructor(private httpService: HttpService){}

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (filterValue.trim()){
      for (let i = 0; i < this.dataSource.filteredData.length; i++) {
        let str = this.dataSource.filteredData[i].TaskTitle.toLowerCase();
        let indices = [];
        let idx = str.indexOf(filterValue.trim().toLowerCase());
        while (idx != -1) {
          indices.push(idx);
          idx = str.indexOf(filterValue.trim().toLowerCase(), idx + 1);
        }
        this.dataSource.filteredData[i].filter = indices.map((e) => e + 1).join(', ');
      }
    } else {
      for (let i = 0; i < this.dataSource.data.length; i++) {
        this.dataSource.data[i].filter = '';
      }
    }
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.httpService.postData(this.apiRequestItem)
      .subscribe(
        (data: ApiRequestItem) => {
          this.receivedItem=data;
          this.done=true;
          for (let i = 0;i<this.receivedItem.TaskList.length; i++){
            let item: TodoElement;
            item = {
              DueDate: this.receivedItem.TaskList[i].DueDate,
              TaskTitle: this.receivedItem.TaskList[i].TaskTitle,
              TaskStatus: this.receivedItem.TaskList[i].TaskStatus,
              Submitted_Date: this.receivedItem.TaskList[i].Submitted_Date,
              OrgLog: this.receivedItem.TaskList[i].OrgLog
            };

            this.items.push(item);
          }
          console.log(this.items);
        },
        error => console.log(error)
      );
    // console.log('http', this.items);
    // this.dataSource = this.items;
/*
*  I have braked developing the task after the next message:
*  OPTIONS
*  https://e-label.org.uk/CBT_API/api/eLabel/GetTaskList
*  503 (Service Unavailable)
*  Timing:
*  00:32:51
*  03:02:52
*  02:39:07
*  01:18:49
*  Total Timing:
*  07:32:39
* */
  }
}
