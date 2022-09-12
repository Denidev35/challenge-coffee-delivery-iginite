import styled from 'styled-components'

export const HomeContainer = styled.main``

export const Intro = styled.div`
  display: flex;
  gap: 3.5rem;
  margin: 5.875rem 0;
`
export const TitleItems = styled.div`
  width: 100%;
`

export const Title = styled.div`
  width: 100%;
  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
    padding-top: 1rem;
  }
`

export const Items = styled.div`
  margin-top: 4.125rem;

  display: flex;
  /* flex-wrap: wrap; */
  gap: 40px;
`
export const ItemsRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
interface IconItemProps {
  backgroundColor: string
}

export const IconItem = styled.div<IconItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1000px;
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.backgroundColor};
`
export const Item = styled.span`
  display: flex;
  align-items: center;

  gap: 0.75rem;
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};
  line-height: 1.3;
`
export const CoffeeContainer = styled.section`
  display: flex;
  flex-direction: column;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
    padding-top: 2rem;
  }
`
export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2.5rem;
  row-gap: 2rem;
  margin-top: 3.375rem;
`
