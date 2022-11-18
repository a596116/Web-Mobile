import * as veeValidate from 'vee-validate'
import rules from '@vee-validate/rules'
import { loadLocaleFromURL, localize } from '@vee-validate/i18n'
import yup from './yup'
import zh_TW from '@vee-validate/i18n/dist/locale/zh_TW.json'


veeValidate.configure({
  // validateOnInput: true,
  generateMessage: localize('zh_TW', zh_TW),
})

Object.keys(rules).forEach((key) => {
  veeValidate.defineRule(key, rules[key])
})

const useFields = (fields: string[]) => {
  fields.forEach((field) => veeValidate.useField(field))
}
export default { yup, ...veeValidate }
