import React, { Component } from "react";
import { View, Text, ActivityIndicator, ScrollView, StatusBar, Image, ImageBackground,TouchableOpacity} from "react-native";
// import PTRView from "react-native-pull-to-refresh";

// import offerDetailsStyle from "./OfferDetailsStyle";
import ListExerciseScreenStyle from "./ListExerciseScreenStyle"

//  import CommonStyle from "../../../css/common";
// import HeaderWithBackComponent from "../../../component/HeaderWithBackComponent";
// import { OfferService, ToastService,GlobalService,AuthService } from "../../../services/AllServices";
import { Loader ,StatusBarComponent} from "../../../component/AllComponent";

export default class ListExerciseScreen extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
    }
    state = {
        isLoading: false,
        offerItem: "",
        
        yellowCount: [],
        greenStarCount: [],
    };

    componentDidMount() {
        this.props.navigation.addListener("focus", () => {
            this._isMounted = true;
           
            if (this._isMounted) {
               this.getdata();
            }
        });
    }

    getdata(){
        let data = this.props.route.params.item;
        console.log(data)
        if (this.props.route.params.item) {
            this.setState({ offerItem: this.props.route.params.item });
        }
    }

    reedomCoupon(_item){
      
        let postData = {
            offerId:_item.offer_id
        };
        this.setState({isLoading:true})
        OfferService.redeemOfferRequest(postData).then(res=>{
            this.setState({isLoading:false})
            if (res != "") {
                let array = JSON.parse(res);
                setTimeout(() => {
                    // ToastService.tostShort(array.msg)
                  }, 500);
                
                if (array.status == 5) {
                    AuthService.forceLogout().then(res=>{
                       this.props.navigation.replace("Auth")
                    }); 
                }
            }
        })
    }

    _refresh = () => {
        this.getdata();
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
               
            </View>
        );
    }
}
