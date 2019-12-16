import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { DatasetUploadComponent } from './components/dataset-upload/dataset-upload.component';
import { DatasetListComponent } from './components/dataset-list/dataset-list.component';
import { ProjectComponent } from './pages/project/project.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './app.component';

import { FilterPipe} from './pipes/filter.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    DatasetUploadComponent,
    DatasetListComponent,
    ProjectComponent, 
    FooterComponent,
    HeaderComponent,
    AppComponent,
    FilterPipe
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
