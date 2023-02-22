import React from 'react';
import {AiOutlineFacebook} from "react-icons/ai";
import {FaInstagramSquare, FaGithubSquare} from "react-icons/fa";

const IconBlock = () => {
    return (
        <ul>
            <li><a href="#"><AiOutlineFacebook/></a></li>
            <li><a href="#"><FaInstagramSquare/></a></li>
            <li><a href="#"><FaGithubSquare/></a></li>
        </ul>
    );
};

export default IconBlock;