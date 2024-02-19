import { useState, useEffect } from 'react';

import UseCounter from '../hooks/use-counter'
import Card from './Card';

const ForwardCounter = () => {
  const counter = UseCounter();
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
