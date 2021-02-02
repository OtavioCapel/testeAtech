import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  @Input() user;
  @Output() changeUser = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  exitUser() {
    this.changeUser.emit(null)
  }

}
