<script lang="ts" setup>
import {useForm} from 'vee-validate'
import {toTypedSchema} from '@vee-validate/zod'
import {useProductStore} from "@/stores/modules/products"
import {type InferProductFormInfo, productFormSchema} from "@/validations/products";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";
import {CustomButton, CustomCombobox} from "@/components/common";
import {Trash} from "lucide-vue-next"
import {FormControl, FormField, FormItem, FormLabel, FormMessage,} from '@/components/ui/form';
import {Input} from '@/components/ui/input'
import CustomInputField from "@/components/common/CustomInputField.vue";
import LoadingIndicator from "@/components/common/LoadingIndicator.vue";
import NoDataView from "@/components/common/NoData.vue"

import {useToastImage} from "@/composables/useToastImage";

const formSchema = toTypedSchema(productFormSchema)
const store = useProductStore();
const {products, loading} = storeToRefs(store)

const {handleSubmit, resetForm} = useForm({
  validationSchema: formSchema,
})

onMounted(async () => {
  await store.getListProducts()
});

const onSubmit = handleSubmit(async (values: InferProductFormInfo) => {
  await store.createProduct(values);
  resetForm()
});

const handleClick = async (i: any) => {
  await store.deleteProduct(i.id)
}

const frameworks = [
  {value: '123123', label: 'Next.js nef ', key: '1'},
  {value: 'g', label: 'SvelteKit sda', key: '2'},
  {value: 'nuxt', label: 'Nuxt', key: '3'},
  {value: 'remix', label: 'Remix', key: '4'},
  {value: 'huhh', label: 'Astro', key: '5'},
]

const optionValue = ref()

function selectOption(value: any) {
  optionValue.value = value
}

const imgSource = 'https://www.nme.com/wp-content/uploads/2023/06/karina-aespa.jpg';
const name = 'dadasdasssssssssssssssssssd'




</script>

<template>
  <div v-if="loading">
    <LoadingIndicator/>
  </div>
  <div v-if="products.length === 0">
    <NoDataView />
  </div>
  <div v-else id="showTable" class="mx-8 p-8">
    <div v-if=" !products">
      Loading
    </div>
    <div v-else>
      <table class="table-auto mt-20">
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Desc</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>

        <tr v-for="(i, j)  in products" :key="i.id">
          <td>{{ j + 1 }}</td>
          <td>{{ i['name'] }}</td>
          <td>{{ i['desc'] || i['description'] }}</td>
          <td>
            <CustomButton :disabled="loading" :size="'icon'" button-text="" type="button" variant="destructive"
                          @click="handleClick(i)">
              <template #icon>
                <Trash class="w-4 h-4"/>
              </template>
            </CustomButton>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

  <form class="w-[500px]  space-y-6 mx-8 p-8" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="name">
      <FormItem>
        <FormLabel>{{ $t('pageFields.products.name') }}</FormLabel>
        <FormControl>
          <Input placeholder="shading" type="text" v-bind="componentField"/>
        </FormControl>
        <FormMessage/>
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="description">
      <FormItem>
        <FormLabel>{{ $t('pageFields.products.description') }}</FormLabel>
        <FormControl>
          <Input placeholder="desc" type="text" v-bind="componentField"/>
        </FormControl>
        <FormMessage/>
      </FormItem>
    </FormField>
    :: {{ optionValue }}
    <CustomCombobox
        :options="frameworks"
        placeholder="Choose"
        search-label
        show-clear
        @select-option="selectOption"
    />


    <CustomInputField label="name"/>
    <CustomButton :button-text="$t('common.submit')" :loading="loading" type="submit"/>
  </form>

</template>
