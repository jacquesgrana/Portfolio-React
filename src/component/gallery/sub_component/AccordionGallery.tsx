import Accordion from 'react-bootstrap/Accordion';
import ITag from '../../../interface/ITag';
import { useEffect, useState } from 'react';
import SortComponent from './SortComponent';
import FilterTagComponent from './FilterTagComponent';

interface AccordionGalleryProps {
    allTags: ITag[],
    setTagsForFiltering: (tags: ITag[]) => void,
    handleToggleAccordion: () => void,
    updateSortType: (type: string) => void
    sortTypeComment: string
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
                        <span id="accordion-bullet-gallery" className="accordion-bullet text-orange me-1 transition-03s">•</span> <span id="accordion-title-contact-1" className="accordion-title transition-03s text-space-2">Trier & Filtrer</span>
                    </h3>
                    </Accordion.Header>
                    <Accordion.Body id="filter-tag-accordion-body" className="d-flex flex-column justify-content-start align-items-center">
                        <h4 className="text-blue-5 mt-2 mb-1">
                            Tri&nbsp;<span className="text-dark-orange text-size-0-75">{props.sortTypeComment}</span>
                        </h4>
                        <SortComponent 
                            updateSortType={props.updateSortType}
                        />
                        <h4 className="text-blue-5 mt-2 mb-0">Filtres</h4>
                        <div className="mt-1 filter-tag-div-title mb-1">
                            Tags actifs
                        </div>
                        <FilterTagComponent 
                            tagsToDisplay={tagsReception}
                            clickOnTag={clickOnReceptionTag}
                            setReceptionFull={setReceptionFull}
                            setDepartureFull={setDepartureFull}
                        />
                        <div className="mt-1 mb-1 filter-tag-div-title">
                            Tags inactifs
                        </div>
                        <FilterTagComponent 
                            tagsToDisplay={tagsDeparture}
                            clickOnTag={clickOnDepartureTag}
                            setReceptionFull={setReceptionFull}
                            setDepartureFull={setDepartureFull}
                        />
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

/*

                        <div className="filter-tag-sort-zone mb-3">
                            <Stack className="mt-0 d-flex flex-wrap justify-content-center" direction="horizontal" gap={2}>
                                <Button 
                                className="btn-1 btn-sm bg-blue-3 text-blue-5" 
                                //onClick={}
                                title="Trier par date ascendant"
                                >
                                    Date Asc
                                </Button>
                            </Stack>
                        </div>



                        <div id="filter-tag-reception" className="filter-tag-drop-zone mb-1">
                            <Stack className="mt-0 d-flex flex-wrap justify-content-center flex-grow-1" direction="horizontal" gap={2}>
                                {tagsReception.map((tag: ITag) => (
                                    <span key={tag.id} onClick={() => clickOnReceptionTag(tag)} className="pointer-hover"
                                    title="cliquer pour enlever.">
                                        <Tag 
                                            key={tag.id} 
                                            tag={tag} 
                                        />
                                    </span>
                                ))}
                            </Stack>
                            <div className="d-flex justify-content-center gap-4 mt-2 mb-0">
                                <span onClick={() => setReceptionFull()} className="text-dark-orange-2 text-size-0-75 filter-tag-accordion-action-text" title="Tout ajouter.">Tout ajouter</span>
                                <span onClick={() => setDepartureFull()} className="text-dark-orange-2 text-size-0-75 filter-tag-accordion-action-text" title="Tout enlever.">Tout enlever</span>
                            </div>
                        </div>

                                                <div id="filter-tag-departure" className="filter-tag-drop-zone mb-3">
                            <Stack className="mt-0 d-flex flex-wrap justify-content-center flex-grow-1" direction="horizontal" gap={2}>
                                {tagsDeparture.map((tag: ITag) => (
                                    <span key={tag.id} onClick={() => clickOnDepartureTag(tag)} className="pointer-hover"
                                    title="cliquer pour enlever.">
                                        <Tag 
                                            key={tag.id} 
                                            tag={tag} 
                                        />
                                    </span>
                                ))}
                            </Stack>
                            <div className="d-flex justify-content-center gap-4 mt-2 mb-0">
                                <span onClick={() => setDepartureFull()} className="text-dark-orange-2 text-size-0-75 filter-tag-accordion-action-text" title="Tout ajouter.">Tout ajouter</span>
                                <span onClick={() => setReceptionFull()} className="text-dark-orange-2 text-size-0-75 filter-tag-accordion-action-text" title="Tout enlever.">Tout enlever</span>
                            </div>
                        </div>
                        */