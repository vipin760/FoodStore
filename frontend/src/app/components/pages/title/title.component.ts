import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input()
  title!:string
 
  @Input()
  margin? = '1rem 0 1rem 0.2 rem';

  @Input()
  fontSize?='1.5rem'
  ngOnInit(): void {
    
  }


}
