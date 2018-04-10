<template>
    <div>
        <p>登陆组件</p>
        <form >
            <div>
                <label for="username">用户名</label>
                <input type="text" id="username" v-model="user.username">
            </div>
            <div>
                <label for="password">密码</label>
                <input type="password" id="password">
            </div>
            <div><button>点击登录</button></div>
        </form>
    </div>
</template>
<script>
export default {
    data () {
        return {
            user: {
                username: '',
                password: '',
            }
        }
    },
    methods: {
        
    }
  
}
</script>
<style>

</style>


