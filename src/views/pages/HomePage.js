import React, { Component } from 'react';

import HomeComponent from '../components/HomeBodyComponent';

class HomePage extends Component {
    state = {
        content: {
            id: 1,
            header: "Hey, I'm Kielvien L E S Putra.",
            description: "Hello everyone i'am junior programmer from Indonesia working at one of consultant information technology. " +
                "I created system that help bussiness to grow larger and "+
                "make better bussiness with solving problem that rise from manual flow bussiness to automation bussiness.",
            resourcePath: require('../resource/oie_w1P3EUwmH427.jpg'),
            resourceType: "jpg"
        }
    }

    render() {
        return (
            <div>
                <HomeComponent key={this.state.content.id} content={this.state.content} />
            </div>
        );
    };
}

export default HomePage;