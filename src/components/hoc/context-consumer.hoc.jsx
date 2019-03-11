import React from "react";
import { AppContext } from "../../AppContext";

export const contextConsumer = WrappedComponent => {
    const Wrapper = parentProps => (
        <AppContext.Consumer>
            {consumerProps => (
                <WrappedComponent {...parentProps} {...consumerProps} />
            )}
        </AppContext.Consumer>
    );
    return Wrapper;
};
