import React from "react";
import { useAccess } from 'umi';
const index = () => {
    const access = useAccess();

    console.log(access)

    return (
        <div>Admin index</div>
    )
}


export default index