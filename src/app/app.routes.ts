import { Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ProfileComponent } from './profile/profile.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { SideBarComponent } from './side-bar/side-bar.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'side-bar', component: SideBarComponent },
];
