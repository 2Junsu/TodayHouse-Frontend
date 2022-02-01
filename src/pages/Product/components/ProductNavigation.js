import React, { useState } from 'react'
import styled from 'styled-components'
import { NavbarElement } from '../elements'

const element = ['상품정보', '리뷰', '문의', '배송/환불', '추천']

const ProductNavigation = () => {
  const [selectedElem, setSelectedElem] = useState(null) //선택된 navbar element의 id

  const onNavbarSelect = (idx) => {
    //선택된 navbar element의 id 저장 후 props로 하위 컴포넌트에 넘겨줌
    setSelectedElem(idx)
  }

  return (
    <Container>
      <Nav>
        {element.map((data, idx) => (
          <NavbarElement
            id={idx}
            text={data}
            onClick={() => {
              onNavbarSelect(idx)
            }}
            selectedElem={selectedElem}
          />
        ))}
      </Nav>
    </Container>
  )
}
const Container = styled.nav`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  border: 1px solid #dddddd;
  width: 100%;
`
const Nav = styled.ol`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  font-size: 16px;
  font-weight: bold;
  margin: 0px;
  padding: 0px;
`
export default ProductNavigation
