import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';

fdescribe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  let input: HTMLElement
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    input = fixture.nativeElement.querySelector('input');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should emit click', () => {
    spyOn(component.setActive, 'emit')
    input.dispatchEvent(new Event('click'));
    expect(component.setActive.emit).toHaveBeenCalledOnceWith(input)
  })

  it('should be disabled', () => {
    component.disabled = true
    fixture.detectChanges();
    expect(input.hasAttribute('disabled')).toBeTrue()
  })
});
