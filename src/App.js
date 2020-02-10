import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import {submit} from "react-dom/test-utils";
import {useState, useEffect} from 'react';



function Welcome(props){
    return <h2>
        Bonjour, {props.name}
    </h2>;
}

function formatName(user){

    return user.firstName+ ' '+user.lastName;

}

class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state=>({
            isToggleOn : !state.isToggleOn

        }));

    }
    render(){
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON ' : 'OFF'}

            </button>
        );
    }

}






class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state= {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );

    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({date:new Date()});
    }
    render() {
        return (
            <div>
                <h1>
                    It is {this.state.date.toLocaleTimeString()}.
                </h1>
            </div>
        );
    }



}


/**function tick(){
    <Clock date= {new Date()} />
    return (element);
}**/


function greetingUser(user){
    if (user){
        return(<h1>Bonjour, {formatName(user)}</h1>);
    }
    return(<h1>Bonjour, inconnu</h1>)
}

function Avatar(props) {
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name}
        />
    );
}
function UserInfo(props){
    return(
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.user.name}

            </div>

        </div>
    );
}



const numbers = [1,2,3,6,5,4,0];



/**function Comment(props){
    return(
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>


        </div>
    )
}**/




function App() {


       /** <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
               React

            </a>
          </header>


        </div>  **/


   const name= 'Nicolas Wagner';
   const element1 = <h1> Bonjour {name}</h1>;


    const user ={
            firstName: 'Andrew',
            lastName: 'Pouret'
        };

    const element2 = greetingUser();


    function UserGreeting(props) {
        return <h1>Bienvenue !</h1>;
    }

    function GuestGreeting(props) {
        return <h1>Veuillez vous inscrire.</h1>;
    }


    function Greeting(props){
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn){
            return <UserGreeting/>;
        }
        return <GuestGreeting/>;
    }

    function LoginButton(props){
        return(
            <button onClick={props.onClick}>
                Connexion
            </button>
        );
    }
    function LogoutButton(props){
        return(
            <button onClick={props.onClick}>
                Deconnexion
            </button>
        );
    }
    class LoginControl extends React.Component{
            constructor(props){
                super(props);
                this.handleLoginClick = this.handleLoginClick.bind(this);
                this.handleLogoutClick = this.handleLogoutClick.bind(this);
                this.state = {isLoggedIn:false};

            }

        handleLoginClick() {
            this.setState({isLoggedIn: true});
        }

        handleLogoutClick() {
            this.setState({isLoggedIn: false});
        }

        render(){
                const isLoggedIn = this.state.isLoggedIn;
                let button;




                if (isLoggedIn){
                    button = <LogoutButton onClick={this.handleLogoutClick} />;
                } else{
                    button = <LoginButton onClick={this.handleLoginClick} />;

                }
                return(
                    <div>
                        <Greeting  isLoggedIn={isLoggedIn}/>
                        {button}
                    </div>
                );

        }
    }

    const element3 = <Welcome name = 'Matmat'/>;


    function NumberList(props) {
        const numbers = props.numbers;
        const listItems=numbers.map((number) =>
            <li key={number.toString()} value={number}>
                {number}
            </li>);

        return(
            <ul>{listItems}</ul>
        );
    }
        function ListItem(props) {

            return <li>{props.value}</li>

        }

        class NameForm extends React.Component{
        constructor(props) {
            super(props);
            this.state = {value: ''};
            this.handleChange= this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);

        }
        handleChange(event){
            this.setState({value:event.target.value.toUpperCase()});
        }

        handleSubmit(event){
            alert('Le nom a été soumis : ' + this.state.value);
            event.preventDefault();
        }

        render(){
            return(
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nom :
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Envoyer" />
                </form>
            )
        }
    }

    class EssayForm extends React.Component{
        constructor(props) {
            super(props);
            this.state = {value: 'Ecrire ici'};
            this.handleChange= this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);

        }
        handleSubmit(event){
            alert('Un essai a été envoyé : ' + this.state.value);
            event.preventDefault();
        }

        handleChange(event){
            this.setState({value: event.target.value});
        }



        render(){
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Essay:
                        <textarea
                            value = {this.state.value}  onChange={this.handleChange}/>
                    </label>

                    <input type="submit"  value="Envoyer"/>
                </form>
            );
        }
    }

    class FlavorForm extends React.Component{
        constructor(props) {
            super(props);
            this.state = {value: 'coconut'};
            this.handleChange= this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);

        }

        handleChange(event){
            this.setState({value :
                event.target.value});
        }
        handleSubmit(event){
            alert('Votre parfum favori est : ' + this.state.value);
            event.preventDefault();
        }
        render(){
            return(
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Choisissez votre parfum :
                        <select  value={this.state.value} onChange={this.handleChange}>
                            <option value = 'chocolate'>Chocolat </option>
                            <option value = 'vanilla'>Vanille </option>
                            <option value = 'caramel'>Caramel</option>
                            <option value = 'straw'>Fraise </option>
                        </select>
                    </label>
                    <input type="submit" value="Envoyer"/>
                </form>
            )
        }
    }

    class Reservation extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                isGoing : true, numberOfGuests : 2
            };
        this.handleInputChange = this.handleInputChange.bind(this);

        }
        handleInputChange(event){
            const target = event.target;
            const  value = target.type === 'checkbox'?
                target.checked : target.value;
            const name = target.name;

            this.setState({
                [name] : value
            });
        }

        render(){
            return(
                <form>
                    <label>
                        Participe :
                        <input name="isGoing"
                                type = "checkbox"
                                checked={this.state.isGoing}
                                onChange={this.handleInputChange}/>
                    </label>
                    <br/>
                    <label>
                        Nombre d'invités :
                        <input
                            name ="numberOfGuests"
                            type="number"
                            value={this.state.numberOfGuests}
                            onChange={this.handleInputChange}


                        />
                    </label>
                </form>
            );
        }
    }
    function BoilingVerdict(props) {
        if (props.celsius>= 100){
            return<p>L'eau bout.</p>;

        }
        return <p>L'eau ne bout presque</p>

    }




    const scaleNames = {
        c: 'Celsius', f: 'Fahrenheit'
    };

    class TemperatureInput extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
        }

        handleChange(e) {
            this.props.onTemperatureChange(e.target.value);
        }

        render() {
            const temperature = this.props.temperature;
            const scale = this.props.scale;
            return (
                <fieldset>
                    <legend>Saisissez la température en {scaleNames[scale]} :</legend>
                    <input value={temperature}
                           onChange={this.handleChange} />
                </fieldset>
            );
        }
    }

    function toCelsius(fahrenheit){
        return (fahrenheit - 32) * 5/9;
    }

    function toFahrenheit(celsius) {
        return(celsius*9/5)+32;

    }

    function tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if(Number.isNaN(input)){
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output*1000)/1000;
        return rounded.toString();

    }

    class Calculator  extends React.Component{
        constructor(props){
            super(props);
            this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
            this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
            this.state = {temperature : '', scale:'c'};

        }

        handleCelsiusChange(temparature){
            this.setState({scale: 'c', temparature});
        }

        handleFahrenheitChange(temparature){
            this.setState({scale: 'f', temparature});
        }

        render() {
            const scale = this.state.scale;
            const temperature = this.state.temperature;
            const celsius = scale === 'f'?
                tryConvert(temperature,toCelsius) : temperature;
            const fahrenheit = scale === 'c' ?
                tryConvert(temperature, toFahrenheit) : temperature;
            return(
                <div>
                    <TemperatureInput scale="c"
                    temperature = {celsius}
                    onTemperatureChange = {this.handleCelsiusChange}
                    />

                    <TemperatureInput scale="f"
                    temperature = {celsius}
                    onTemperatureChange = {this.handleFahrenheitChange}
                    />

                    <BoilingVerdict celsius = { parseFloat(celsius)}/>
                </div>
            );
        }

    }

    function FancyBorder(props) {
        return(
            <div className={'FancyBorder FancyBorder-' + props.color}>
                {props.children}
            </div>
        );
    }

    function WelcomeDialog() {
        return(
            <FancyBorder color={"blue"}>
                <h1 className="Dialog-title">
                    Bienvenue
                </h1>

                <p className="Dialog-message">
                    Merci de visiter notre site
                </p>
            </FancyBorder>
        );
    }


    class Compteur extends React.Component {
        constructor(props) {
            super(props);
            // this.handleChange = this.handleChange.bind(this);
            this.handleClickIncrement = this.handleClickIncrement.bind(this);
            this.handleClickDecrement = this.handleClickDecrement.bind(this);
            this.state = {value : 0};

        }

        handleClickIncrement(event){
            this.setState({value : this.state.value +1} )
        }

        handleClickDecrement(event){
            this.setState({value : this.state.value -1} )
        }

        render(){
            const value = this.state.value;
            return(
                <div>
                    <h1> {value}</h1>
                   <button onClick={this.handleClickIncrement}>
                       +1
                   </button>

                    <button onClick={this.handleClickDecrement}>
                       -1
                   </button>
                </div>


            )
        }




    }


    function ExampleWithManySates() {
        const [age,setAge] = useState(42);

        const [fruit, setFruit] = useState('banane');

    }

    function Example() {

        const [count,setCount] = useState(0);

        useEffect(()=> {
            document.title = `Vous avez cliqué ${count} fois`;
            }

        );

        return(
            <div>
                <p>
                    Vous avez cliqué {count} fois
                </p>

                <button onClick={()=> setCount(count+1)}>
                    Cliquez ici
                </button>
            </div>
        );


    }




    function Todo() {
        const [value, setValue] = useState('');
        const [id,setId] = useState(0);
        const [isRemoved,setIsRemoved] = useState(false);

        return(
            <div>
                <button onClick={setIsRemoved(true)}>
                    REMOVE
                </button>
                <p>
                    {value}
                </p>
            </div>
        )
    }
    
    function inputHandle() {
        
    }

    function TodoList() {
        const [lign,setLign] = useState(<Todo/>);

        handleSubmit(event){
            lign.setValue({e});
        }
        return(
            <div>
                <h1>React Todos</h1>
                <input/>
                <button>
                    Submit
                </button>


            </div>
                );

    }




        return (<Example/>);

}



export default App;

