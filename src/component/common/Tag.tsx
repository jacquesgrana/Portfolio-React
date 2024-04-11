import Badge from 'react-bootstrap/Badge';
import ITag from '../../interface/ITag';

const Tag = (props: any) => {
    const tag: ITag = props.tag;
    return (
        <Badge 
        pill 
        className={`badge_${tag.id + 1} pill-hover`}
        >
            {tag.name}
        </Badge>
    );
}

export default Tag;