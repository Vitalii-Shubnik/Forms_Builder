import { Component, Inject, OnInit } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { AvailableItems } from 'src/app/core/enums/availableItem'
import { DropListElementData } from 'src/app/core/models/dropListElementData'


@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  temp: string | string[]
  temparr: string[]

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DropListElementData,
  ) { }

  ngOnInit(): void {
    if (this.data.type === 'select') {
      this.temparr = [...this.data?.data]
    }
    else {
      this.temp = this.data.data
    }
  }

  onNoClick(): void {
    this.dialogRef.close()
  }

  removeOption(index: number): void {
    this.temparr.splice(index, 1)
  }

  applyOptionForSelect(): void {
    if (this.temp) {
      this.temparr.push(this.temp as string)
      this.temp = ''
    }
  }

  setDialog(): string | string[] {
    if (this.data.type === 'select') {
      return [...this.temparr]
    }
    return this.temp
  }
}