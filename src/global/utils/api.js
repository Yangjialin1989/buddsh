import API from './Axios.js'


export const UPDATE = async (path,parameter,content)=>{
    try{
        // console.log(`${path}${parameter}/`,content)
        const response = await API.patch(`${path}${parameter}/`,content)

        if(response.status === 200){
            return {status:200,message:'更新成功!'}
        }
    }catch (error){

        return error.response;
    }
}
export const CREATE = async (path,content)=>{
    try{
        // console.log(path,content)
        const response = await API.post(`${path}`,content)
        // console.log(response)
        if(response.status === 201){
            return {status:201,message:'创建成功!',data:response.data}
        }

    }catch (error){
        return error.response;
    }
}
export const SORT = async (path,pk,sort)=>{
    try{
        // console.log(`${path}${pk}/${sort}/`)
        const response = await API.post(`${path}${pk}/${sort}/`)
        // console.log(response)
        if(response.status === 200){
            return {status:200,message:'排序成功!',data:response.data}
        }

    }catch (error){
        return error.response;
    }
}
export const SEARCH = async (path,parameter)=>{
    try{
        parameter = parameter || '';
        console.log(`${path}${parameter}`)
        const response = await API.get(`${path}${parameter}`)
        if(response.data){
            return {status:200,message:'查询数据成功!',data:response.data}
        }

    }catch (error){
        console.log(error.response.status)
        if(error.response.status === 403){
            return {status:403,message:'查询数据失败!',data:error.response.data}
        }
        if(error.response.status === 404){
            return {status:404,message:'查询数据失败!',data:'路径错误!无法访问!'}
        }

    }
}
export const DELETE = async (path,parameter)=>{
    try{
        const response = await API.delete(`${path}${parameter}`)
        return {status:204,message:'删除数据成功!',data:[]}
    }catch (error){
        console.log(error.response)
        return {status:403,message:'删除数据失败!',data:error.response.data}
    }
}
export const DELETES = async (path,parameter)=>{
    try{
        const response = await API.delete(`${path}`, {parameter})
        return {status:204,message:'删除数据成功!',data:[]}


    }catch (error){
        console.log('错误。')
        return {status:403,message:'删除数据失败!',data:error.response.data}
    }
}


