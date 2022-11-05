import { Component } from "react";
import React  from "react";

import './directory.styles.scss'
import MenuItem from "../menu-item/menu-item.component";

class Directory extends Component {

    constructor(){
        super();

        this.state ={
            sections:[{
                title:'hats',
                imageUrl:'https://i.picsum.photos/id/646/2509/1673.jpg?hmac=HXykqhktw0TF08mbS0F3J4bxJJvJRQXG74xA4zPYW7Y',
                id:1
            },
            {
                title:'jackets',
                imageUrl:'https://i.picsum.photos/id/319/5445/2768.jpg?hmac=oZV0pFhNqKHhhKnqoPwpG3MS68TynWZVdMhaqHZ68x4',
                id:2
            },
            {
                title:'sneakers',
                imageUrl:'https://i.picsum.photos/id/103/2592/1936.jpg?hmac=aC1FT3vX9bCVMIT-KXjHLhP6vImAcsyGCH49vVkAjPQ',
                id:3
            },
            {
                title:'womens',
                imageUrl:'https://i.picsum.photos/id/1012/3973/2639.jpg?hmac=s2eybz51lnKy2ZHkE2wsgc6S81fVD1W2NKYOSh8bzDc',
                size :'large',
                id:4
            },
            {
                title:'mens',
                imageUrl:'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY',
                size :'large',
                id:5
            },
        ]
        }
    }



    render (){
        return(
            <div className="directory-menu">
                {
                this.state.sections.map(({title,imageUrl,id,size}) =>(
                    <MenuItem key={id} title={title} imageUrl = {imageUrl}  size={size}></MenuItem>
                ))
                }

            </div>

        )
    }
}

export default Directory;