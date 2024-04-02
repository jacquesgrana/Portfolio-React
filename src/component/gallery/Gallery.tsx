import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
//import data from "../../asset/json/tags.json";
import ITag from "../../interface/ITag";

import Stack from 'react-bootstrap/Stack';
import Tag from "../common/Tag";
import JsonService from '../../service/JsonService';
const Gallery = () => {

    const [tags, setTags] = useState<ITag[]>([]);
    const jsonService: JsonService = JsonService.getInstance();
    
    useEffect(() => {

        const fct = async () => {
            const tagsFromJson = await jsonService.getTags();
            setTags(tagsFromJson);
            console.log('data :', tagsFromJson);
            console.log('tags[0] :', tagsFromJson[0]);
        }
        fct();
      }, []);
    
    return (
        <div id="app-gallery">
            <h2 className="title-1-bold text-white text-center mb-5 text-space-3">Galerie</h2>
                <Stack className="d-flex flex-wrap" direction="horizontal" gap={2}>
                    {tags.map((tag: ITag) => (
                        <Tag key={tag.id} tag={tag} />
                    ))}
                </Stack>

        </div>
    );

}
export default Gallery;