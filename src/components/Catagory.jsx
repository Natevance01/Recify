import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import { BiSushi } from 'react-icons/bi'
import { IconContext } from 'react-icons'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import React from 'react'

const Catagory = () => {

  return (
    <>
      <List>
        <Icons>
          <SLink to='/cuisine/Italian'>
            <IconContext.Provider 
              value={{size: '2rem'}}
            >
              <FaPizzaSlice />
              <h4>Italian</h4>
            </IconContext.Provider>
          </SLink>
          <SLink to='/cuisine/American'>
            <IconContext.Provider 
              value={{size: '2rem'}}
            >
              <FaHamburger />
              <h4>American</h4>
            </IconContext.Provider>
          </SLink>
          <SLink to='/cuisine/Japanese'>
            <IconContext.Provider 
              value={{size: '2rem'}}
            >
              <BiSushi />
              <h4>Japanese</h4>
            </IconContext.Provider>
          </SLink>
          <SLink to='/cuisine/Thai'>
            <IconContext.Provider 
              value={{size: '2rem'}}
            >
              <GiNoodles />
              <h4>Thai</h4>
            </IconContext.Provider>
          </SLink>
          <SLink to='/cuisine/Chinese'>
            <IconContext.Provider 
              value={{size: '2rem'}}
            >
              <GiChopsticks />
              <h4>Chinese</h4>
            </IconContext.Provider>
          </SLink>
        </Icons>
      </List>

      </>
    )
}

const List = styled.div `
  margin: 2rem 0rem;
` 
const Icons = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`

const SLink = styled(NavLink)`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  margin-right: 2rem;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  
  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057)
  }
  

  
  `

export default Catagory
