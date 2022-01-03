import React from 'react'
import { useRouter } from 'next/router';
import { getStep } from '../../Utils/status'

import { ComponentProps } from '../_app';
import LoadingScreen from '../../components/loadingScreen';

const Index: React.FC<ComponentProps> = ({ viewer }) => {
  const router = useRouter();
  React.useEffect(() => {
    router.push(getStep(viewer.step))
  }, [])
  return (
    <LoadingScreen loading={true} />
  )
}

export default Index