import React, { useState, useEffect, useRef } from 'react';
import { animated, useSpring } from 'react-spring';
import useMeasure from 'react-use-measure';
import PropTypes from 'prop-types';

import styles from './services.module.scss';
import * as Icons from '../Icons/Icons';


const toggle = {
  width: '1em',
  height: '1em',
  marginRight: 10,
  cursor: 'pointer',
  verticalAlign: 'middle',
}

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
}

const Tree = React.memo(({ children, name, style, defaultOpen = false }) => {
  const [ isOpen, setOpen ] = useState(defaultOpen);
  const previous = usePrevious(isOpen);
  const [ ref, { height: viewHeight } ] = useMeasure();
  const { height, opacity, y } = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: isOpen ? viewHeight: 0,
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : 20
    }
  })

  const Icon = Icons[ `${ children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO` ];

  return (
    <div className={styles['frame']}>
      <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} />
      <span className={styles['title']} style={style}>{ name }</span>
      <animated.div
        className={styles['content']}
        style={{
          opacity,
          height: isOpen && previous === isOpen ? 'auto' : height
        }}
      >
        <div 
          ref={ref} 
          style={{ y }} 
          children={children} 
        />
      </animated.div>
    </div>
  );
});

const Services = () => {
  return (
    <div className={styles['container']}>
      <div name="" defaultOpen>
        <Tree name="Blogging">
          <div>Word Press</div>
          <div>Custom solutions</div>
        </Tree>
        <Tree name="Landing Pages">
          <div>Single Page Applications</div>
          <div>Mailing lists</div>
        </Tree>
        <Tree name="E-Commerce">
          <div>Shopify</div>
          <div>Wix</div>
          <div>Custom Solutions</div>
        </Tree>
        <Tree name="Portfolios">
          <div>Comedians</div>
          <div>Photography</div>
          <div>Legal</div>
        </Tree>
        <Tree name="Social Media">
          <div>Raffles</div>
          <div>Analytics, custom integrations</div>
        </Tree>
        <Tree name="Data Analysis">
          <div>Data Cleaning</div>
          <Tree name="Statistical Analysis">
            <div>Single / Multiple Regression</div>
            <div>Time Series Analysis</div>
            <div>Logit Models</div>
            <div>Probit Models</div>
          </Tree>
        </Tree>
      </div>
    </div>
  );
}


Tree.propTypes = {
  name: PropTypes.string,
  defaultOpen: PropTypes.bool
}



export default Services;
