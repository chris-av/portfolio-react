import React, { useState, useEffect } from 'react';

import styles from './cryptos.module.scss'

const walletAddress = {
  bitcoin: '36VbQZMPk69SLVauprfLZFu4yk1cFmUCwm',
  ethereum: '0x8f6f684ce9df9483753331D78b29367B4AE7A1Ef',
  doge: 'DMavjUyrMdkqYHojfBRR4Uu6742tVswqGW'
}

const Cryptos = () => {
  
  const [ copyBitCoinSuccess, setBitCoinCopySuccess ] = useState(null);
	const [ copyEthereumSuccess, setEthereumCopySuccess ] = useState(null);
	const [ copyDogeSuccess, setDogeCopySuccess ] = useState(null);
  const [ windowSize, setWindowSize ] = useState(0);

  const getWindowSize = () => {
    const { innerWidth } = window;
    return innerWidth;
  }

  const determineIconSize = () => {
    const windowSize = getWindowSize();
    if (windowSize > 900) { return 'big'; }
    else if (windowSize < 1200) { return ''; }
    else if (windowSize < 900) { return 'small'; }
  }

  useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, [])


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
		bitcoin: copyBitCoinSuccess ? `${styles['copy-success']} ${styles['copy-success-active']}` : `${styles['copy-success']}`,
		ethereum: copyEthereumSuccess ? `${styles['copy-success']} ${styles['copy-success-active']}` : `${styles['copy-success']}`,
		doge: copyDogeSuccess ? `${styles['copy-success']} ${styles['copy-success-active']}` : `${styles['copy-success']}`
	}
  
  return (
    <div className={styles['container']}>
      <div className={styles['crypto-container']}>
        <div className={useClass.bitcoin}>{copyBitCoinSuccess}</div>
        <i className={`bitcoin ${determineIconSize()} icon yellow inverted circular`} onClick={() => handleCopy('bitcoin')}></i>
        <div className={styles['crypto-label']}>
          <h3>Bitcoin</h3>
          <span>{walletAddress.bitcoin}</span>
        </div>
      </div>
      
      <div className={styles['crypto-container']}>
        <div className={useClass.ethereum}>{copyEthereumSuccess}</div>
        <i className={`ethereum ${determineIconSize()} icon blue inverted circular`} onClick={() => handleCopy('ethereum')}></i>
        <div className={styles['crypto-label']}>
          <h3>Ethereum</h3>
          <span>{walletAddress.ethereum}</span>
        </div>
      </div>
      
      <div className={styles['crypto-container']}>
        <div className={useClass.doge}>{copyDogeSuccess}</div>
        <i className={`rocket ${determineIconSize()} icon black inverted circular`} onClick={() => handleCopy('doge')}></i>
        <div className={styles['crypto-label']}>
          <h3>Dogecoin</h3>
          <span>{walletAddress.doge}</span>
        </div>
      </div>
      
    </div>
  )
}

export default Cryptos;
