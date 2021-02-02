import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MaterialModule } from 'src/shared/modules/material.module';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      imports: [ MaterialModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.data = {
      name: 'Repo Github',
      forks: 10,
      created_at: new Date(),
      language: 'Javascript',
      html_url: 'https://github.com/teste'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Render card with repo name', () => {
    let name = fixture.debugElement.query(By.css('.card-title p')).nativeElement;
    expect(name.innerHTML).toContain('Repo Github');
  });
  
  xit('click anchor link', () => {
    let anchor = fixture.debugElement.query(By.css('a')).nativeElement;
    let open = spyOn(window, 'open');
    anchor.click()
    
    expect(open).toHaveBeenCalledWith('https://github.com/teste');
  });
});
