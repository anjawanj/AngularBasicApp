import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl:  './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    ngOnChanges(): void {
        this.starWidth = this.rating * 75 /5;
    }

    @Input() rating = 0 ;
    starWidth = 0;

}