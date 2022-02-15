import linkResolver from "./link-resolver"
import prismicDOM from 'prismic-dom'

const Elements = prismicDOM.RichText.Elements

export default function (type, element, content, children) {
  // Generate links to Prismic Documents as <router-link> components
  if (type === Elements.hyperlink) {
    const url = prismicDOM.Link.url(element.data, linkResolver)
    if (element.data.link_type === 'Document') {
      return `<a href="${url}" data-nuxt-link>${content}</a>`
    }
  }

  // If an image links to a Prismic Document, it will return a <router-link> component
  if (type === Elements.image && element.linkTo && element.data.link_type === 'Document') {
    const url = prismicDOM.Link.url(element.linkTo, linkResolver)
    if (element.data.link_type === 'Document') {
      return `<a href="${url}" data-nuxt-link><img src="${element.url}" alt="${element.alt || ''}" copyright="${element.copyright || ''}"></a>`
    }
  }

  // Return null to stick with the default behavior for everything else.
  return null
}
