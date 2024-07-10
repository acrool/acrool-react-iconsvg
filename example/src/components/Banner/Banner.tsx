import styled from 'styled-components';
import {useRef} from 'react';
import domtoimage from 'dom-to-image';
import Github from '../../assets/github.svg?react';
import {media} from "@acrool/react-grid";


interface IProps {
    className?: string
}



const repositoryUrl = 'https://github.com/acrool/acrool-react-iconsvg';
const name = 'Acrool React IconSvg';


const Banner = ({
    className,
}: IProps) => {
    const ref = useRef<HTMLDivElement>(null);


    const downloadBanner = () => {
        const node = ref.current;
        if(!node){
            return;
        }

        domtoimage.toPng(node, {quality: 0.95})
            .then(function (dataUrl) {
                const link = document.createElement('a');
                link.download = 'og.png';
                link.href = dataUrl;
                link.click();
            });
    };


    return <BannerRoot className={className}>
        <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">
            <Github width={40} height={40}/>
        </a>
        {/*<DownloadButton type="button" onClick={downloadBanner}>Download Banner</DownloadButton>*/}

        <DownloadWrapper ref={ref}>
            <img src="/logo.svg" alt={name}/>
            <h1>{name}</h1>
        </DownloadWrapper>
    </BannerRoot>;
};

export default Banner;



const DownloadButton = styled.button`
  position: absolute;
  right: 0;
`;


const DownloadWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 200px;
  max-width: 920px;
  width: 100%;
  gap: 12px;
  background-color: #000;
  
  > img{
    height: 100px;
  }
  
  > h1{
    word-wrap:break-word;

    font-size: 25px;
    color: #fff;
    font-weight: 700;
    line-height: 0;
  }

  ${media.sm`
    > h1{
        font-size: 40px;
        color: #fff;
        font-weight: 700;
        line-height: 0;
      }

  `}
`;


const BannerRoot = styled.div`
  position: relative;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
