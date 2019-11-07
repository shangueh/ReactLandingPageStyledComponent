import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  padding: 8px;
  margin: -8px;
  background-position: 0 0;
  background-size: cover;
  background-image: url(https://a0.muscache.com/pictures/3af317de-5e92-4873-b174-78ab86ac4ab0.jpg);
`

const BlockText = styled.div`
  background-color: white;
  border-color: transparent;
  border-radius: 4px;
  width: 300px;
  padding: 32px;
  margin: 8px;
`

const Button = styled.button`
  background-color: rgb(219, 55, 66);
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  color: white;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`

const Content = () => {
  return (
    <Wrapper>
      <BlockText>
        <h1>Gagnez de l'argent en tant qu'hôte Airbnb</h1>
        <p>Découvrez ce que vous pourriez gagner</p>
        <Button>Souscrire</Button>
      </BlockText>
      <BlockText>
        <h2>Paris est populaire !</h2>
        <p>
          36 % des logements de votre zone géographique sont entièrement
          réservés la semaine prochaine.
        </p>
      </BlockText>
    </Wrapper>
  )
}

export default Content
