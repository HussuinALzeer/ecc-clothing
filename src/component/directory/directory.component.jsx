import React  from "react";

import { connect } from "react-redux";
import { selectdirectorySection } from "../../redux/directory/directory.selecter";
import { createStructuredSelector } from "reselect";

import './directory.styles.scss'
import MenuItem from "../menu-item/menu-item.component";

const Directory = ({sections})=>  {

        return(
            <div className="directory-menu">
                {
                sections.map(({id ,...otherSection}) =>(
                    <MenuItem key={id} id={id} {...otherSection} ></MenuItem>
                ))
                }

            </div>

        )
    
}

const mapStateToProps = createStructuredSelector({
sections : selectdirectorySection
})

export default connect(mapStateToProps)(Directory);