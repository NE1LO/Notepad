<template>
    
    <div class="mt-8">
        <div class="flex justify-center gap-4 h-10">
            <input
                v-model="newTask"
                class="p-2 w-1/2"
                placeholder="Text of task"
         />
         <button @click="addTask" class="bg-blue-500 h-full">Save</button>
        </div>
    </div>

</template>

<script>
export default {
    
}
</script>

<style>
    
</style>