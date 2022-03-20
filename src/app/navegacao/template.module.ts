import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {FooterComponent} from './footer/footer.component'
import {HeaderComponent} from './header/header.component'
import {TemplateComponent} from './template.component'
import {RouterModule} from '@angular/router'
import { MainComponent } from "./main/main.component";


@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [TemplateComponent],
    declarations: [
        FooterComponent,
        HeaderComponent,
        MainComponent, 
        TemplateComponent
    ],
    providers: [],
})
export class TemplateModule { }