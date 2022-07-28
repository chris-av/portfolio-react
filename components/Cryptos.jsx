import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import useWindowSize from '@/hooks/useWindowSize';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';

const walletAddress = {
  bitcoin: '36VbQZMPk69SLVauprfLZFu4yk1cFmUCwm',
  ethereum: '0x8f6f684ce9df9483753331D78b29367B4AE7A1Ef',
  doge: 'DMavjUyrMdkqYHojfBRR4Uu6742tVswqGW'
}

const Cryptos = () => {
  
  const [ copyBitCoinSuccess, setBitCoinCopySuccess ] = useState(null);
  const [ copyEthereumSuccess, setEthereumCopySuccess ] = useState(null);
  const [ copyDogeSuccess, setDogeCopySuccess ] = useState(null);
  const [ iconSize, setIconSize ] = useState('small');
  const windowSize = useWindowSize();

  useIsomorphicLayoutEffect(() => {
    if (windowSize.width > 900) { setIconSize('big'); }
    else if (windowSize.width < 1200) { setIconSize(''); }
    else if (windowSize.width < 900) { setIconSize('small'); }
  }, [windowSize]);


  const handleCopy = (type) => {
    
    if (windowSize < 900) return;

    if (type === 'bitcoin') {
      navigator.clipboard.writeText(walletAddress.bitcoin);
      setBitCoinCopySuccess('Hash copied!');
      setTimeout(() => {
        setBitCoinCopySuccess(null)
      }, 600);
    }
    
    if (type === 'ethereum') {
      navigator.clipboard.writeText(walletAddress.ethereum);
      setEthereumCopySuccess('Hash copied!');
      setTimeout(() => {
        setEthereumCopySuccess(null)
      }, 600);
    }
    
    if (type === 'doge') {
      navigator.clipboard.writeText(walletAddress.doge);
      setDogeCopySuccess('Hash copied!');
      setTimeout(() => {
        setDogeCopySuccess(null)
      }, 600);
    }

  }

  const useClass = {
    bitcoin: copyBitCoinSuccess ? "copy-success copy success-active" : "copy-success",
    ethereum: copyEthereumSuccess ? "copy-success copy success-active" : "copy-success",
    doge: copyDogeSuccess ? "copy-success copy success-active" : "copy-success"
  }
  
  return (
    <Container>
      <div className="crypto-container">
        <div className={useClass.bitcoin}>{copyBitCoinSuccess}</div>
        <i className={`bitcoin ${iconSize} icon yellow inverted circular`} onClick={() => handleCopy('bitcoin')}></i>
        <div className="crypto-label">
          <h3>Bitcoin</h3>
          <span>{walletAddress.bitcoin}</span>
        </div>
      </div>
      
      <div className="crypto-container">
        <div className={useClass.ethereum}>{copyEthereumSuccess}</div>
        <i className={`ethereum ${iconSize} icon blue inverted circular`} onClick={() => handleCopy('ethereum')}></i>
        <div className="crypto-label">
          <h3>Ethereum</h3>
          <span>{walletAddress.ethereum}</span>
        </div>
      </div>
      
    </Container>
  )
}


const Container = styled.div`
width: 100%;

.crypto-container{
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 30px;
  i { cursor: pointer; }
  .copy-success {
    position: absolute;
    visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    left: -25px;
    top: -50px;
    background-color: black;
    color: white;
    width: 130px;
    height: 35px;
    border-radius: 20px;
  }
  .copy-success::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 40%;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
  .copy-success {
    opacity: 0;
    transition: opacity 1s;
    transition: all 400ms;
  }
  .copy-success-active {
    visibility: visible;
    opacity: 1;
  }
}

.crypto-label {
  font-size: 1.2rem;
  text-align: right;
  h3 { margin: 0; padding: 0; }
  span { font-size: inherit; text-overflow: ellipsis; }
}

@media (max-width: 900px) {
  .crypto-label span { font-size: 9px; }
}

`;


export default Cryptos;
