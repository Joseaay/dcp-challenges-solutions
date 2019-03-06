import React from "react";

export const AppContext = React.createContext({
    selectedTab: 1,
    changeTab: () => {}
});
