import React from 'react';

//import Cards from './components/Cards/Cards';

//import Charts from './components/Charts/Charts';

//import Country from './components/Country/Country';

import {Cards , Charts , Country } from './components';
import styles from './App.module.css';

import {fetchData} from './api';




class App extends React.Component{
state = {
    data : {}
}



async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data : fetchedData})
}

        render(){
            const {data} = this.state;
            return(
                <div className={styles.container}> 
                    <Cards data = {data} />
                    <Country />
                    <Charts/>
                </div>
            )
        }

}

export default App;