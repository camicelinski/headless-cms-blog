import styled from 'styled-components'

const StyledPostItemSmall = styled.article`
  max-width: 720px;
  margin: 0 auto;  
  padding: 0 20px;
  border-bottom: 1px #ddd solid;

  h3 {
    margin-bottom: 20px;
    font-family: 'Lora', 'Times New Roman', serif;
    font-style: italic;
    font-size: 1.8rem;
    text-align: center;
  }

  h3:hover {
    color: #60a3bc;
  }

  p {
    line-height: 2.5rem;
    text-align: justify;
    margin-bottom: 25px;

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

  a {
    &.post_link-read-more {   
      font-weight: bold;
      margin-left: 5px;
      color: #60a3bc;
    }

    &.post_link-read-more:hover {
      color: #82ccdd;
    }
  }
`

export default StyledPostItemSmall
/*
<Link to={'/post/'.concat(post.uid)}>
        <h3>
          <PrismicText field={data.title} />
        </h3>
      </Link>
      <StyledImage
        className={'post_img'}
        src={data.post_image.url}
      />
      <span>{data.date}</span>
      <Introduction
        sliceZone={data.content}
        textLimit={500}
      />
      <Link to={'/post/'.concat(post.uid)}>
        <span>Leia mais...</span>
      </Link>
*/
