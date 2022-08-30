import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvailableItems } from 'src/app/core/enums/availableItem';

import { EditDialogComponent } from './edit-dialog.component';

fdescribe('EditDialogComponent', () => {
  let component: EditDialogComponent;
  let fixture: ComponentFixture<EditDialogComponent>;
  let dialofRef = jasmine.createSpyObj(MatDialogRef, ['close'])
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [EditDialogComponent],
      imports: [
        BrowserAnimationsModule,
        MatDialogModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        FormsModule
      ],
      providers: [
        {
          provide: MAT_DIALOG_DATA, useValue: {
            type: AvailableItems.select,
            data: ['option1']
          }
        },
        { provide: MatDialogRef, useValue: dialofRef }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EditDialogComponent);
    component = fixture.componentInstance;
  });

  it('should close dialog', () => {
    component.onNoClick()
    expect(dialofRef.close).toHaveBeenCalledOnceWith()
  })

  it('sould add value to array and set it to empy string', () => {
    component.temp = 'value1'
    component.temparr = []
    fixture.detectChanges()
    component.applyOptionForSelect()
    expect(component.temp).toBe('')
    expect(component.temparr).toEqual(['option1','value1'])
  })

  it('should not do any changes', () => {
    component.temp = ''
    component.temparr = ['value1']
    component.applyOptionForSelect()
    expect(component.temp).toBe('')
    expect(component.temparr).toEqual(['value1'])
  })

  it('should remove option from array', () => {
    component.temparr = ['value1', 'value2', 'value3']
    component.removeOption(0)
    expect(component.temparr).toEqual(['value2', 'value3'])
  })

  it('should return array of values', () => {
    component.temp = 'value3'
    component.temparr = ['value1', 'value2']
    const result = component.setDialog()
    expect(result).toEqual(['value1', 'value2'])
  })

  it('should return provided data for elements', () => {
    component.data = {
      type: AvailableItems.checkbox,
      data: 'label for checkbox'
    }
    fixture.detectChanges()
    component.temparr = ['value1', 'value2']
    expect(component.setDialog()).toBe('label for checkbox')
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
