const getTargetFromUrl = (url: string) => {
  const urlSplit = url.split('?')

  if (urlSplit.length < 2) {
    return ''
  }

  const [, qs] = urlSplit
  const hastTargetBlank = qs.includes('target=_blank')

  return hastTargetBlank ? 'target=_blank' : ''
}

export const sanitizeLink = (href: string, title: string, content: string) => {
  const targetAtr = getTargetFromUrl(href)
  const targetRemoved = targetAtr
    ? href.replace(/target=_blank/, '').replace(/\?&/, '?')
    : href

  const cleanHref = targetRemoved.replace(/(\?|&)$/, '')
  const titleAtr = title ? `title="${title}"` : ''

  let finalLink = `<a style="font-weight: bold;color: black;" href="${cleanHref}"`

  if (titleAtr) {
    finalLink += ` ${titleAtr}`
  }

  if (targetAtr) {
    finalLink += ` ${targetAtr}`
  }

  finalLink += `>${content}</a>`

  return finalLink
}
