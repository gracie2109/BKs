<script setup lang="ts">
import type { Table } from '@tanstack/vue-table'
import { computed } from 'vue'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Columns2,
} from "lucide-vue-next";
interface DataTableViewOptionsProps {
  table: Table<any>,
    open: boolean
}

const props = defineProps<DataTableViewOptionsProps>()
const emit = defineEmits(['setOpen'])
const columns = computed(() => props.table.getAllColumns()
  .filter(
    column =>
      typeof column.accessorFn !== 'undefined' && column.getCanHide(),
  ))
</script>

<template>
  <DropdownMenu :open="props.open" @update:open="$emit('setOpen')">
    <DropdownMenuTrigger as-child>
      <Button variant="outline" size="sm" class="hidden h-8 ml-auto lg:flex">
        <Columns2 class="w-4 h-4 mr-2" />
        View
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="w-[150px]">
      <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
      <DropdownMenuSeparator />

      <DropdownMenuCheckboxItem v-for="column in columns" :key="column.id" class="capitalize"
        :checked="column.getIsVisible()" @update:checked="(value) => column.toggleVisibility(!!value)">
        {{ column.id }}
      </DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>