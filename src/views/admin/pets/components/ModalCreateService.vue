<template>
  <div
    class="flex w-full h-full items-center justify-center cursor-pointer"
    @click="() => (open = !open)"
  >
    <Plus class="size-4 mr-2" />
    <span class="font-semibold" v-if="!props.title">
      {{ $t("common.create") }} {{ $t("pageMeta.services") }}
    </span>
    <span class="font-semibold" v-else>
      {{ props.title }}
    </span>
  </div>

  <Dialog
    :open="open"
    @update:open="
      () => {
        open = !open;
        $emit('updateOpen', false);
      }
    "
  >
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Add new service </DialogTitle>
      </DialogHeader>
      <ServiceForm :form="form" :show-btn="false" @on-submit="handleForm" />
      <DialogFooter class="p-6 pt-0">
        <Button
          type="button"
          variant="outline"
          @click="
            () => {
              open = !open;
              form.resetForm();
              $emit('updateOpen', false);
            }
          "
        >
          Cancel
        </Button>
        <Button type="submit" @click="handleForm"> Save changes </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { Plus } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ServiceForm from "@/views/admin/pets/services/components/ServiceForm.vue";
import { useForm } from "vee-validate";
import { usePetServices } from "@/stores";
const props = defineProps<{
  title?: string;
  handleOpen?: boolean;
}>();
const open = ref(false);
const form = useForm();
const store = usePetServices();

defineEmits(["updateOpen"]);

watch(
  () => props.handleOpen,
  () => {
    if (props.handleOpen) {
      open.value = props.handleOpen;
    }
  }
);

const handleForm = form.handleSubmit(async (values: any) => {
  await store.createNewPetService(values).then(() => {
    open.value = !open.value;
    form.resetForm();
  });
});
</script>
