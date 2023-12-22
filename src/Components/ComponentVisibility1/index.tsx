import React, { useState } from "react";
function ComponentVisibility() {
    const [isVisible, setIsVisible] = useState(false);
    
    const handleVisibility = () => {
        setIsVisible(!isVisible);
    };
    
    return (
        <>
        <h1>ComponentVisibility One</h1>
        </>
        
    );
    }
    export default ComponentVisibility;