import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { UserEntityService } from 'src/app/services/user/user.entity.service';
import  sweetalert from 'sweetalert2'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  loading$:Observable<boolean>=of(false)
  users$:Observable<any[]>=of([])
  TableColumns = [
    {name: 'sn', label: 'S/No', type: 'text' },
    {name: 'fullName', label: 'Full Name', type: 'text' },
    {name: 'username', label: 'UserName ', type: 'text' },
    {name: 'role', label: 'Role', type: 'text'},
    {name: 'action', label: 'Action', type: 'text'},
  ];
  constructor(
    private userEntityService:UserEntityService,
    private toastService:ToastrService,
  ) {
    this.loading$=this.userEntityService.loading$;
    this.users$=this.userEntityService.entities$;
   }

  ngOnInit(): void {
    this.userEntityService.getAll()
  }

  onDelete(data:any){
    let id= data.id;
    sweetalert
    .fire({
      html: `Are you sure you want to Delete</b>`,
      title: 'Delete User',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Cancel',
      allowOutsideClick: false,
      showClass: {
        popup: '',
        icon: 'warning',
      },
      hideClass: {
        popup: '',
      },
    })
    .then((result:any) => {
      if(result.isConfirmed){
        this.userEntityService.delete(id).subscribe(res=>{
         // console.log('result ---->',res)
          if(res){
            this.userEntityService.clearCache();
            this.userEntityService.getAll();
          }
        })
  }
})
}

}
