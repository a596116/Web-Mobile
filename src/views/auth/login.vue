<template>
  <div
    class="relative min-h-screen w-full bg-gradient-to-tr from-blue-100 to-purple-100"
  >
    <Navbar title="用戶登入" />
    <section
      class="relative w-full min-h-screen flex justify-center items-center p-6 text-center"
    >
      <button
        class="absolute top-5 right-5 rounded-2xl border-b-4 border-b-blue-400 bg-blue-300 py-3 px-2 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400"
      >
        SIGN UP
      </button>
      <Form class="" @submit="onSubmit" :validation-schema="schema">
        <div>
          <div class="mt-8">
            <div class="mt-5">
              <div
                class="w-full py-3 flex items-center rounded-2xl bg-gray-100 px-4 border ring-2 ring-gray-200 focus-within:ring-blue-400"
              >
                <Field value="" name="phone" v-slot="{ field }">
                  <van-image
                    class="w-[20px] h-[28px] mx-3"
                    src="/img/auth/mobile_icon.png"
                  />
                  <input
                    v-bind="field"
                    placeholder="請輸入手機"
                    label="手機"
                    class="w-full flex-1 border-none bg-transparent outline-none focus:outline-none"
                  />
                  <van-image
                    @click="field['onUpdate:modelValue']"
                    class="w-[28px] h-[24px] mx-3 opacity-0"
                    :class="{ show: field.value }"
                    src="/img/auth/close_icon.png"
                  />
                </Field>
              </div>
              <div class="h-[20px]">
                <ErrorMessage name="phone" class="text-red-400" />
              </div>
            </div>

            <div class="mt-5">
              <div
                class="w-full py-3 flex items-center rounded-2xl bg-gray-100 px-4 border ring-2 ring-gray-200 focus-within:ring-blue-400"
              >
                <Field value="123456" name="password" v-slot="{ field }">
                  <van-image
                    class="w-[20px] h-[28px] mx-3"
                    src="/img/auth/pwd_icon.png"
                  />
                  <input
                    v-bind="field"
                    placeholder="請輸入密碼"
                    :type="show ? 'password' : 'text'"
                    class="w-full flex-1 border-none bg-transparent outline-none focus:outline-none"
                  />
                  <van-image
                    @click="field['onUpdate:modelValue']"
                    class="w-[28px] h-[24px] mx-3 opacity-0"
                    :class="{ show: field.value }"
                    src="/img/auth/close_icon.png"
                  />
                  <van-image
                    @click="show = !show"
                    class="w-[28px] h-[24px] mx-3 opacity-0"
                    :class="{ show: field.value }"
                    :src="show ? '/img/auth/view.png' : '/img/auth/hide.png'"
                  />
                </Field>
              </div>
              <div class="h-[20px]">
                <ErrorMessage name="password" class="text-red-400" />
              </div>
            </div>
          </div>
        </div>

        <div class="flex gap-2 justify-center mt-5">
          <a
            href="#"
            class="text-sm text-gray-600 hover:text-green-800 hover:font-bold"
            >找回密碼</a
          >
        </div>

        <button
          class="w-full my-5 rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400"
        >
          LOG IN
        </button>
      </Form>
    </section>
  </div>
</template>

<script setup lang="ts">
import v from '@/utils/validate'

const { Form, Field, ErrorMessage } = v

const schema = v.yup.object({
  phone: v.yup.string().required('請輸入手機'),
  password: v.yup.string().required('請輸入密碼').min(5, '請輸入至少五個字'),
})

const show = ref(true)
const onSubmit = async (form: any) => {
  console.log(form)
}
</script>

<style scoped lang="scss">
.show {
  opacity: 1;
}
input[type='password']::-ms-reveal,
input[type='password']::-ms-clear {
  display: none !important;
}
</style>
