import { App } from 'vue'
import PBadge from './components/PBadge/PBadge.vue'
import PTabs from "@/components/PTabs/PTabs.vue";
import PActionList from "@/components/PActionList.vue";
import PBanner from "@/components/PBanner.vue";
import PButton from "@/components/PButton.vue";
import PButtonGroup from "@/components/PButtonGroup.vue";
import PCard from "@/components/PCard.vue";
import PCheckbox from "@/components/PCheckbox.vue";
import PContextualSaveBanner from "@/components/PContextualSaveBanner.vue";
import PIcon from "@/components/PIcon.vue";
import PInlineError from "@/components/PInlineError.vue";
import PPage from "@/components/PPage.vue";
import PPopover from "@/components/PPopover.vue";
import PPopoverPane from "@/components/PPopoverPane.vue";
import PRadioButton from "@/components/PRadioButton.vue";
import PSelect from "@/components/PSelect.vue";
import PSkeletonBodyText from "@/components/PSkeletonBodyText.vue";
import PSpinner from "@/components/PSpinner.vue";
import PText from "@/components/PText.vue";
import PTextField from "@/components/PTextField.vue";

export const VuePolarisUI = {
    install(app: App): void {
        app.component('PBadge', PBadge)
        app.component('PTabs', PTabs)
        app.component('PActionList', PActionList)
        app.component('PBanner', PBanner)
        app.component('PButton', PButton)
        app.component('PButtonGroup', PButtonGroup)
        app.component('PCard', PCard)
        app.component('PCheckbox', PCheckbox)
        app.component('PContextualSaveBanner', PContextualSaveBanner)
        app.component('PIcon', PIcon)
        app.component('PInlineError', PInlineError)
        app.component('PPage', PPage)
        app.component('PPopover', PPopover)
        app.component('PPopoverPane', PPopoverPane)
        app.component('PRadioButton', PRadioButton)
        app.component('PSelect', PSelect)
        app.component('PSkeletonBodyText', PSkeletonBodyText)
        app.component('PSpinner', PSpinner)
        app.component('PText', PText)
        app.component('PTextField', PTextField)
    },
}

export default VuePolarisUI

export { default as PBadge } from './components/PBadge/PBadge.vue'
export { default as PTabs } from './components/PTabs/PTabs.vue'
export { default as PActionList } from './components/PActionList.vue'
export { default as PBanner } from './components/PBanner.vue'
export { default as PButton } from './components/PButton.vue'
export { default as PButtonGroup } from './components/PButtonGroup.vue'
export { default as PCard } from './components/PCard.vue'
export { default as PCheckbox } from './components/PCheckbox.vue'
export { default as PContextualSaveBanner } from './components/PContextualSaveBanner.vue'
export { default as PIcon } from './components/PIcon.vue'
export { default as PInlineError } from './components/PInlineError.vue'
export { default as PPage } from './components/PPage.vue'
export { default as PPopover } from './components/PPopover.vue'
export { default as PPopoverPane } from './components/PPopoverPane.vue'
export { default as PRadioButton } from './components/PRadioButton.vue'
export { default as PSelect } from './components/PSelect.vue'
export { default as PSkeletonBodyText } from './components/PSkeletonBodyText.vue'
export { default as PSpinner } from './components/PSpinner.vue'
export { default as PText } from './components/PText.vue'
export { default as PTextField } from './components/PTextField.vue'
