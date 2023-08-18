import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import ListProperty from '../pages/ListProperty'
import Stays from '../pages/Stays'
import Structure from '../pages/Structure'
import PrivacyType from '../pages/PrivacyType'
import Address from '../pages/Address'
import Amenities from '../pages/Amenities'
import Photos from '../pages/Photos'
import Price from '../pages/Price'
import Publish from '../pages/Publish'

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/privacy_type" element={<PrivacyType />} />
        <Route path="/address" element={<Address />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/price" element={<Price />} />
        <Route path="/list_property" element={<ListProperty />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/stays" element={<Stays />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/structure" element={<Structure />} />
      </Routes>
    </>
  )
}

export default AllRoutes