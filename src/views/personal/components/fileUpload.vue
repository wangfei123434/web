<template>
    <el-form-item :label="label" class="customUpLoad" :prop="prop">
        <el-button :disabled="disabled" @click.prevent="$refs.file.click()" type="primary" class="uploadBtn1"
        >上传</el-button
        >
        <input
        ref="file"
        type="file"
        style="width:100%;display: none;"
        @change="fileChange"
        accept="application/msword, image/jpeg, image/png, application/pdf"
        />
        <el-input
        v-model="model"
        class="uploadInput"
        @click.prevent="$refs.file.click()"
        ></el-input>
        
    </el-form-item>
</template>

<script>
export default {
    name: 'file-upload',
    props: {
        enterpriseId: {
            required: true
        },
        model: {
            required: true
        },
        label: {
            type: String,
            required: true
        },
        prop: {
            type: String,
            required: true
        },
        disabled: {
            type: Boolean,
        }
    },
    data() {
        return {

        }
    },
    created() {
        
    },
    methods: {
        fileChange(e) {
            e.enterpriseId = this.enterpriseId;
            this.$emit('fileChange',e);
        }
    }
}
</script>

<style lang="scss" scoped>
.customUpLoad {
    .uploadInput {
        width: 500px;
        input {
            border: none;
        }
        & /deep/ .el-input__inner {
            border: none !important;
        }
    }
    .uploadBtn {
        color: #00a9ec;
        margin-top: 5px;

        cursor: pointer;
    }
    .uploadBtn1 {
        margin-left: 20px;
        margin-right: 20px;
    }
}
</style>