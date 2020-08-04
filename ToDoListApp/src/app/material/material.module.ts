import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';



const Material = [MatButtonModule, MatToolbarModule, MatInputModule, MatListModule];

@NgModule({
  imports: [CommonModule, Material],
  exports: [Material],
})
export class MaterialModule {}
