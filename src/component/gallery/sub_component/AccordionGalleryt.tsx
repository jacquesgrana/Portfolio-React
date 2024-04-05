import Accordion from 'react-bootstrap/Accordion';
import ITag from '../../../interface/ITag';
import { useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';
import Tag from '../../common/Tag';

interface AccordionGalleryProps {
    allTags: ITag[],
    setTagsForFiltering: (tags: ITag[]) => void,
    handleToggleAccordion: () => void
}
const AccordionGallery = (props: AccordionGalleryProps) => {

    const [tagsReception, setTagsReception] = useState<ITag[]>([]);
    const [tagsDeparture, setTagsDeparture] = useState<ITag[]>([]);

    useEffect(() => {
        setTagsReception(props.allTags);
        setTagsDeparture([]);
    }, [props.allTags]);

    const clickOnReceptionTag = (tag: ITag) => {
        setTagsReception(() => tagsReception.filter(t => t.id !== tag.id));
        setTagsDeparture([...tagsDeparture, tag]);
        props.setTagsForFiltering(tagsReception.filter(t => t.id !== tag.id));
    }

    const clickOnDepartureTag = (tag: ITag) => {
        setTagsDeparture(tagsDeparture.filter(t => t.id !== tag.id));
        setTagsReception([...tagsReception, tag]);
        props.setTagsForFiltering([...tagsReception, tag]);
    }

    const setReceptionFull = () => {
        if(tagsReception.length < props.allTags.length && tagsDeparture.length > 0)
        {
            setTagsReception(props.allTags);
            setTagsDeparture([]);
            props.setTagsForFiltering(props.allTags);
        }
    }

    const setDepartureFull = () => {
        if(tagsDeparture.length < props.allTags.length && tagsReception.length > 0)
        {
            setTagsReception([]);
            setTagsDeparture(props.allTags);
            props.setTagsForFiltering([]);
        }
    }
    
    return (
        <div className='d-flex flex-column align-items-center justify-content-start'>
            <Accordion onSelect={() => props.handleToggleAccordion()} flush>
                <Accordion.Item eventKey="1" className="mb-2">
                    <Accordion.Header>
                    <h3 id="accordion-title-gallery" className="title-2-bold text-white text-center mt-2 ms-0">
                        <span id="accordion-bullet-gallery" className="accordion-bullet text-orange me-1 transition-03s">•</span> <span id="accordion-title-contact-1" className="accordion-title transition-03s text-space-2">Filtrer</span>
                    </h3>
                    </Accordion.Header>
                    <Accordion.Body id="filter-tag-accordion-body" className="d-flex flex-column justify-content-start align-items-center">
                        <div className="mt-2 filter-tag-div-title mb-2">
                            Tags actifs
                        </div>
                        <div id="filter-tag-reception" className="filter-tag-drop-zone mb-3">
                            <Stack className="mt-0 d-flex flex-wrap justify-content-center flex-grow-1" direction="horizontal" gap={2}>
                                {tagsReception.map((tag: ITag) => (
                                    <span key={tag.id} onClick={() => clickOnReceptionTag(tag)} className="pointer-hover">
                                        <Tag 
                                            key={tag.id} 
                                            tag={tag} 
                                        />
                                    </span>
                                ))}
                            </Stack>
                            <div className="d-flex justify-content-center gap-4 mt-2 mb-0">
                                <span onClick={() => setReceptionFull()} className="text-dark-orange text-size-0-75 pointer-hover">Tout ajouter</span>
                                <span onClick={() => setDepartureFull()} className="text-dark-orange text-size-0-75 pointer-hover">Tout enlever</span>
                            </div>
                        </div>
                        <div className="mt-2 mb-2 filter-tag-div-title">
                            Tags inactifs
                        </div>
                        <div id="filter-tag-departure" className="filter-tag-drop-zone mb-3">
                            <Stack className="mt-0 d-flex flex-wrap justify-content-center flex-grow-1" direction="horizontal" gap={2}>
                                {tagsDeparture.map((tag: ITag) => (
                                    <span key={tag.id} onClick={() => clickOnDepartureTag(tag)}>
                                        <Tag 
                                            key={tag.id} 
                                            tag={tag} 
                                        />
                                    </span>
                                ))}
                            </Stack>
                            <div className="d-flex justify-content-center gap-4 mt-2 mb-0">
                                <span onClick={() => setDepartureFull()} className="text-dark-orange text-size-0-75 pointer-hover">Tout ajouter</span>
                                <span onClick={() => setReceptionFull()} className="text-dark-orange text-size-0-75 pointer-hover">Tout enlever</span>
                            </div>
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