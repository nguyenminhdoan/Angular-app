import {
  Directive,
  HostListener,
  ElementRef,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  constructor(private elRef: ElementRef) {}

  @HostBinding('class.show') isShown: boolean = false;

  @HostListener('document:click', ['$event']) toggleShow(event: Event) {
    this.isShown = this.elRef.nativeElement.contains(event.target)
      ? !this.isShown
      : false;
    this.triggerDropdown();
  }

  triggerDropdown() {
    if (this.isShown) {
      this.elRef.nativeElement
        .querySelector('.dropdown-menu')
        .classList.add('show');
    } else {
      this.elRef.nativeElement
        .querySelector('.dropdown-menu')
        .classList.remove('show');
    }
  }
}
