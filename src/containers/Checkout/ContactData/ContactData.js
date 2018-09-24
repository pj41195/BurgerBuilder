import React , {Component} from 'react';
 
import classes from './ContactData.css';
import axios from '../../../axios-order';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
        state = {
            name:'',
            email:'',
            address:{
                street:'',
                postalCode:''
            },
            loading:false
        }

        orderHandler = (event)=> {
            event.preventDefault();
                   this.setState({loading : true});
        const order ={
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Praval Jain',
                address: {
                    street: 'HSR',
                    zipCode:500021,
                    country:'India'
                },
                email:'teat@test,com'
            },
            deliveryMethod:'fastest'
        }
    axios.post('/orders.json', order)
    .then(response => {
        this.setState({ 
            loading: false , 
            purchasing: false,});
            this.props.history.push('/');
    })
    .catch(error => {
        this.setState({ loading: false, purchasing: false });
        });
        }
            render() {
                let form = (
                    <form>
                    <input className={classes.Input} type="text" name="name" placeholder="your Name"/>
                    <input className={classes.Input}  type="email" name="email" placeholder="your email"/>
                    <input className={classes.Input}  type="text" name="street" placeholder="your street"/>
                    <input className={classes.Input}  type="text" name="postal" placeholder="your Postal Code"/>
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
                );
                if(this.state.loading) {
                    form = <Spinner />
                }
                return(
                    <div className={classes.ContactData}>
                        <h4>Enter your contact detail</h4>
                        {form}
                    </div>
                );
            }
        
 }

 export default ContactData;