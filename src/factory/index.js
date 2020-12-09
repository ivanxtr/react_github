class Promises {
  constructor(url) {
    this.url = url
  }

  async getReactBugs() {
    const result = await fetch(this.url, {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    })

    const data = await result.json()
    return data
  }
}

class Filter {
  constructor(data, query) {
    this.data = data
    this.query = query
  }

  filterByTitle() {
    const tempData = []
    this.data.filter(item => {
      if (item.title.includes(this.query)) {
        tempData.push(item)
      }
      return tempData
    })
    return tempData
  }
}

export {
  Promises,
  Filter
}
