import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle} from '../firebase/firebase.utils';
// import { signInWithPopup } from 'firebase/auth';
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props){
    super(props);

    this.state={
        email:'',
        password:''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({email:'',password:''})

    }

    handleChange = e => {
        const {value,name} = e.target;
        this.setState({[name]:value})
    }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account.</h2>
        <span>Sign in with you account.</span>
        <form onSubmit={this.handleSubmit}>
            <FormInput 
            name='email' 
            type='email' 
            handleChange={this.handleChange} 
            value={this.state.email} 
            label='Email'
            required/>
            <FormInput
            name='password' 
            type='password' 
            value={this.state.password} 
            handleChange={this.handleChange}
            label='Password'
            required
                />

          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} > Sign in with Google </CustomButton>
        </form>
        </div>
    );
  }
}

export default SignIn;