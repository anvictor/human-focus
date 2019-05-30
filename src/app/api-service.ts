import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiRequestItem} from './api-request-item';


@Injectable()
export class HttpService{

  constructor(private http: HttpClient){ }

  postData(item: ApiRequestItem){

    const body = {
      itemGroup: item.itemGroup,
      taskStatus: item.taskStatus,
      dbForUserInfo: item.dbForUserInfo,
      itemType: item.itemType,
      TabSelected: item.TabSelected,
      requestStatus: item.requestStatus,
      userID: item.userID,
      organID: item.organID,
      archive: item.archive,
    };
    return this.http.post('https://e-label.org.uk/CBT_API/api/eLabel/GetTaskList', body);
  }
}
