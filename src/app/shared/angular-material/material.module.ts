import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  exports: [
    MatTabsModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatRippleModule,
    MatToolbarModule,
    MatDialogModule,
    LayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
