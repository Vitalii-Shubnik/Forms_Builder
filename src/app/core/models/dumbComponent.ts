export abstract class DumbComponent {

  private readonly subClassConstructor: Function
  private readonly subClassNgOnInit: Function

  protected constructor() {
    this.subClassConstructor = this.constructor
    this.subClassNgOnInit = (this as any).ngOnInit

    if (this.subClassNgOnInit) {
      this.throwError('it should not use ngOnInit')
    }
    if (this.isEmptyConstructor() || arguments.length !== 0) {
      this.throwError('it should not inject services')
    }
  }

  private isEmptyConstructor(): boolean {
    return this.subClassConstructor.toString().split('(')[1][0] !== ')'
  }

  private throwError(reason: string): void {
    throw new Error(`Component "${this.subClassConstructor.name}" is a DumbComponent, ${reason}.`)
  }
}