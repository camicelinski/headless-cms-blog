import * as prismic from '@prismicio/client'

class PrismicApi {
  repositoryName = 'longedaquiaquimesmo'
  endpoint = prismic.getEndpoint(this.repositoryName)
  client = prismic.createClient(this.endpoint)

  loadData () {
    return this.client
  }
}

export default PrismicApi
