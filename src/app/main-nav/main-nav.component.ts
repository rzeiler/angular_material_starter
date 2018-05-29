import { Component, Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
/* auth */
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
/* dialog  */
import { DOCUMENT } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
  providers: [AngularFireAuth]
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
    public afAuth: AngularFireAuth) { }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(credential => {
      // manage credentials
      console.log(credential);
    }).catch(error => {
      let dialogRef = this.dialog.open(InfoDialog, {
        width: '250px',
        data: { message: error.message }
      });
    });
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class InfoDialog {

  constructor(
    public dialogRef: MatDialogRef<InfoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onOkClick(): void {
    this.dialogRef.close();
  }

}
