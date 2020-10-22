import React, { useState, useEffect } from 'react'
import Axios from 'axios'

import './App.css'
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import CharacterGrid from './components/Characters/CharacterGrid'

const API_URL = 'https://www.breakingbadapi.com/api/characters'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setsSearch] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios(`${API_URL}?name=${search}`)
      console.log(`${API_URL}?name=${search}`)
      setItems(response.data)
      setIsLoading(false)
    }
    fetchData()
  }, [search])

  console.log(search)

  return (
    <div className='container'>
      <Header />
      <Search getSearch={(query) => setsSearch(query)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App
