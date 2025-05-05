import styled, {keyframes} from 'styled-components';


interface IProps  {
     width: string
    height: string
}

const Loader = ({
    width,
    height
}: IProps) => {
    return <LoaderRoot src={'/loader.svg'} width={width} height={height}/>;
};

export default Loader;

const rotateAnimations = keyframes`
    0%{
        transform: rotate(0deg);
  }
    100%{
        transform: rotate(360deg);
  }
`;




const LoaderRoot = styled.img`
  animation: ${rotateAnimations} .8s linear infinite;
`;
