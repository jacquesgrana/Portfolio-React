import { useEffect, useState } from "react";
import { Button, Stack } from "react-bootstrap";

interface SortComponentProps {
    updateSortType: (type: string) => void
}

//TODO eclater les props
const SortComponent = ({updateSortType}: SortComponentProps) => {

    const [sortType, setSortType] = useState<string>("difficulty_desc");

    useEffect(() => {
        setSortType("difficulty_desc");
        updateButtons("difficulty_desc");
    }, []);

    useEffect(() => {
        updateSortType(sortType);
        updateButtons(sortType);
        //console.log('sortType', sortType);
    }, [sortType, updateSortType]);

    const updateButtons = (type: string) => {
        const btnSorts = document.querySelectorAll(".btn-sort");
        btnSorts.forEach((btnSort: any) => {
            btnSort.classList.remove("btn-active");
        });
        switch (type) {
            case "difficulty_asc":
                document.getElementById("btn-sort-difficulty-asc")?.classList.add("btn-active");
                break;
            case "difficulty_desc":
                document.getElementById("btn-sort-difficulty-desc")?.classList.add("btn-active");
                break;
            case "date_asc":
                document.getElementById("btn-sort-date-asc")?.classList.add("btn-active");
                break;
            case "date_desc":
                document.getElementById("btn-sort-date-desc")?.classList.add("btn-active");
                break;
            case "title_asc":
                document.getElementById("btn-sort-title-asc")?.classList.add("btn-active");
                break;
            case "title_desc":
                document.getElementById("btn-sort-title-desc")?.classList.add("btn-active");
                break;
        }
    }
    
    return (
        <div className="sort-zone mb-3">
            <Stack className="mt-0 d-flex flex-wrap justify-content-center" direction="horizontal" gap={3}>
                <div className="d-flex flex-column align-items-center justify-content-start flex-wrap">
                    <p className="text-blue-5 text-size-1 text-center mb-1">Difficulté</p>
                    <div className="d-flex justify-content-center gap-2">
                        <Button 
                        id="btn-sort-difficulty-asc"
                        className="btn-1 btn-sm bg-blue-3 text-blue-5 btn-sort" 
                        onClick={() => setSortType("difficulty_asc")}
                        title="Trier par difficulté ascendante."
                        >
                            Ascendant
                        </Button>
                        <Button 
                        id="btn-sort-difficulty-desc"
                        className="btn-1 btn-sm bg-blue-3 text-blue-5 btn-sort" 
                        onClick={() => setSortType("difficulty_desc")}
                        title="Trier par difficulté descendante."
                        >
                            Descendant
                        </Button>
                    </div>
                </div>
                
                <div className="d-flex flex-column align-items-center justify-content-start flex-wrap">
                    <p className="text-blue-5 text-size-1 text-center mb-1">Nom</p>
                    <div className="d-flex justify-content-center gap-2">
                        <Button 
                        id="btn-sort-title-asc"
                        className="btn-1 btn-sm bg-blue-3 text-blue-5 btn-sort" 
                        onClick={() => setSortType("title_asc")}
                        title="Trier par titre ascendant."
                        >
                            Ascendant
                        </Button>
                        <Button 
                        id="btn-sort-title-desc"
                        className="btn-1 btn-sm bg-blue-3 text-blue-5 btn-sort" 
                        onClick={() => setSortType("title_desc")}
                        title="Trier par titre descendant."
                        >
                            Descendant
                        </Button>
                    </div>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-start flex-wrap">
                    <p className="text-blue-5 text-size-1 text-center mb-1">Date</p>
                    <div className="d-flex justify-content-center gap-2">
                        <Button 
                        id="btn-sort-date-asc"
                        className="btn-1 btn-sm bg-blue-3 text-blue-5 btn-sort" 
                        onClick={() => setSortType("date_asc")}
                        title="Trier par date ascendante."
                        >
                            Ascendant
                        </Button>
                        <Button 
                        id="btn-sort-date-desc"
                        className="btn-1 btn-sm bg-blue-3 text-blue-5 btn-sort" 
                        onClick={() => setSortType("date_desc")}
                        title="Trier par date descendante."
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