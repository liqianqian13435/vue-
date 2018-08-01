<template>
  <div class="login">
	  <div class="biaoti">
		  <a href="">登录</a>/
		  <router-link to="/sign" tag="span">注册</router-link>
	  </div>
	  <form action="">
		  <div class="user">
				<label for="username">用户名</label>
				<input type="text" name="username" id="username">	  
		  </div>
		  <div class="pas">
				<label for="password">密码</label>
				<input type="password" name="password" id="password" >	  
		  </div>
		  <div class="btn">
			  <button>登录</button>
			  <button>通过GitHub登录</button>
			  <span>忘记密码了？</span>
		</div>	
	  </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../assets/sass/base.scss';

.login{
	width:rem(750px);
	.biaoti{
		font-size:rem(40px);
		width:rem(700px);
		margin:rem(100px) auto;
		border-bottom:1px solid #eee;
		line-height:1rem;
		span{
			color:red;
		}
	}
	form{
		width:rem(700px);
		margin:rem(100px) auto;
		font-size:rem(45px);
		.user{
			display:flex;
			flex-direction:column;
			input{
				width:rem(680px);
				height:rem(80px);
				border:1px solid #ccc;
				border-radius:rem(15px);
				font-size:rem(40px);
				padding-left:rem(10px);
				margin-top:rem(20px);
			}
		}
		.pas{
			display:flex;
			margin:rem(40px) 0;
			flex-direction:column;
			input{
				width:rem(680px);
				height:rem(80px);
				border:1px solid #ccc;
				border-radius:rem(15px);
				font-size:rem(40px);
				padding-left:rem(10px);
				margin-top:rem(20px);
				
			}
		}
		.btn{
			button{
				padding:rem(20px);
				font-size:rem(40px);
				background:#3374DE;
				border:0;
				color:#fff;
				border-radius:rem(10px);
				margin:rem(30px) rem(5px);

			}
			span{
				font-size:rem(30px);
				color:#ccc;
			}
		}
	}
}
</style>
