import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/core/AppState';
import { UserEntityService } from 'src/app/services/user/user.entity.service';
import { UserService } from 'src/app/services/user/user.service';
import { getAllUser } from '../../state/user.action';
import { getAllSelector } from '../../state/user.selector';
import { User } from '../../../../model/user'

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  users$:Observable<any[]>=of([]);
  loading$:Observable<boolean>=of(false);
  TableColumns = [
    {name: 'sn', label: 'S/No', type: 'text' },
    {name: 'fullName', label: 'Full Name', type: 'text' },
    {name: 'username', label: 'UserName ', type: 'text' },
    {name: 'role', label: 'Role', type: 'text'},
  ];
  load:Observable<boolean>=of(true)
  data$:Observable<any[]>=of([])
  constructor(
    private userEntityService:UserEntityService,
    private userService:UserService,
    private userStore:Store<AppState>,
  ) {
    this.loading$=this.userEntityService.loading$;
    this.users$=this.userEntityService.entities$;
   }

  ngOnInit(): void {
    this.userEntityService.getAll().subscribe((res:any)=>{
      this.data$=res
    })
    // this.userStore.dispatch(getAllUser())
    // this.userStore.select(getAllSelector).subscribe(res=>{
    //   console.log('res1')
    // })
  }

}
