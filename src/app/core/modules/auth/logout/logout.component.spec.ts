import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutComponent } from './logout.component';

fdescribe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoutComponent],
      imports: [CommonModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
  });

  it('should render depending on username', () => {
    const username = 'username'
    let span: HTMLElement = fixture.nativeElement.querySelector('span')
    expect(span).toBe(null)
    component.userName = username
    fixture.detectChanges();
    const newspan: HTMLElement = fixture.nativeElement.querySelector('span')
    expect(newspan?.textContent).toContain(username)
  })

  it('should emit logout', () => {
    spyOn(component.logout, 'emit')
    const button: HTMLElement = fixture.nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));

    expect(component.logout.emit).toHaveBeenCalledTimes(1);
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
