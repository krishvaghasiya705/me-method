import React from 'react'
import Homeherobanner from '../../../components/homepagecomponents/homeherobanner'
import Meseries from '../../../components/homepagecomponents/meseries'
import Meproducts from '../../../components/homepagecomponents/meproducts'
import Themenbehind from '../../../components/homepagecomponents/themenbehind'
import Storiesfromme from '../../../components/homepagecomponents/storiesfromme'

export default function Home() {
  return (
    <div>
      <Homeherobanner />
      <Meseries />
      <Meproducts />
      <Themenbehind />
      <Storiesfromme />
    </div>
  )
}
