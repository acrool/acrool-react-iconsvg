import Icon, {EIconCode} from '../../library/acrool-react-icon';



const Example = () => {
   
    
    return <div className="d-flex flex-wrap gap-2">
        <Icon code="play" color="#fff" size={100}/>
        <Icon code="desktop" color="green" size={100}/>
        <Icon code="ad" color="var(--primary-color)" size={100}/>
        <Icon code={EIconCode.arrow_right} color="secondary" rotate={90} size={100}/>
        <Icon code={EIconCode.ad} size={100}/>
        <Icon code={EIconCode.heart} size={100}/>
        <Icon code={EIconCode.redo} size={100} isRotateAnimation/>
        <Icon code={EIconCode.upload} size={100}/>
        <Icon code={EIconCode.activity} size={100}/>
        <Icon code={EIconCode.help} size={100} onClick={() => window.alert('click!')}/>
    </div>;
};

export default Example;




