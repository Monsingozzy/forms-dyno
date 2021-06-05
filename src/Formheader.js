import React from 'react'

import {FiStar, FiSettings, FiAlignCenter} from "react-icons/fi"
import {AiOutlineEye} from 'react-icons/ai'
import {  IconButton } from '@material-ui/core'

import {IoMdFolderOpen} from "react-icons/io"

import ColorLensIcon from '@material-ui/icons/ColorLens';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import "./Formheader.css"
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider'
import AlertDialog from './Alert';

function Formheader() {
    const history = useHistory();
  const [{doc_name}, dispatch] = useStateValue();


    function navigates(){
        history.push("/response")
    }

    return (
        <div className="form_header">
            <div className="form_header_left">
            
                
            </div>

            <div className="form_header_right">
               
{/* 
                <IconButton onClick={navigates} target="blank" >
                    <AiOutlineEye className="form_header_icon" style={{height:"120px",width:"120px"}} />
                </IconButton> */}


               
                 {/* <AlertDialog /> */}
             
              
                {/* <Button variant="contained" color="primary" href="#contained-buttons">Send</Button> */}
               
                
            </div>
           
        </div>
    )
}

export default Formheader
