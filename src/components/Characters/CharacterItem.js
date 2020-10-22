import React from 'react'

const CharacterItem = ({ item }) => {
  console.log(item)
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
          <div className='card-text'>
            <p className='card-text-p'>
              <strong>{item.name}</strong>
            </p>
            <div>
              <img
                class='bee_logo'
                src='https://images-na.ssl-images-amazon.com/images/I/31NhsG8XFpL._SX425_.jpg'
                alt='logo alias'
              />
              <p>{item.nickname}</p>
            </div>
          </div>
        </div>
        <div className='card-back'>
          <h1 key={item.char_id}>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname: </strong> {item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
