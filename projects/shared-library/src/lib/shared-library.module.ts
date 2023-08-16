import { NgModule } from '@angular/core';
import { SharedLibraryComponent } from './shared-library.component';
import { SharedLibraryService } from './shared-library.service';



@NgModule({
  declarations: [
    SharedLibraryComponent
  ],
  imports: [
  ],
  exports: [
    SharedLibraryComponent
  ],
  providers: [SharedLibraryService]
})
export class SharedLibraryModule { }
