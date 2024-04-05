import Accordion from 'react-bootstrap/Accordion';
import ITag from '../../../interface/ITag';
import { useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';
import Tag from '../../common/Tag';

interface AccordionGalleryProps {
    allTags: ITag[],
    setTagsForFiltering: (tags: ITag[]) => void
}
const AccordionGallery = (props: AccordionGalleryProps) => {

    const [tagsReception, setTagsReception] = useState<ITag[]>([]);
    const [tagsDeparture, setTagsDeparture] = useState<ITag[]>([]);

    useEffect(() => {
        setTagsReception(props.allTags);
        setTagsDeparture([]);
    }, [props.allTags]);

    const clickOnReceptionTag = (tag: ITag) => {
        // enlever le tag de tagsReception
        setTagsReception(() => tagsReception.filter(t => t.id !== tag.id));
        // ajouter le tag dans tagsDeparture
        setTagsDeparture([...tagsDeparture, tag]);
        props.setTagsForFiltering(tagsReception.filter(t => t.id !== tag.id));
    }

    const clickOnDepartureTag = (tag: ITag) => {
        // enlever le tag de tagsDeparture
        setTagsDeparture(tagsDeparture.filter(t => t.id !== tag.id));
        // ajouter le tag dans tagsReception
        setTagsReception([...tagsReception, tag]);
        props.setTagsForFiltering([...tagsReception, tag]);
    }
    
    return (
        <div className='d-flex flex-column align-items-center justify-content-start'>
            <Accordion className="w-100 m-0 p-1" flush>
                <Accordion.Item eventKey="1" className="mb-2">
                    <Accordion.Header>
                        <p className="title-2-bold text-white text-center mt-1">
                            <span id="accordion-bullet-contact-1" className="accordion-bullet text-orange me-1 transition-03s">•</span>
                            &nbsp;
                            <span id="accordion-title-contact-1" className="accordion-title transition-03s text-space-2">Filtrer</span>
                        </p>
                    </Accordion.Header>
                    <Accordion.Body id="filter-tag-accordion-body" className="d-flex flex-column justify-content-start align-items-center">
                        <div id="filter-tag-reception" className="filter-tag-drop-zone mt-2 mb-3">
                            <Stack className="mt-0 d-flex flex-wrap flex-start" direction="horizontal" gap={2}>
                                {tagsReception.map((tag: ITag) => (
                                    <span key={tag.id} onClick={() => clickOnReceptionTag(tag)} className='pointer-hover'>
                                        <Tag 
                                            key={tag.id} 
                                            tag={tag} 
                                        />
                                    </span>
                                ))}
                            </Stack>
                        </div>
                        <div id="filter-tag-departure" className="filter-tag-drop-zone mb-3">
                            <Stack className="mt-0 d-flex flex-wrap flex-start" direction="horizontal" gap={2}>
                                {tagsDeparture.map((tag: ITag) => (
                                    <span key={tag.id} onClick={() => clickOnDepartureTag(tag)}>
                                        <Tag 
                                            key={tag.id} 
                                            tag={tag} 
                                        />
                                    </span>
                                ))}
                            </Stack>
                        </div>

                        <p className="text-blue-5 text-center">
                            Cliquez sur les tags pour les ajouter/enlever.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>

    );
}

export default AccordionGallery;