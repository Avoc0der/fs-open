const _ = require('lodash')

const dummy = (blogs) => {
  console.log(blogs)
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (sum, item) => {
    return sum + item.likes
  }

  return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  const reducer = (prev, current) => {
    return prev.likes > current.likes ? prev : current
  }
  const { title, author, likes } = blogs.reduce(reducer, {})
  return {
    title,
    author,
    likes,
  }
}

const mostBlogs = (blogs) => {
  const groupedByAuthor = _.groupBy(blogs, 'author')
  const reducer = (prev, current) => {
    return [, prev].length > [, current].length ? prev : current
  }
  const [author, authorBlogs] = Object.entries(groupedByAuthor).reduce(reducer)

  return {
    author,
    blogs: authorBlogs.length,
  }
}

const mostLikes = (blogs) => {
  const groupedByAuthor = Object.entries(_.groupBy(blogs, 'author'))
  const everyAuthorSumOfLike = groupedByAuthor.map(([author, authorBlogs]) => {
    const sumOfLike = authorBlogs.reduce((prev, curr) => {
      return prev + curr.likes
    }, 0)
    return {
      author,
      likes: sumOfLike,
    }
  })
  const reducer = (prev, current) => {
    return prev.likes > current.likes ? prev : current
  }
  return everyAuthorSumOfLike.reduce(reducer, {})
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
}
