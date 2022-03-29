import { Component, OnInit } from "@angular/core";



@Component({
    selector: "app-header",
    templateUrl: "./header.component.html", 
    styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
    userName = ''
    
    ngOnInit(): void {
        const userName = localStorage.getItem('user')
        if(userName) {
            this.userName = JSON.parse(userName).name
        }
    }

    logout = () => {
        localStorage.removeItem('user')
        this.userName = ''
    }
}