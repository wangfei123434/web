import { getEnterpriseAttachmentCity, saveEnterpriseAttachment } from "@/api/personal";
//文件上传相关公共逻辑
export default {
    data() {
        return {
            attachmentListData: [], // 接口查询的附件数据
            attachment: {   //附件对象
                enterpriseId: '',   //企业id
                files: [
                  // {
                  //   key: '',    //文件key
                  //   file: ''    //文件File流
                  // }
                ],
                deleteIds: []  //要删除的文件id数组
            },
        }
    },
    mounted() {
        this.fetchAttachmentData();
    }, 
    methods: {
        // 文件更新事件
        fileChange(e,key) {
            const input = e.target;
            const [file] = input.files;
            input.value = "";
            this.form[key] = file.name;
            let keys = this.attachment.files.map(i => i.key);
            !keys.includes(key) && this.attachment.files.push({
                key,
                file
            })
            this.attachment.enterpriseId = e.enterpriseId;

            saveEnterpriseAttachment(this.getAttachmentFormData())
        },
        // 获取附件数据
        getAttachmentFormData() {
            let {files,deleteIds,enterpriseId} = this.attachment;
            const formData = new FormData();
            formData.append("enterpriseId", enterpriseId);
            files.map(fileItem => {
                formData.append(fileItem.key, fileItem.file);
            })
            formData.append("delete", deleteIds.join(','));
            return formData
        },
        // 查询附件列表
        async fetchAttachmentData() {
            console.log('11'+this.componyInfo);
            if(this.componyInfo?.id) {
                let resp = await getEnterpriseAttachmentCity({id: this.componyInfo?.id});
                let list = resp?.data.map(i => {
                    i.type = i.type.toLowerCase();
                    return i;
                })
                list.map(item => {
                    if (this.form.hasOwnProperty(item.type)) {
                        this.form[item.type] = item.name;
                    }
                })
            }
        }
    },
    computed: {
        attachmentListDataCom() {
            return this.attachmentListData;
        }
    }
}