import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/main/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
onCreate(){
  // const dialogConfig=new MatDialogConfig();
  // dialogConfig.disableClose=false;
  // dialogConfig.autoFocus=true;
  // dialogConfig.width="800";
this.dialog.open(LoginComponent)
}
}
