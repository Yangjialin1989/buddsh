import {ElMessage, ElMessageBox} from "element-plus";
const Confirm = (message,confirm)=>{
    ElMessageBox.confirm(
        message,
        '提示',
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        }
    )
        .then(() => {
            confirm()
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: 'Delete canceled',
            })
        })
}
export default Confirm