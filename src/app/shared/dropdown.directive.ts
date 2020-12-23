import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective{
    // bind to a property of the element the directive is applied to
    // this would be elements which utilise Bootstrap's btn-group or dropdown
    // the element's class is set to open when opened is false
    @HostBinding('class.open') opened: boolean = false;

    // listen for mouse click and toggle opened
    @HostListener('click') onClick() {
        this.opened = !this.opened;
    }
}