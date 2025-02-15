import type { App } from 'vue'

import AlertDialog from './components/ui/alert-dialog/AlertDialog.vue'
import Avatar from './components/ui/avatar/Avatar.vue'
import Badge from './components/ui/badge/Badge.vue'
import Button from './components/ui/button/Button.vue'
import Card from './components/ui/card/Card.vue'
import Checkbox from './components/ui/checkbox/Checkbox.vue'
import Input from './components/ui/input/Input.vue'
import Label from './components/ui/label/Label.vue'

import RadioGroup from './components/ui/radio-group/RadioGroup.vue'
import RadioGroupItem from './components/ui/radio-group/RadioGroupItem.vue'
import ScrollArea from './components/ui/scroll-area/ScrollArea.vue'
import ScrollBar from './components/ui/scroll-area/ScrollBar.vue'
import Separator from './components/ui/separator/Separator.vue'
import Skeleton from './components/ui/skeleton/Skeleton.vue'
import Switch from './components/ui/switch/Switch.vue'
import Textarea from './components/ui/textarea/Textarea.vue'
import Toggle from './components/ui/toggle/Toggle.vue'
import ToggleGroup from './components/ui/toggle-group/ToggleGroup.vue'
import ToggleGroupItem from './components/ui/toggle-group/ToggleGroupItem.vue'
import AlertDialogAction from './components/ui/alert-dialog/AlertDialogAction.vue'
import AlertDialogCancel from './components/ui/alert-dialog/AlertDialogCancel.vue'
import AlertDialogContent from './components/ui/alert-dialog/AlertDialogContent.vue'
import AlertDialogDescription from './components/ui/alert-dialog/AlertDialogDescription.vue'
import AlertDialogFooter from './components/ui/alert-dialog/AlertDialogFooter.vue'
import AlertDialogHeader from './components/ui/alert-dialog/AlertDialogHeader.vue'
import AlertDialogTrigger from './components/ui/alert-dialog/AlertDialogTrigger.vue'
import AvatarFallback from './components/ui/avatar/AvatarFallback.vue'
import AvatarImage from './components/ui/avatar/AvatarImage.vue'
import CardContent from './components/ui/card/CardContent.vue'
import CardDescription from './components/ui/card/CardDescription.vue'
import CardFooter from './components/ui/card/CardFooter.vue'
import CardHeader from './components/ui/card/CardHeader.vue'
import CardTitle from './components/ui/card/CardTitle.vue'
import FormControl from './components/ui/form/FormControl.vue'
import FormDescription from './components/ui/form/FormDescription.vue'
import FormItem from './components/ui/form/FormItem.vue'
import FormLabel from './components/ui/form/FormLabel.vue'
import FormMessage from './components/ui/form/FormMessage.vue'
import Popover from './components/ui/popover/Popover.vue'
import PopoverContent from './components/ui/popover/PopoverContent.vue'
import PopoverTrigger from './components/ui/popover/PopoverTrigger.vue'
import Select from './components/ui/select/Select.vue'
import SelectContent from './components/ui/select/SelectContent.vue'
import SelectGroup from './components/ui/select/SelectGroup.vue'
import SelectItem from './components/ui/select/SelectItem.vue'
import SelectItemText from './components/ui/select/SelectItemText.vue'
import SelectLabel from './components/ui/select/SelectLabel.vue'
import SelectScrollDownButton from './components/ui/select/SelectScrollDownButton.vue'
import SelectScrollUpButton from './components/ui/select/SelectScrollUpButton.vue'
import SelectSeparator from './components/ui/select/SelectSeparator.vue'
import SelectTrigger from './components/ui/select/SelectTrigger.vue'
import SelectValue from './components/ui/select/SelectValue.vue'
import DropdownMenu from './components/ui/dropdown-menu/DropdownMenu.vue'
import DropdownMenuCheckboxItem from './components/ui/dropdown-menu/DropdownMenuCheckboxItem.vue'
import DropdownMenuContent from './components/ui/dropdown-menu/DropdownMenuContent.vue'
import DropdownMenuGroup from './components/ui/dropdown-menu/DropdownMenuGroup.vue'
import DropdownMenuItem from './components/ui/dropdown-menu/DropdownMenuItem.vue'
import DropdownMenuLabel from './components/ui/dropdown-menu/DropdownMenuLabel.vue'
import DropdownMenuRadioGroup from './components/ui/dropdown-menu/DropdownMenuRadioGroup.vue'
import DropdownMenuRadioItem from './components/ui/dropdown-menu/DropdownMenuRadioItem.vue'
import DropdownMenuSeparator from './components/ui/dropdown-menu/DropdownMenuSeparator.vue'
import DropdownMenuShortcut from './components/ui/dropdown-menu/DropdownMenuShortcut.vue'
import DropdownMenuSub from './components/ui/dropdown-menu/DropdownMenuSub.vue'
import DropdownMenuSubContent from './components/ui/dropdown-menu/DropdownMenuSubContent.vue'
import DropdownMenuSubTrigger from './components/ui/dropdown-menu/DropdownMenuSubTrigger.vue'
import DropdownMenuTrigger from './components/ui/dropdown-menu/DropdownMenuTrigger.vue'

export function registerComponents(app: App<Element>) {
  app.component('AppCard', Card)
  app.component('AppCardContent', CardContent)
  app.component('AppCardDescription', CardDescription)
  app.component('AppCardFooter', CardFooter)
  app.component('AppCardHeader', CardHeader)
  app.component('AppCardTitle', CardTitle)
  app.component('AppAlertDialog', AlertDialog)
  app.component('AppAlertDialogAction', AlertDialogAction)
  app.component('AppAlertDialogCancel', AlertDialogCancel)
  app.component('AppAlertDialogContent', AlertDialogContent)
  app.component('AppAlertDialogDescription', AlertDialogDescription)
  app.component('AppAlertDialogFooter', AlertDialogFooter)
  app.component('AppAlertDialogHeader', AlertDialogHeader)
  app.component('AppAlertDialogTrigger', AlertDialogTrigger)
  app.component('AppAvatar', Avatar)
  app.component('AppAvatarFallback', AvatarFallback)
  app.component('AppAvatarImage', AvatarImage)
  app.component('AppBadge', Badge)
  app.component('AppButton', Button)
  app.component('AppCheckbox', Checkbox)
  app.component('AppInput', Input)
  app.component('AppLabel', Label)
  app.component('AppRadioGroup', RadioGroup)
  app.component('AppRadioGroupItem', RadioGroupItem)
  app.component('AppScrollArea', ScrollArea)
  app.component('AppScrollBar', ScrollBar)
  app.component('AppSeparator', Separator)
  app.component('AppSkeleton', Skeleton)
  app.component('AppSwitch', Switch)
  app.component('AppTextarea', Textarea)
  app.component('AppToggle', Toggle)
  app.component('AppToggleGroup', ToggleGroup)
  app.component('AppToggleGroupItem', ToggleGroupItem)
  app.component('AppFormControl', FormControl)
  app.component('AppFormDescription', FormDescription)
  app.component('AppFormItem', FormItem)
  app.component('AppFormLabel', FormLabel)
  app.component('AppFormMessage', FormMessage)
  app.component('AppPopover', Popover)
  app.component('AppPopoverContent', PopoverContent)
  app.component('AppPopoverTrigger', PopoverTrigger)
  app.component('AppSelect', Select)
  app.component('AppSelectContent', SelectContent)
  app.component('AppSelectGroup', SelectGroup)
  app.component('AppSelectItem', SelectItem)
  app.component('AppSelectItemText', SelectItemText)
  app.component('AppSelectLabel', SelectLabel)
  app.component('AppSelectScrollDownButton', SelectScrollDownButton)
  app.component('AppSelectScrollUpButton', SelectScrollUpButton)
  app.component('AppSelectSeparator', SelectSeparator)
  app.component('AppSelectTrigger', SelectTrigger)
  app.component('AppSelectValue', SelectValue)
  app.component('AppDropdownMenu', DropdownMenu)
  app.component('AppDropdownMenuCheckboxItem', DropdownMenuCheckboxItem)
  app.component('AppDropdownMenuContent', DropdownMenuContent)
  app.component('AppDropdownMenuGroup', DropdownMenuGroup)
  app.component('AppDropdownMenuItem', DropdownMenuItem)
  app.component('AppDropdownMenuLabel', DropdownMenuLabel)
  app.component('AppDropdownMenuRadioGroup', DropdownMenuRadioGroup)
  app.component('AppDropdownMenuRadioItem', DropdownMenuRadioItem)
  app.component('AppDropdownMenuSeparator', DropdownMenuSeparator)
  app.component('AppDropdownMenuShortcut', DropdownMenuShortcut)
  app.component('AppDropdownMenuSub', DropdownMenuSub)
  app.component('AppDropdownMenuSubContent', DropdownMenuSubContent)
  app.component('AppDropdownMenuSubTrigger', DropdownMenuSubTrigger)
  app.component('AppDropdownMenuTrigger', DropdownMenuTrigger)
}
