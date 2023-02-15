<template>
  <div class="uploadBox">
      <!-- <el-form :model="formData.form" label-width="180px" :rules="formData.rules" :ref="formData.refBaseName"> -->
      <el-form :model="formData.form" label-width="180px">
        <!-- <el-form-item v-for="(list, i) in formData.list" :key="i"  :label="list.label" class="customUpLoad" >
            <input
                :ref="list.sourceInpuFile"
                type="file"
                :name="sourceInpuFile+'Name'"
                style="width:100%;display: none;"
                @change="householdRegisterChange"
            />
            <el-input 
                v-model="formData.form[list[i].key]" 
                class="uploadInput" 
                @click="handleClick($event, i)"
            ></el-input>
            <el-button @click.prevent="handleClick($event, i)">上传</el-button>
        </el-form-item> -->
      </el-form>
  </div>
</template>

<script>
export default {
    prop: ['formData'],
    data() {
        return {
            // form: {}
        }
    },
    methods: {
        handleClick(e, i) {
            console.log(e, i);
        }
    }
}
</script>

<style>

</style>