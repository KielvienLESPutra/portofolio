import React, { Component } from 'react';
import ExperianceBodyComponenet from '../components/ExperianceBodyComponent';

class ExperiancePage extends Component {
    state = {
        content: {
            id: 2,
            header: "Experiance",
            description: "I have been around 2 year work as programmer since 2016 until now. " +
                "My past archive project in that time variatif from small project to large project,"+
                "as full stack developer or as spesific role. "+
                "Right now I work as junior backend developer at one of consultant company in Indonesia. ",
            resourcePath: require('../resource/pie-graph-experiance-transpalant.png'),
            resourceType: "jpg"
        }
    }

    render() {
        return (
            <div>
                <ExperianceBodyComponenet key={this.state.content.id} content={this.state.content} />
            </div>
        );
    }
}

export default ExperiancePage;