import React from 'react'

class login {
        state={
            email:"",
            password:"",
            log :true
        }
    handleLogin=(e)=>{
        if(this.state.email=="mon" && this.state.password=="123")
        {
                this.state.log=false
        }

      
    }

    handleSubmit=(e)=>{

    }

    render(){
        return (
            <form>
              <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
              <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
              <button type="button" onClick={this.handleLogin}>Login</button>
            </form>
            );
        
    }
}
export default login;