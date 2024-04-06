import { Stack } from "react-bootstrap";
import ITag from "../../../interface/ITag";
import Tag from "../../common/Tag";

interface FilterTagComponentProps {
    tagsToDisplay: ITag[];
    clickOnTag: (tag: ITag) => void;
    setReceptionFull: () => void;
    setDepartureFull: () => void;
}

const FilterTagComponent = (props: FilterTagComponentProps) => {
    return(
        <div id="filter-tag-reception" className="filter-tag-drop-zone mb-1">
        <Stack className="mt-0 d-flex flex-wrap justify-content-center flex-grow-1" direction="horizontal" gap={2}>
            {props.tagsToDisplay.map((tag: ITag) => (
                <span key={tag.id} onClick={() => props.clickOnTag(tag)} className="pointer-hover"
                title="cliquer pour enlever.">
                    <Tag 
                        key={tag.id} 
                        tag={tag} 
                    />
                </span>
            ))}
        </Stack>
        <div className="d-flex justify-content-center gap-4 mt-2 mb-0">
            <span onClick={() => props.setReceptionFull()} className="text-dark-orange-2 text-size-0-75 filter-tag-accordion-action-text" title="Tout ajouter.">Tout ajouter</span>
            <span onClick={() => props.setDepartureFull()} className="text-dark-orange-2 text-size-0-75 filter-tag-accordion-action-text" title="Tout enlever.">Tout enlever</span>
        </div>
    </div>
    );
}

export default FilterTagComponent;