import { useEffect, useState } from "react";
import { Button, Stack } from "react-bootstrap";

interface SortComponentProps {
    updateSortType: (type: string) => void
}
const SortComponent = (props: SortComponentProps) => {

    const [sortType, setSortType] = useState<string>("difficulty_desc");

    useEffect(() => {
        props.updateSortType(sortType);
    }, [sortType]);
    
    return (
        <div className="filter-tag-sort-zone mb-3">
            <Stack className="mt-0 d-flex flex-wrap justify-content-center" direction="horizontal" gap={3}>
                <div className="d-flex flex-column align-items-center justify-content-start flex-wrap">
                    <p className="text-blue-5 text-size-1 text-center mb-1">Difficulté</p>
                    <div className="d-flex justify-content-center gap-2">
                        <Button 
                        className="btn-1 btn-sm bg-blue-3 text-blue-5" 
                        onClick={() => setSortType("difficulty_asc")}
                        title="Trier par difficulté ascendant"
                        >
                            Acsendant
                        </Button>
                        <Button 
                        className="btn-1 btn-sm bg-blue-3 text-blue-5" 
                        onClick={() => setSortType("difficulty_desc")}
                        title="Trier par difficulté descendante"
                        >
                            Descendant
                        </Button>
                    </div>
                </div>
                
                <div className="d-flex flex-column align-items-center justify-content-start flex-wrap">
                    <p className="text-blue-5 text-size-1 text-center mb-1">Nom</p>
                    <div className="d-flex justify-content-center gap-2">
                        <Button 
                        className="btn-1 btn-sm bg-blue-3 text-blue-5" 
                        onClick={() => setSortType("title_asc")}
                        title="Trier par titre ascendant"
                        >
                            Acsendant
                        </Button>
                        <Button 
                        className="btn-1 btn-sm bg-blue-3 text-blue-5" 
                        onClick={() => setSortType("title_desc")}
                        title="Trier par titre descendante"
                        >
                            Descendant
                        </Button>
                    </div>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-start flex-wrap">
                    <p className="text-blue-5 text-size-1 text-center mb-1">Date</p>
                    <div className="d-flex justify-content-center gap-2">
                        <Button 
                        className="btn-1 btn-sm bg-blue-3 text-blue-5" 
                        onClick={() => setSortType("date_asc")}
                        title="Trier par date ascendant"
                        >
                            Acsendant
                        </Button>
                        <Button 
                        className="btn-1 btn-sm bg-blue-3 text-blue-5" 
                        onClick={() => setSortType("date_desc")}
                        title="Trier par date descendante"
                        >
                            Descendant
                        </Button>
                </div>
                </div>
            </Stack>
        </div>
    );
}

export default SortComponent;