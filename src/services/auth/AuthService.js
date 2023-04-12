import React, { Component } from 'react'; 
import * as myConstClass from '../../config/constant';
import requestHandler from '../../helper/RequestHandler'
import AsyncStorage from "@react-native-async-storage/async-storage";
class AuthService extends Component {
   
    postMethod = "POST";
    getMethod = "GET";
    getlanguageEndpoint = null
    countriesArrayEndpoint = null
    statesArrayEndpoint = null
    loginEndpoint=null
    registerEndpoint=null
    getPackageEndpoint=null
    appBuyEndpoint=null
    userChargeEndpoint=null
    getavtarEndpoint=null
    validateEndpoint=null
    changePasswordEndpoint=null
    getProfileDataEndpoint=null
    updateProfileDataEndpoint=null
    getPackageDataEndpoint=null
    sendOtpEndpoint=null
    validateOtpEndpoint=null
    saveChangeResetPasswordEndpoint=null
    getProductTourEndpoint=null
    storeFIngerDataEndpoint=null
    DeleteUserDataEndPoint=null
    getReffralEndpoint=null
    logoutEndpoint=null
    checkAppUpdateAvailableEndpoint=null

    gradeEndpoint = null
    subjectEndpoint = null
    lessonEndpoint = null

    constructor(props){  
        super(props);  
        this.getlanguageEndpoint= myConstClass.API_BASE_URL+myConstClass.GET_lANGUAGE_LABELS;
        this.sendOtpEndpoint= myConstClass.API_BASE_URL+myConstClass.SEND_OTP_FOR_FORGET_PASSWORD;
        this.validateOtpEndpoint= myConstClass.API_BASE_URL+myConstClass.VALIDATE_OTP;
        this.saveChangeResetPasswordEndpoint= myConstClass.API_BASE_URL+myConstClass.CHANGE_RESET_PASSWORD;
        this.checkAppUpdateAvailableEndpoint= myConstClass.API_BASE_URL+myConstClass.APP_UPDATE_CHECK;
      

        this.statesArrayEndpoint= myConstClass.API_BASE_URL+myConstClass.STATES_ARRAY_URL;
        this.loginEndpoint= myConstClass.API_BASE_URL+myConstClass.LOGIN_URL;
        this.registerEndpoint= myConstClass.API_BASE_URL+myConstClass.REGISTER_URL;
        this.getPackageEndpoint= myConstClass.API_BASE_URL+myConstClass.GET_PACKAGE_URL;
        this.appBuyEndpoint= myConstClass.API_BASE_URL+myConstClass.APP_BUY_PACKAGE_URL;
        this.userChargeEndpoint= myConstClass.API_BASE_URL+myConstClass.USER_CHARGE_PACKAGE_URL;
        this.validateEndpoint= myConstClass.API_BASE_URL+myConstClass.VALIDATE_URL;
        this.changePasswordEndpoint= myConstClass.API_BASE_URL+myConstClass.CHANGE_PASSWORD_URL;
        this.getProfileDataEndpoint= myConstClass.API_BASE_URL+myConstClass.GET_PROFILE_DATA_URL;
        this.updateProfileDataEndpoint= myConstClass.API_BASE_URL+myConstClass.UPDATE_PROFILE_DATA_URL;
        this.getPackageDataEndpoint= myConstClass.API_BASE_URL+myConstClass.UPDATE_PACKAGE_DATA_URL;
        this.getProductTourEndpoint= myConstClass.API_BASE_URL+myConstClass.GET_GUEST_USER_PRODUCT_TOUR;
        this.storeFIngerDataEndpoint= myConstClass.API_BASE_URL+myConstClass.UPDATE_FINGER_DATA;
        this.logoutEndpoint= myConstClass.API_BASE_URL+myConstClass.LOGOUT_URL;
        this.DeleteUserDataEndPoint= myConstClass.API_BASE_URL+myConstClass.DELETE_USER_ACCOUNT_URL;
        this.getReffralEndpoint= myConstClass.API_BASE_URL+myConstClass.GETUSER_REFRAL_CODE;






        this.gradeEndpoint= myConstClass.EAPI_BASE_URL+myConstClass.GRADE_URL;
        this.subjectEndpoint= myConstClass.EAPI_BASE_URL+myConstClass.SUBJECT_URL;
        this.lessonEndpoint= myConstClass.EAPI_BASE_URL+myConstClass.LESSON_URL;
        this.countriesArrayEndpoint= myConstClass.EAPI_BASE_URL+myConstClass.COUNTRIES_ARRAY_URL;
        this.statesArrayEndpoint= myConstClass.EAPI_BASE_URL+myConstClass.STATES_ARRAY_URL;
        this.getavtarEndpoint= myConstClass.EAPI_BASE_URL+myConstClass.GET_AVTAR_URL;
        this.registerEndpoint= myConstClass.EAPI_BASE_URL+myConstClass.REGISTER_URL;







      }

    getLanguageData(getData) {
        let state = this;
        return new Promise(function(resolve) {
            requestHandler.apiRequest(state.getlanguageEndpoint+getData.id,state.postMethod).then(response=>{
                resolve(response)
           }).catch(error=>{
                resolve(error);
           })
        })
    }

    getLessonList(postData) {
        let state = this;
        console.log(postData,"postData")
        return new Promise(function(resolve) {
            requestHandler.apiRequest(state.lessonEndpoint,state.postMethod,postData).then(response=>{
                console.log(response,"userdata")
                resolve(response)
           }).catch(error=>{
                resolve(error);
           })
        })
    }

    getSubjectList(postData) {
        let state = this;
        console.log(postData,"postData")
        return new Promise(function(resolve) {
            requestHandler.apiRequest(state.subjectEndpoint,state.postMethod,postData).then(response=>{
                console.log(response,"userdata")
                resolve(response)
           }).catch(error=>{
                resolve(error);
           })
        })
    }


    getStudentGradeList() {
        let state = this;
        return new Promise(function(resolve) {
            requestHandler.apiRequest(state.gradeEndpoint,state.postMethod).then(response=>{
                console.log(response,"userdata")
                resolve(response)
           }).catch(error=>{
                resolve(error);
           })
        })
    }

    getCountriesArray() {
        let state = this;
        return new Promise(function(resolve) {
          
            requestHandler.apiRequest(state.countriesArrayEndpoint,state.postMethod).then(response=>{
            
                resolve(response)
              
           }).catch(error=>{
                resolve(error);
           })
        })
    }

    getStatesArray(_getdata) {
      
        let state = this;
        console.log(state.statesArrayEndpoint+_getdata)
        return new Promise(function(resolve) {
            console.log("StateApiCode",state.statesArrayEndpoint+_getdata)
            requestHandler.apiRequest(state.statesArrayEndpoint+_getdata,state.postMethod).then(response=>{
                console.log("statessApiCodeResponse",response)
                resolve(response)
           }).catch(error=>{
                resolve(error);
           })
        })
    }

    getAvtar() {
        let state = this;
        console.log("avatarCode",state.getavtarEndpoint)
        return new Promise(function(resolve) {
            requestHandler.apiRequest(state.getavtarEndpoint,state.postMethod).then(response=>{
                console.log()
                
                resolve(response)
           }).catch(error=>{
                resolve(error);
           })
        })
    }

    validateUser(getData) {
        let state = this;
        return new Promise(function(resolve) {
            requestHandler.apiRequest(state.validateEndpoint,state.postMethod,getData).then(response=>{
                resolve(response)
           }).catch(error=>{
                resolve(error);
           })
        })
    }

    getProductTour() {
        let state = this;
        return new Promise(function(resolve) {
            requestHandler.apiRequest(state.getProductTourEndpoint,state.postMethod).then(response=>{
                resolve(response)
           }).catch(error=>{
                resolve(error);
           })
        })
    }

    getpackage() {
        let state = this;
        return new Promise(function(resolve) {
            requestHandler.apiRequest(state.getPackageEndpoint,state.postMethod).then(response=>{
                resolve(response)
           }).catch(error=>{
                resolve(error);
           })
        })
    }


    registerUser(postData) {
        let state = this;
        return new Promise(function(resolve) {
            requestHandler.apiRequest(state.registerEndpoint,state.postMethod,postData).then(response=>{
                resolve(response)
           }).catch(error=>{
                resolve(error);
           })
        })
    }

    appBuyPlan(postData) {
        let state = this;
        return new Promise(function(resolve) {
            requestHandler.apiRequest(state.appBuyEndpoint,state.postMethod,postData).then(response=>{
                resolve(response)
           }).catch(error=>{
                resolve(error);
           })
        })
    }

    chargeUser(postData) {
        let state = this;
        return new Promise(function(resolve) {
            requestHandler.apiRequest(state.userChargeEndpoint,state.postMethod,postData).then(response=>{
                resolve(response)
           }).catch(error=>{
                resolve(error);
           })
        })
    }


    changePassword(postData) {
        let state = this;
        return new Promise(function(resolve) {
            requestHandler.apiGetRequestWithToken(state.changePasswordEndpoint,state.postMethod,postData).then(response=>{
                resolve(response)
           }).catch(error=>{
                resolve(error);
           })
        })
    }


    authenticate(postData) {
        console.log(postData)
        let state = this;
        return new Promise(function(resolve) {
            requestHandler.apiRequest(state.loginEndpoint,state.postMethod,postData).then(response=>{
                resolve(response)
           }).catch(error=>{
                resolve(error);
           })
        })
    }

    sentresetPasswordEmail(postData) {
        console.log(postData)
        let state = this;
        return new Promise(function(resolve) {
            requestHandler.apiRequest(state.sendOtpEndpoint,state.postMethod,postData).then(response=>{
                resolve(response)
           }).catch(error=>{
                resolve(error);
           })
        })
    }
    validateOtpEmail(postData) {
        console.log(postData)
        let state = this;
        return new Promise(function(resolve) {
            requestHandler.apiRequest(state.validateOtpEndpoint,state.postMethod,postData).then(response=>{
                resolve(response)
           }).catch(error=>{
                resolve(error);
           })
        })
    }
    saveNewPassword(postData) {
        console.log(postData)
        let state = this;
        return new Promise(function(resolve) {
            requestHandler.apiRequest(state.saveChangeResetPasswordEndpoint,state.postMethod,postData).then(response=>{
                resolve(response)
           }).catch(error=>{
                resolve(error);
           })
        })
    }



    checkAppUpdateAvailable(postData) {
        console.log(postData)
        let state = this;
        return new Promise(function(resolve) {
            requestHandler.apiRequest(state.checkAppUpdateAvailableEndpoint,state.postMethod,postData).then(response=>{
                resolve(response)
           }).catch(error=>{
                resolve(error);
           })
        })
    }

    getProfileData(postData) {
        console.log(postData)
        let state = this;
        return new Promise(function(resolve) {
            requestHandler.apiGetRequestWithToken(state.getProfileDataEndpoint,state.postMethod,postData).then(response=>{
                resolve(response)
           }).catch(error=>{
                resolve(error);
           })
        })
    }

    getPackageData(postData) {
        console.log(postData)
        let state = this;
        return new Promise(function(resolve) {
            requestHandler.apiGetRequestWithToken(state.getPackageDataEndpoint,state.postMethod,postData).then(response=>{
                resolve(response)
           }).catch(error=>{
                resolve(error);
           })
        })
    }

    updateProfileData(postData) {
        console.log(postData)
        let state = this;
        return new Promise(function(resolve) {
            requestHandler.apiGetRequestWithToken(state.updateProfileDataEndpoint,state.postMethod,postData).then(response=>{
                resolve(response)
           }).catch(error=>{
                resolve(error);
           })
        })
    }
    storeFingerData(postData) {
        //console.log(postData)
        let state = this;
        return new Promise(function(resolve) {
            requestHandler.apiGetRequestWithToken(state.storeFIngerDataEndpoint,state.postMethod,postData).then(response=>{
                resolve(response)
           }).catch(error=>{
                resolve(error);
           })
        })
    }

    forceLogout() {
        ///console.log(postData)
        let state = this;
        console.log('logout url',state.logoutEndpoint)
        return new Promise(function(resolve) {
            requestHandler.apiGetRequestWithToken(state.logoutEndpoint,state.postMethod).then(response=>{
            
                console.log('logout response---------------===========================================>',response)
                AsyncStorage.multiSet(
                    [
                        ["token", ''],
                        ["currency",''],
                        ["userData", ''],
                        ["isbiometric",''],
                    ],
                    async (error) => {
                      
                    }
                );
                resolve(response)
           }).catch(error=>{
                resolve(error);
           })
        })
    }

     
        logoutUser() {
            let state = this;
            return new Promise(function(resolve) {
                requestHandler.apiGetRequestWithToken(state.logout,state.postMethod).then(response=>{
                    resolve(response)
               }).catch(error=>{
                    resolve(error);
               })
            })
        }

        deleteUserAccount(){
            console.log("Delete UserAccount response Testttt----");
            let state = this;
            return new Promise(function(resolve) {
                requestHandler.apiGetRequestWithToken(state.DeleteUserDataEndPoint,state.postMethod).then(response=>{
                    resolve(response)
               }).catch(error=>{
                    resolve(error);
               })
            })
    
           } 


           getRefralCode() {
            let state = this;
            return new Promise(function(resolve) {
                requestHandler.apiRequest(state.getReffralEndpoint,state.postMethod).then(response=>{
                    resolve(response)
               }).catch(error=>{
                    resolve(error);
               })
            })
        }

  }
  const authService = new AuthService();
  export default authService;