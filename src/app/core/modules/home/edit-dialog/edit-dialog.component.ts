import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AvailableItems } from 'src/app/core/enums/availableItem';

export interface DataType{
  type: AvailableItems,
  data: any
}

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent{
  temp: string;
  temparr: string[] = [...this.data.data];
  result: string | string[]
  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataType,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  removeOption(index: number){
    this.temparr.splice(index,1)
  }
  applyOptionForSelect(){
    if(this.temp){
      this.temparr.push(this.temp)
      this.temp = ''
    }
  }
  setDialog(){
    if(this.data.type === 'select'){
      return [...this.temparr]
    }
    return this.temp
  }
}