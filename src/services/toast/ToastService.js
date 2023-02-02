import Toast from 'react-native-simple-toast';
import React, { Component } from 'react'; 
class ToastService extends Component {

    tostShort(_messgae) {
       Toast.show(_messgae, Toast.SHORT);
    }

    tostLong(_messgae) {
        Toast.show(_messgae, Toast.LONG);
    }

    toastTop(_messgae) {
        Toast.showWithGravity(_messgae, Toast.LONG, Toast.TOP);
    }

 }
 const toastService = new ToastService();
 export default toastService;