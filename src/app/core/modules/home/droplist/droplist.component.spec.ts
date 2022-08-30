import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { AvailableItems } from 'src/app/core/enums/availableItem';
import { FormElementsModule } from '../form-elements/form-elements.module';

import { DroplistComponent } from './droplist.component';

fdescribe('DroplistComponent', () => {
  let component: DroplistComponent;
  let fixture: ComponentFixture<DroplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DroplistComponent],
      imports: [
        CommonModule,
        DragDropModule,
        FormElementsModule,
        MatIconModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DroplistComponent);
    component = fixture.componentInstance;
  });

  it('should emit drop when cdkDropListDropped', () => {
    spyOn(component.SetDropped, 'emit')
    const event = new Event('cdkDropListDropped')
    const droplist: HTMLElement = fixture.nativeElement.querySelector('div')
    droplist.dispatchEvent(event)
    expect(component.SetDropped.emit).toHaveBeenCalled()
  })

  it('should render draghandle if property was added', () => {
    component.dragHandle = true
    component.dropListData = [
      { type: AvailableItems.select, data: '' },
    ]
    fixture.detectChanges()
    const icon = fixture.nativeElement.querySelector('mat-icon')
    expect(icon).toBeTruthy()
  })

  it('should emit setActive when child emits', () => {
    component.dropListData = [
      { type: AvailableItems.select, data: '' },
    ]
    fixture.detectChanges()
    const element: HTMLElement = fixture.nativeElement.querySelector('app-select')
    // const element = container.firstChild
    spyOn(component.SetActive, 'emit')
    element.dispatchEvent(new Event('setActive'))
    expect(component.SetActive.emit).toHaveBeenCalledTimes(1)
  })

  it('should emit true when drag started and false when drag ended', () => {
    component.dropListData = [
      { type: AvailableItems.select, data: '' },
    ]
    fixture.detectChanges();
    const form: HTMLElement = fixture.nativeElement.querySelector('form')
    const formelements = form.querySelectorAll('div')
    spyOn(component.dragEvent, 'emit')
    formelements[0].dispatchEvent(new Event('cdkDragStarted'))
    expect(component.dragEvent.emit).toHaveBeenCalledOnceWith(true)
    formelements[0].dispatchEvent(new Event('cdkDragEnded'))
    expect(component.dragEvent.emit).toHaveBeenCalledWith(false)
  })

  it('should render all elements', () => {
    component.dropListData = [
      { type: AvailableItems.select, data: '' },
      { type: AvailableItems.button, data: '' }
    ]
    fixture.detectChanges();
    const form: HTMLElement = fixture.nativeElement.querySelector('form')
    const formelements = form.querySelectorAll('div')
    expect(formelements.length).toBe(2)
  })

  it('should return callback with return value of true', () => {
    expect(component.noReturnPredicate()).toEqual(true)
  })

  it('should emit form after view init', () => {
    const form = document.createElement('form')
    component.form = new ElementRef(form)
    spyOn(component.mainformInit, 'emit')
    component.ngAfterViewInit()
    expect(component.mainformInit.emit).toHaveBeenCalledOnceWith(form)
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
