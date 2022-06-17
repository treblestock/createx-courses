import { defineStore } from "pinia"


export const useStoreAccount = defineStore('storeAccount', {
  state: () => ({
    userId: null,
    userName: null,
    userEmail: null,
    userPassword: null,
  }),
  getters: {
    isSignedIn: (state) => !!state.userId,
  },
  actions: {
    signUp({userEmail, userName, userPassword, userConfirmPassword, shouldKeepSignedIn}) {
      if (!userEmail || !userName || !userPassword || !userConfirmPassword) throw new Error('fill all the field to sign up')
      if (this._isAccountExists(userEmail) ) throw new Error('There is already an account under this email')
      
      const userId = Date.now()
      const accounts = JSON.parse(localStorage.getItem('userAccounts') ) || []
      accounts.push({
        userId,
        userEmail,
        userPassword,
        userName,
      })
      localStorage.setItem('userAccounts', JSON.stringify(accounts) )

      this.signIn({userEmail, userPassword})
    },
    _isAccountExists(userEmail) {
      const accounts = JSON.parse(localStorage.getItem('userAccounts') )
      return accounts?.find(item => item.userEmail === userEmail)
    },
    signIn({userEmail, userPassword, shouldRemember}) {
      if (!userEmail || !userPassword) throw new Error('fill all the field to sign in')

      const accounts = JSON.parse(localStorage.getItem('userAccounts') )
      const foundAccount = accounts?.find(
        item => item.userEmail === userEmail && item.userPassword === userPassword
      )
      if (!foundAccount) throw new Error('Such a user haven\'t found')

      localStorage.setItem('prevUserAccount', JSON.stringify(foundAccount) )
      this.$patch( {...foundAccount })
    },
    signInPrevAccount() {
      const prevUserAccount = JSON.parse(localStorage.getItem('prevUserAccount') )
      if (!prevUserAccount) throw new Error('There isn\'t any saved account')

      this.$patch( {...prevUserAccount} )
    },
    signOut() {
      this.userId = this.userEmail = this.userPassword = null
    },
    deleteAccount() {
      if (!this.isSignedIn) throw new Error('sign in to recieve rules of account deletion')
      
      localStorage.removeItem('prevUserAccount')

      let userAccounts = JSON.parse(localStorage.getItem('userAccounts') )
      userAccounts = userAccounts.filter(item => item.userId != this.userId)
      localStorage.setItem('userAccounts', JSON.stringify(userAccounts) )

      this.signOut()
    },
  },
})