import styled from 'styled-components'

const StyledPostItem = styled.article`
  max-width: 720px;
  margin: 0 auto 40px;  
  padding: 0 20px;

  h2 {
    margin-bottom: 20px;
    font-family: 'Lora', 'Times New Roman', serif;
    font-style: italic;
    font-size: 2.2rem;
    text-align: center;
  }

  p {
    line-height: 2.5rem;
    text-align: justify;

    &.post_date {  
      margin-bottom: 0;
      font-family: 'Lora', 'Times New Roman', serif;
      font-style: italic;
      line-height: 1rem;
      // text-transform: uppercase;
      font-size: 1rem;
      color: #777;
      text-align: center;
    }    
  }   
`

export default StyledPostItem
