import React, { Component } from 'react';

// import HeaderComponent from '../components/HeaderBodyComponent';
import BodyComponent from '../components/BodyComponent';

class HomePage extends Component {
    state = {
        content: {
            id: 1,
            header: "Hey, I'm Kielvien L E S Putra.",
            description: "Hello everyone i'am junior programmer from Indonesia working at one of consultant information technology. " +
                "I created system that help bussiness to grow larger and "+
                "make better bussiness with solving problem that rise from manual flow bussiness to automation bussiness.",
            resourcePath: require('../resource/Rem-example.jpg'),
            resourceType: "jpg"
        }
    }

    render() {
        return (
            <div>
                {/* <HeaderComponent /> */}
                <BodyComponent content={this.state.content} />
            </div>
        );
    };
}

export default HomePage;