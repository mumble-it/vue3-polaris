LINTING

## Project installation doc

1. Default

import css

2. More accurate with scss

copy the config of tailwind and install it + import:
- typography
- make your file with the tailwind stuff
- import the component that you want

## Button

### Props
- [ ] variant - plainMonochrome
- [ ] variant - tertiary
- [ ] fullWidth
- [ ] disclosure
- [ ] icon
- [ ] tone
- [ ] id
- [ ] url
- [ ] external
- [ ] submit
- [ ] disabled
- [ ] loading
- [ ] accessibilityLabel?
- [ ] role?
- [ ] ariaControls?
- [ ] ariaExpanded?
- [ ] ariaDescribedBy?
- [ ] ariaChecked

## Package.json

You must replace all the github-packages-ui-library with the name of your library and peshanghiwa with your own github username in the above file (You must include the @ character too in the username: @YOURUSERNAME)

    "publishConfig": {
        "registry": "https://npm.pkg.github.com/@mumble"
    },
    "repository": {
        "type": "git",
        "url": "https://github.com/peshanghiwa/github-packages-ui-library"
    },

and lastly create a .npmrc in the root directory as follows:
    
    @mumble:registry=https://npm.pkg.github.com

and replcae peshanghiwa with your github username