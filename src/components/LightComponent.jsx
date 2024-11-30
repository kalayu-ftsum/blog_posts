import PropTypes from 'prop-types';

import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';


import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export default function Gallery({
    children
}) {
    const onInit = () => {
      
    };
    return (
        <div className="App">
            <LightGallery
               selector={'.image-link'}
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
               {children}
            </LightGallery>
        </div>
    );
}


Gallery.propTypes = {
    children: PropTypes.node.isRequired
}