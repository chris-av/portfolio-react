import { useState, } from 'react';
import { wallets as walletAddress } from '@/data/wallets.data';
import styled from 'styled-components';

import useWindowSize from '@/hooks/useWindowSize';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';


export default function Cryptos() {
  
  const [ copyBitCoinSuccess, setBitCoinCopySuccess ] = useState<string | null>(null);
  const [ copyEthereumSuccess, setEthereumCopySuccess ] = useState<string | null>(null);
  const [ copyDogeSuccess, setDogeCopySuccess ] = useState<string | null>(null);
  const [ iconSize, setIconSize ] = useState('small');
  const windowSize = useWindowSize();

  useIsomorphicLayoutEffect(() => {
    if (windowSize.width > 900) { setIconSize('big'); }
    else if (windowSize.width < 1200) { setIconSize(''); }
    else if (windowSize.width < 900) { setIconSize('small'); }
  }, [windowSize]);


  const handleCopy = (type : string) => {
    
    if (windowSize.width < 900) return;

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

  
  return (
    <div className="mx-auto max-w-[750px] px-12">

      <div className="crypto-container relative mx-4 my-8 flex items-center justify-between">
        <div 
          style={{
            opacity: copyBitCoinSuccess ? 1: 0, 
            transition: "opacity 1s", 
          }} 
          className="invisible absolute -left-[20px] -top-[50px] flex h-[35px] w-[130px] items-center justify-center rounded-lg bg-black font-bold text-white"
        >
          {copyBitCoinSuccess}
        </div>

        <i className={`bitcoin ${iconSize} icon yellow inverted circular`} onClick={() => handleCopy('bitcoin')}></i>

        <div className="crypto-label text-right">
          <h2 className="text-2xl">Bitcoin</h2>
          <span className="text-xs">{walletAddress.bitcoin}</span>
        </div>

      </div>
      
      <div className="crypto-container relative mx-4 my-8 flex items-center justify-between">
        <div 
          style={{
            opacity: copyBitCoinSuccess ? 1: 0, 
            transition: "opacity 1s", 
          }}
          className="invisible absolute -left-[20px] -top-[50px] flex h-[35px] w-[130px] items-center justify-center rounded-lg bg-black font-bold text-white"
        >
          {copyEthereumSuccess}
        </div>

        <i className={`ethereum ${iconSize} icon blue inverted circular`} onClick={() => handleCopy('ethereum')}></i>

        <div className="crypto-label text-right">
          <h2 className="text-2xl">Ethereum</h2>
          <span className="text-xs">{walletAddress.ethereum}</span>
        </div>
      </div>
      
    </div>
  )
}

