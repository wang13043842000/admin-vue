<template>
    <div class="login-wrap">
        <el-form lable-position = "top" ref="form" :model="userForm" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="userForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" 
                v-model="userForm.password"></el-input>
            </el-form-item>
             <el-form-item>
                <el-button type="primary" @click="login">登陆</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
            userForm: {
                username: '',
                password: '',
            }
        }
    },
    methods: {
        async login () {
            const res = await axios.post('http://localhost:8888/api/private/v1/login',this.userForm)
            if(res.data.meta.status===200){
                console.log(res)
                // 如果返回的数据里面的status等于200  登陆成功跳转
                this.$router.push({
                    name: 'home'
                })
            }
        }
    }
  
}
</script>
<style>

</style>


