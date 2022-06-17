import { h } from 'vue'

const CLASS_ELEMENT_PREFIX = 'blog-post-article__content-'
const UI_ENTITIES_MAP = {
  p: {
    tag: 'p',
    class: 'p',
    children: [],
  },
  pb: {
    tag: 'p',
    class: 'pb',
    children: [],
  },
  quote: {
    tag: 'p',
    class: 'quote',
    children: [],
  },
  ul: {
    tag: 'ul',
    class: 'ul',
    children: [],
  },
  li: {
    tag: 'li',
    class: 'li _ticked',
    children: [],
  },
}




export default function TextNode({contentData, prefix = CLASS_ELEMENT_PREFIX}) {
  const UIEntity = Object.keys(contentData)[0]
  const entityValue = contentData[UIEntity]
  const nodeData = JSON.parse(JSON.stringify(UI_ENTITIES_MAP[UIEntity]))

  UIEntity === 'ul' 
    ? entityValue.lis.map(liContentData => {
      const liNodeData = JSON.parse(JSON.stringify(UI_ENTITIES_MAP.li) )
      liNodeData.children.push(liContentData)
      return liNodeData
    }).forEach(liNodeData => nodeData.children.push(liNodeData) )
    : nodeData.children.push(entityValue)

  return h(
    nodeData.tag,
    {
      class: prefix + nodeData.class
    },
    nodeData.children.map(item => 
      typeof item === 'string' ? item : h(item.tag, {class: prefix + item.class}, item.children)
    )
  )
}