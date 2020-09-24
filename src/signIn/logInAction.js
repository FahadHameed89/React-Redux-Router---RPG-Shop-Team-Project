/// action

  
const userSignIn = (userInformation) => {
    return {
      type: 'USER_SIGNIN',
      payload: userInformation
    };
  }

  export default userSignIn;