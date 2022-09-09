import { AvailableItems } from '../enums/availableItem'

export interface ActiveElement {
  type: AvailableItems,
  element: HTMLElement
}