import { AvailableItems } from '../enums/availableItem'

export interface DropListElementData {
  type: AvailableItems,
  data: string | string[]
}