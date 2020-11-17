import {
    MDCSlider
} from '@material/slider';
import {
    MDCDialog
} from '@material/dialog';


setTimeout(() => {
    const slider = new MDCSlider(document.querySelector('.mdc-slider'));

    const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));

    dialog.listen('MDCDialog:opened', () => {
        slider.layout();
    });

    slider.listen('MDCSlider:change', () => console.log(`Value changed to ${slider.value}`));
}, 100)