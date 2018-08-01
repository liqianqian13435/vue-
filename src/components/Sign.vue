<template>
  <div class="login">
      <div class="loogo">
          <img src="../../static/images/292441.svg" alt="">
          <p>Sign in to GitHub</p>
          <p>to continue to Vue 中文社区</p>
      </div>
	  <form action="">
		  <div class="user">
				<label for="username">Username or email address</label>
				<input type="text" name="username" id="username">	  
		  </div>
		  <div class="pas">
				<div>Password
                    <span>Forgot password?</span>                    
                </div>
				<input type="password" name="password" id="password" >	  
		  </div>
		  <div class="btn">
			  <button>Sign in</button>
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
    .loogo{
        margin-top:rem(100px);
        img{
            display:block;
            width:rem(100px);
            height:rem(100px);
            margin:rem(20px) auto;
        }
        p{
            font-size:rem(40px);
            text-align:center;
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
            div{
                display:flex;
                justify-content:space-between;
                span{
                font-size:rem(20px);
                color:#83B4EB;
                margin-top:rem(15px);
                }
            }
            
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
                width:100%;
                height:rem(80px);
				font-size:rem(30px);
				background:#2DBA4E;
				border:0;
				color:#fff;
				border-radius:rem(10px);

			}
			
		}
	}
}
</style>
