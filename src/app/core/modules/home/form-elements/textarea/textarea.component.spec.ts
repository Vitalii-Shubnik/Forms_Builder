import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaComponent } from './textarea.component';

fdescribe('TextboxComponent', () => {
  let component: TextareaComponent;
  let fixture: ComponentFixture<TextareaComponent>;
  let textarea: HTMLElement
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextareaComponent);
    component = fixture.componentInstance;
    textarea = fixture.nativeElement.querySelector('textarea');

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit click', () => {
    spyOn(component.setActive, 'emit')
    textarea.dispatchEvent(new Event('click'));
    expect(component.setActive.emit).toHaveBeenCalledOnceWith(textarea)
  })

  it('should be disabled', () => {
    component.disabled = true
    fixture.detectChanges();
    expect(textarea.hasAttribute('disabled')).toBeTrue()
  })
});
