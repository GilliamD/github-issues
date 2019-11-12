import React from "react";
import { container, Box } from "bloomer";

const Wrapper = props => {
    return(
        <container>
            <Box>{props.children}</Box>
        </container>
    )
}

export default Wrapper;