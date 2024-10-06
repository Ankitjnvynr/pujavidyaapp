import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import ImageSlider from '../../../components/home/ImageSlider';
import SiteHome from '../../../components/home/SiteHome';



const images = [
  'https://via.placeholder.com/600x300',
  'https://via.placeholder.com/600x301',
  'https://via.placeholder.com/600x302',
  'https://via.placeholder.com/600x303',
];

export default function index() {
  return (
    <SafeAreaView>
    {/* <ImageSlider images={images} /> */}
    <SiteHome/>
  </SafeAreaView>
  )
}