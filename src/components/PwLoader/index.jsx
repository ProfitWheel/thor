import React from 'react';
import reactDom from 'react-dom';

export default function PwLoader(props) {
    return reactDom.createPortal(
        <>
            {
                props.loading
                    ? (
                        <div className="pw-loader">
                            <div>
                            {/* <img className="spinnerrotate" src="/images/spinner.png" alt="loader" /> */}
                            <div class="arc arc1"></div>
                            <div class="arc arc2"></div>
                            <div class="arc arc3"></div>
                            <div class="arc arc4"></div>
                            </div>
                        </div>
                    )
                    : null
            }
        </>,
        document.getElementById('pw-loader')
    )
}
