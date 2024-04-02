import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../../asset/json/tags.json";
import ITag from "../../interface/ITag";
const Gallery = () => {

    const [tags, setTags] = useState<ITag[]>([]);
    
    useEffect(() => {
        // Load the JSON data when the component mounts
        setTags(data.tags);
        //console.log('data :', data.tags);
      }, []);
    
    return (
        <div id="app-gallery">
            <h2 className="title-1-bold text-white text-center mb-5 text-space-3">Galerie</h2>
        </div>
    );

}
export default Gallery;