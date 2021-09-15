import React, { Component } from "react";
import YouTubeCom from "../../components/YouTubeCom/YouTubeCom";
import Product from "../Product/Product";


class Home extends Component{
    render(){
        return(
            <div>
                {/* <p>YouTube Components</p>
                <hr />
                <YouTubeCom time="7.12" title="Tutorial Masak Air" desc="lorem ipsum dolor sit amet"/>
                <YouTubeCom time="8.14" title="Video Lucu Anak" desc="lorem ipsum dolor sit amet"  />
                <YouTubeCom time="2.34" title="Makanan Favorit Abah" desc="lorem ipsum dolor sit amet"  />
                <YouTubeCom time="5.09" title="Review Skin Care" desc="lorem ipsum dolor sit amet"  />
                <YouTubeCom /> */}
                <p>Counter</p>
                <hr />
                <Product />
            </div>
        )
    }
}

export default Home