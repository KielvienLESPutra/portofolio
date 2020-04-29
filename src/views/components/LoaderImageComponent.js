import React from 'react';
// import Media from 'react-bootstrap/Media'
import * as ConstantsVariable from '../../constants/ConstantData';

import '../css/ImageStyle.css';

const LoadImages = (props) => {
    if (ConstantsVariable.TYPE_IMAGES_JPG === props.type || ConstantsVariable.TYPE_IMAGES_PNG === props.type) {
        let file = props.path;
        if (null !== props.path || "" !== props.path) {
            return (
                <img
                    src={file}
                    alt="ProfilPicture"
                    className="ImageBodyStyle"
                />
            );
        }
    }
    return (
        <div>
            {/* Empty div  as return */}
        </div>
    );
}

export default LoadImages;